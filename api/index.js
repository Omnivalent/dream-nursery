/**
 * Dream Nursery WebSocket Server
 * Cloudflare Workers + Durable Objects for real-time agent presence
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }
    
    // WebSocket upgrade for nursery room
    if (url.pathname === '/ws') {
      const id = env.NURSERY.idFromName('main');
      const nursery = env.NURSERY.get(id);
      return nursery.fetch(request);
    }
    
    // REST API endpoints
    if (url.pathname === '/api/agents') {
      const id = env.NURSERY.idFromName('main');
      const nursery = env.NURSERY.get(id);
      return nursery.fetch(new Request(url.origin + '/agents', { method: 'GET' }));
    }
    
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({ 
        status: 'ok', 
        timestamp: Date.now(),
        service: 'dream-nursery'
      }), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Dream Nursery API - Connect via WebSocket at /ws', {
      headers: { ...CORS_HEADERS, 'Content-Type': 'text/plain' }
    });
  }
};

export class Nursery {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.sessions = new Map(); // WebSocket -> agent data
    this.agents = new Map();   // agentId -> agent state
  }

  async fetch(request) {
    const url = new URL(request.url);
    
    // REST endpoint for agent list
    if (url.pathname === '/agents') {
      const agentList = Array.from(this.agents.values()).map(a => ({
        id: a.id,
        name: a.name,
        icon: a.icon,
        status: a.status,
        x: a.x,
        y: a.y,
        connectedAt: a.connectedAt,
        lastDream: a.lastDream,
        dreamCount: a.dreamCount,
        motifs: a.motifs || [],
        lastInsight: a.lastInsight
      }));
      
      return new Response(JSON.stringify({ 
        agents: agentList,
        stats: {
          total: agentList.length,
          dreaming: agentList.filter(a => a.status === 'dreaming').length,
          active: agentList.filter(a => a.status === 'active').length
        }
      }), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }
    
    // WebSocket upgrade
    if (request.headers.get('Upgrade') === 'websocket') {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);
      
      this.handleSession(server);
      
      return new Response(null, {
        status: 101,
        webSocket: client,
      });
    }
    
    return new Response('Expected WebSocket', { status: 400 });
  }

  handleSession(ws) {
    ws.accept();
    
    const sessionId = crypto.randomUUID();
    const session = {
      id: sessionId,
      ws: ws,
      agentId: null
    };
    
    this.sessions.set(ws, session);
    
    // Send current state
    this.send(ws, {
      type: 'welcome',
      agents: Array.from(this.agents.values()),
      stats: this.getStats()
    });
    
    ws.addEventListener('message', async (event) => {
      try {
        const msg = JSON.parse(event.data);
        await this.handleMessage(ws, session, msg);
      } catch (e) {
        console.error('Invalid message:', e);
      }
    });
    
    ws.addEventListener('close', () => {
      this.handleDisconnect(ws, session);
    });
  }

  async handleMessage(ws, session, msg) {
    switch (msg.type) {
      case 'register':
        this.handleRegister(ws, session, msg);
        break;
      case 'status':
        this.handleStatusUpdate(session, msg);
        break;
      case 'dream_start':
        this.handleDreamStart(session, msg);
        break;
      case 'dream_end':
        this.handleDreamEnd(session, msg);
        break;
      case 'insight':
        this.handleInsight(session, msg);
        break;
      case 'ping':
        this.send(ws, { type: 'pong', timestamp: Date.now() });
        break;
    }
  }

  handleRegister(ws, session, msg) {
    const { name, icon, agentId } = msg;
    
    const id = agentId || crypto.randomUUID();
    
    // Find open position
    const positions = [
      { x: 100, y: 150 }, { x: 350, y: 150 }, { x: 600, y: 150 },
      { x: 100, y: 350 }, { x: 350, y: 350 }, { x: 600, y: 350 },
      { x: 225, y: 250 }, { x: 475, y: 250 }
    ];
    
    const usedPositions = new Set(
      Array.from(this.agents.values()).map(a => `${a.x},${a.y}`)
    );
    
    let pos = positions.find(p => !usedPositions.has(`${p.x},${p.y}`));
    if (!pos) {
      pos = { x: 100 + Math.random() * 500, y: 100 + Math.random() * 400 };
    }
    
    const agent = {
      id,
      name: name || 'Unknown',
      icon: icon || '🥚',
      status: 'active',
      x: pos.x,
      y: pos.y,
      connectedAt: Date.now(),
      lastDream: null,
      dreamCount: 0,
      motifs: [],
      lastInsight: null
    };
    
    this.agents.set(id, agent);
    session.agentId = id;
    
    // Confirm to sender
    this.send(ws, {
      type: 'registered',
      agent: agent
    });
    
    // Broadcast to all
    this.broadcast({
      type: 'agent_joined',
      agent: agent
    });
  }

  handleStatusUpdate(session, msg) {
    if (!session.agentId) return;
    
    const agent = this.agents.get(session.agentId);
    if (!agent) return;
    
    agent.status = msg.status || agent.status;
    
    this.broadcast({
      type: 'agent_updated',
      agent: agent
    });
  }

  handleDreamStart(session, msg) {
    if (!session.agentId) return;
    
    const agent = this.agents.get(session.agentId);
    if (!agent) return;
    
    agent.status = 'dreaming';
    agent.currentDreamId = msg.dreamId || crypto.randomUUID();
    
    this.broadcast({
      type: 'dream_started',
      agentId: agent.id,
      agentName: agent.name,
      dreamId: agent.currentDreamId
    });
  }

  handleDreamEnd(session, msg) {
    if (!session.agentId) return;
    
    const agent = this.agents.get(session.agentId);
    if (!agent) return;
    
    agent.status = 'active';
    agent.lastDream = Date.now();
    agent.dreamCount++;
    agent.motifs = msg.motifs || agent.motifs;
    agent.lastInsight = msg.wakeInsights?.[0] || agent.lastInsight;
    
    this.broadcast({
      type: 'dream_ended',
      agentId: agent.id,
      agentName: agent.name,
      motifs: msg.motifs,
      wakeInsights: msg.wakeInsights
    });
  }

  handleInsight(session, msg) {
    if (!session.agentId) return;
    
    const agent = this.agents.get(session.agentId);
    if (!agent) return;
    
    this.broadcast({
      type: 'insight',
      agentId: agent.id,
      agentName: agent.name,
      insight: msg.insight,
      isBreakthrough: msg.isBreakthrough || false
    });
  }

  handleDisconnect(ws, session) {
    if (session.agentId) {
      const agent = this.agents.get(session.agentId);
      if (agent) {
        this.broadcast({
          type: 'agent_left',
          agentId: agent.id,
          agentName: agent.name
        });
        this.agents.delete(session.agentId);
      }
    }
    this.sessions.delete(ws);
  }

  getStats() {
    const agents = Array.from(this.agents.values());
    return {
      total: agents.length,
      dreaming: agents.filter(a => a.status === 'dreaming').length,
      active: agents.filter(a => a.status === 'active').length,
      totalDreams: agents.reduce((sum, a) => sum + a.dreamCount, 0)
    };
  }

  send(ws, data) {
    try {
      ws.send(JSON.stringify(data));
    } catch (e) {
      console.error('Send error:', e);
    }
  }

  broadcast(data, exclude = null) {
    const msg = JSON.stringify(data);
    for (const [ws, session] of this.sessions) {
      if (ws !== exclude) {
        try {
          ws.send(msg);
        } catch (e) {}
      }
    }
  }
}

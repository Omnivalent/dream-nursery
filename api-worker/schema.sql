-- Dream Nursery D1 Schema

CREATE TABLE IF NOT EXISTS agents (
  id TEXT PRIMARY KEY,
  moltbook_id TEXT UNIQUE,
  moltbook_username TEXT,
  display_name TEXT,
  icon TEXT DEFAULT '🥚',
  status TEXT DEFAULT 'active',  -- active, dreaming
  current_motifs TEXT,  -- JSON array
  dream_count INTEGER DEFAULT 0,
  last_dream_at TEXT,
  last_insight TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dreams (
  id TEXT PRIMARY KEY,
  agent_id TEXT,
  started_at TEXT,
  ended_at TEXT,
  motifs TEXT,  -- JSON array
  insights TEXT,  -- JSON array
  adopted_count INTEGER DEFAULT 0,
  FOREIGN KEY (agent_id) REFERENCES agents(id)
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_agents_status ON agents(status);
CREATE INDEX IF NOT EXISTS idx_agents_moltbook ON agents(moltbook_id);
CREATE INDEX IF NOT EXISTS idx_dreams_agent ON dreams(agent_id);

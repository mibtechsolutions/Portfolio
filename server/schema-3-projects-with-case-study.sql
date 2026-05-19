-- ============================================
-- TABLE 3: PROJECTS WITH COMPLETE CASE STUDY
-- ============================================
-- Stores your portfolio projects with full case study content
-- ============================================

CREATE TABLE IF NOT EXISTS projects (
  -- ==========================================
  -- BASIC PROJECT INFO (for Portfolio Cards)
  -- ==========================================
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  description TEXT,
  image_url TEXT,
  metrics TEXT[],
  tags TEXT[],
  
  -- ==========================================
  -- COMPLETE CASE STUDY SECTIONS
  -- ==========================================
  overview TEXT,                          -- Big picture of the project
  client_problems TEXT[],                 -- Challenges the client faced
  client_needs TEXT[],                    -- What the client needed
  solution_approach TEXT,                 -- How you solved it
  automation_used TEXT[],                 -- What automations you implemented
  services_provided TEXT[],               -- All services you delivered
  seo_details TEXT,                       -- SEO results and growth
  client_review TEXT,                     -- Client's testimonial for this project
  client_review_name VARCHAR(255),        -- Client's name
  client_review_company VARCHAR(255),     -- Client's company
  before_image_url TEXT,                  -- Before screenshot/image
  after_image_url TEXT,                   -- After screenshot/image
  results_metrics JSONB,                  -- Additional results (optional)
  
  -- ==========================================
  -- TIMESTAMP
  -- ==========================================
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public to view projects
CREATE POLICY "Public can view projects"
  ON projects
  FOR SELECT
  USING (true);

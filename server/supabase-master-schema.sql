-- ============================================
-- MiB Tech Solutions - Complete Supabase Schema
-- ============================================

-- ============================================
-- 1. CONTACT SUBMISSIONS TABLE
-- ============================================
-- Stores all contact form submissions from your website
-- ============================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 2. TESTIMONIALS TABLE
-- ============================================
-- Stores client testimonials for your homepage
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 3. PROJECTS TABLE (with complete Case Study fields)
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
  automation_used TEXT[],                 -- What automations you implemented (Instagram, WhatsApp, etc.)
  services_provided TEXT[],               -- All services you delivered
  seo_details TEXT,                       -- SEO results and growth
  client_review TEXT,                     -- Client's testimonial for this project
  client_review_name VARCHAR(255),        -- Client's name
  client_review_company VARCHAR(255),     -- Client's company
  before_image_url TEXT,                  -- Before screenshot/image
  after_image_url TEXT,                   -- After screenshot/image
  results_metrics JSONB,                  -- Additional results metrics (optional)
  
  -- ==========================================
  -- TIMESTAMP
  -- ==========================================
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================
-- Enable RLS for security, but allow public read for portfolio
-- and public insert for contact form
-- ============================================
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- ============================================
-- POLICIES FOR PUBLIC ACCESS
-- ============================================

-- Allow public to view projects (for portfolio page)
CREATE POLICY "Public can view projects"
  ON projects
  FOR SELECT
  USING (true);

-- Allow public to view testimonials (for homepage)
CREATE POLICY "Public can view testimonials"
  ON testimonials
  FOR SELECT
  USING (true);

-- Allow public to submit contact forms
CREATE POLICY "Public can submit contact forms"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- END OF SCHEMA
-- ============================================
-- How to use this:
-- 1. Go to your Supabase project
-- 2. Click SQL Editor
-- 3. Click New query
-- 4. Paste this entire file
-- 5. Click Run
-- ============================================

-- ============================================
-- TABLE 1: CONTACT SUBMISSIONS
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

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to submit contact forms
CREATE POLICY "Public can submit contact forms"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

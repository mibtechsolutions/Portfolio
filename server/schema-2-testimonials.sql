-- ============================================
-- TABLE 2: TESTIMONIALS
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

-- Enable Row Level Security (RLS)
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public to view testimonials
CREATE POLICY "Public can view testimonials"
  ON testimonials
  FOR SELECT
  USING (true);

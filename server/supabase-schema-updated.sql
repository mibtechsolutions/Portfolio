-- Update projects table with case study fields
ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS overview TEXT,
ADD COLUMN IF NOT EXISTS client_problems TEXT[],
ADD COLUMN IF NOT EXISTS client_needs TEXT[],
ADD COLUMN IF NOT EXISTS solution_approach TEXT,
ADD COLUMN IF NOT EXISTS automation_used TEXT[],
ADD COLUMN IF NOT EXISTS services_provided TEXT[],
ADD COLUMN IF NOT EXISTS seo_details TEXT,
ADD COLUMN IF NOT EXISTS client_review TEXT,
ADD COLUMN IF NOT EXISTS client_review_name VARCHAR(255),
ADD COLUMN IF NOT EXISTS client_review_company VARCHAR(255),
ADD COLUMN IF NOT EXISTS before_image_url TEXT,
ADD COLUMN IF NOT EXISTS after_image_url TEXT,
ADD COLUMN IF NOT EXISTS results_metrics JSONB;

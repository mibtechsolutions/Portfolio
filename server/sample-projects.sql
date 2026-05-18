-- Insert sample projects into Supabase
INSERT INTO projects (title, category, description, image_url, metrics, tags)
VALUES 
(
  'AI Warehouse Customer Support',
  'Chatbots',
  'AI-powered chatbot handling 10,000+ daily conversations',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20customer%20support%20dashboard%2C%20chatbot%20interface%2C%20modern%20design%2C%20dark%20theme&image_size=landscape_16_9',
  ARRAY['10,000+ daily chats', '85% resolution rate', '24/7 availability'],
  ARRAY['AI', 'Chatbot', 'NLP']
),
(
  'RealEstate CRM Dashboard',
  'CRM',
  'Complete CRM system for real estate agency with lead automation',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=real%20estate%20CRM%20dashboard%2C%20property%20management%2C%20dark%20theme&image_size=landscape_16_9',
  ARRAY['300+ agents', '1000+ properties', '40% faster closings'],
  ARRAY['CRM', 'Automation', 'Real Estate']
),
(
  'Manufacturing AI Automation',
  'AI Automation',
  'IoT-enabled manufacturing monitoring and automation',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20factory%20AI%20automation%2C%20industrial%20IoT%2C%20dark%20theme&image_size=landscape_16_9',
  ARRAY['40% efficiency boost', 'Predictive maintenance', '99% uptime'],
  ARRAY['IoT', 'Manufacturing', 'AI']
),
(
  'WhatsApp Banking Solution',
  'WhatsApp',
  'Secure banking on WhatsApp with instant transactions',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=WhatsApp%20banking%20interface%2C%20mobile%20app%2C%20modern%20design&image_size=landscape_16_9',
  ARRAY['2M+ active users', '95% satisfaction', 'Instant transactions'],
  ARRAY['WhatsApp', 'Banking', 'Security']
),
(
  'Retail CRM Automation',
  'CRM',
  'Complete CRM platform for retail businesses',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=retail%20CRM%20dashboard%2C%20customer%20analytics%2C%20modern%20dark%20theme&image_size=landscape_16_9',
  ARRAY['500% revenue growth', '2M+ customers', '360° view'],
  ARRAY['CRM', 'Retail', 'Analytics']
),
(
  'E-commerce Growth Campaign',
  'Digital Marketing',
  'Complete digital marketing strategy driving exponential growth',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=digital%20marketing%20dashboard%2C%20growth%20analytics%2C%20social%20media%20campaigns%2C%20dark%20theme%2C%20gold%20accents&image_size=landscape_16_9',
  ARRAY['500% revenue growth', '2M+ impressions', '15% conversion rate'],
  ARRAY['SEO', 'Social Media', 'PPC']
);

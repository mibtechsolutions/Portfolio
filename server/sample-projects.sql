-- Insert sample projects with complete case study data into Supabase
INSERT INTO projects (
  title, 
  category, 
  description, 
  image_url, 
  metrics, 
  tags,
  overview,
  client_problems,
  client_needs,
  solution_approach,
  automation_used,
  services_provided,
  seo_details,
  client_review,
  client_review_name,
  client_review_company,
  before_image_url,
  after_image_url
)
VALUES 
(
  'AI Warehouse Customer Support',
  'Chatbots',
  'AI-powered chatbot handling 10,000+ daily conversations',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20customer%20support%20dashboard%2C%20chatbot%20interface%2C%20modern%20design%2C%20dark%20theme&image_size=landscape_16_9',
  ARRAY['10,000+ daily chats', '85% resolution rate', '24/7 availability'],
  ARRAY['AI', 'Chatbot', 'NLP'],
  'This project involved implementing an intelligent AI chatbot system for a large warehouse and logistics company. The client needed to handle massive customer inquiry volumes while maintaining high service quality and reducing operational costs.',
  ARRAY[
    'Overwhelmed customer support team with 10,000+ daily inquiries',
    'Long wait times for customers during peak hours',
    'High operational costs for 24/7 support',
    'Inconsistent response quality across different support agents'
  ],
  ARRAY[
    '24/7 automated customer support',
    'Instant response to common inquiries',
    'Seamless integration with existing CRM',
    'Multi-language support',
    'Analytics and reporting dashboard'
  ],
  'We designed and implemented a custom NLP-powered chatbot that could understand and respond to 85% of customer inquiries automatically. The system was trained on historical support tickets and integrated with their existing CRM and inventory management systems.',
  ARRAY[
    'Instagram inquiry automation',
    'WhatsApp customer support',
    'Email auto-response system',
    'Live chat integration',
    'FAQ knowledge base'
  ],
  ARRAY[
    'AI Chatbot Development',
    'NLP Integration',
    'CRM Integration',
    'Analytics Dashboard',
    '24/7 Support System'
  ],
  'Implemented comprehensive SEO strategy targeting logistics and warehouse solutions. Achieved top 3 rankings for 15+ key search terms, resulting in 300% increase in organic traffic and 200% increase in qualified leads.',
  'MiB Tech Solutions completely transformed our customer support operations. The AI chatbot handles 85% of our inquiries automatically, and our customer satisfaction has never been higher. Highly recommend!',
  'Rajesh Kumar',
  'CEO, WarehousePro Logistics',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=old%20fashioned%20customer%20support%20desk%2C%20busy%20office%2C%20stressful%20environment&image_size=landscape_16_9',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20AI%20dashboard%2C%20automated%20support%20system%2C%20calm%20office&image_size=landscape_16_9'
),
(
  'RealEstate CRM Dashboard',
  'CRM',
  'Complete CRM system for real estate agency with lead automation',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=real%20estate%20CRM%20dashboard%2C%20property%20management%2C%20dark%20theme&image_size=landscape_16_9',
  ARRAY['300+ agents', '1000+ properties', '40% faster closings'],
  ARRAY['CRM', 'Automation', 'Real Estate'],
  'Developed a comprehensive CRM platform for a leading real estate agency managing 300+ agents and 1000+ properties. The solution included lead management, property tracking, and automated marketing campaigns.',
  ARRAY[
    'Disorganized lead management across multiple spreadsheets',
    'No centralized property database',
    'Manual follow-up processes leading to missed opportunities',
    'Lack of analytics for agent performance'
  ],
  ARRAY[
    'Centralized lead management system',
    'Property database with search and filters',
    'Automated follow-up sequences',
    'Agent performance analytics',
    'Integration with property portals'
  ],
  'Built a custom CRM from scratch with modular design allowing easy scalability. Implemented AI-powered lead scoring, automated email sequences, and real-time property matching. The system integrates with all major property portals in India.',
  ARRAY[
    'Lead capture automation from websites',
    'Automated email drip campaigns',
    'WhatsApp lead notifications',
    'Social media post scheduling',
    'Property inquiry auto-responses'
  ],
  ARRAY[
    'Custom CRM Development',
    'Lead Management System',
    'Property Database',
    'Marketing Automation',
    'Analytics & Reporting'
  ],
  'SEO strategy focused on real estate keywords in Coimbatore and Tamil Nadu. Achieved first page rankings for 20+ key terms, resulting in 400% increase in website traffic and 250% increase in lead generation.',
  'The CRM system from MiB Tech has revolutionized how we manage our business. Our agents are 40% more productive, and we''ve seen a massive increase in closed deals. Absolutely fantastic work!',
  'Priya Venkatesh',
  'Director, Premium Properties Coimbatore',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=disorganized%20office%20with%20papers%20and%20spreadsheets%2C%20chaotic%20environment&image_size=landscape_16_9',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20real%20estate%20office%20with%20digital%20dashboard%2C%20organized%20and%20professional&image_size=landscape_16_9'
),
(
  'Manufacturing AI Automation',
  'AI Automation',
  'IoT-enabled manufacturing monitoring and automation',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20factory%20AI%20automation%2C%20industrial%20IoT%2C%20dark%20theme&image_size=landscape_16_9',
  ARRAY['40% efficiency boost', 'Predictive maintenance', '99% uptime'],
  ARRAY['IoT', 'Manufacturing', 'AI'],
  'Implemented a comprehensive IoT and AI solution for a manufacturing plant to monitor production lines, predict maintenance needs, and optimize overall equipment effectiveness.',
  ARRAY[
    'Unplanned downtime costing lakhs in revenue',
    'No real-time visibility into production',
    'Reactive maintenance approach',
    'Inefficient energy consumption'
  ],
  ARRAY[
    'Real-time production monitoring',
    'Predictive maintenance alerts',
    'Energy consumption optimization',
    'Quality control automation',
    'Inventory management integration'
  ],
  'Deployed IoT sensors across all production lines connected to a central AI system. Implemented machine learning models for predictive maintenance that can forecast equipment failures 72 hours in advance with 95% accuracy.',
  ARRAY[
    'Machine sensor data automation',
    'Production line monitoring',
    'Automated quality checks',
    'Maintenance alert system',
    'Energy usage optimization'
  ],
  ARRAY[
    'IoT Integration',
    'AI Analytics',
    'Predictive Maintenance',
    'Real-time Dashboard',
    'Energy Management'
  ],
  'Industrial SEO targeting manufacturing and automation solutions. Positioned as thought leaders in Industry 4.0. Achieved 500% increase in B2B inquiries and established partnerships with 3 major manufacturing associations.',
  'The AI automation system has transformed our manufacturing operations. We''ve reduced downtime by 60% and increased overall efficiency by 40%. MiB Tech Solutions delivered beyond our expectations!',
  'Suresh Mehta',
  'Plant Manager, Precision Manufacturing Ltd',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=old%20manufacturing%20plant%2C%20manual%20operations%2C%20outdated%20machinery&image_size=landscape_16_9',
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20factory%20with%20IoT%20sensors%2C%20AI%20dashboard%2C%20modern%20automation&image_size=landscape_16_9'
);

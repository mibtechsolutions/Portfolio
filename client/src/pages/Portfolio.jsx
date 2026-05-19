import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  EnhancedSection,
  TiltCard,
} from '../components/animations';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI Automation', 'CRM', 'WhatsApp', 'Chatbots', 'Websites', 'Digital Marketing'];

  const projects = [
    {
      id: 'ai-warehouse-automation',
      title: 'AI Warehouse Customer Support',
      category: 'Chatbots',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20customer%20support%20dashboard%2C%20chatbot%20interface%2C%20modern%20design%2C%20dark%20theme&image_size=landscape_16_9',
      description: 'AI-powered chatbot handling 10,000+ daily conversations',
      metrics: ['10,000+ daily chats', '85% resolution rate', '24/7 availability'],
      tags: ['AI', 'Chatbot', 'NLP']
    },
    {
      id: 'real-estate-dashboard',
      title: 'RealEstate CRM Dashboard',
      category: 'CRM',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=real%20estate%20CRM%20dashboard%2C%20property%20management%2C%20dark%20theme&image_size=landscape_16_9',
      description: 'Complete CRM system for real estate agency with lead automation',
      metrics: ['300+ agents', '1000+ properties', '40% faster closings'],
      tags: ['CRM', 'Automation', 'Real Estate']
    },
    {
      id: 'manufacturing-ai-automation',
      title: 'Manufacturing AI Automation',
      category: 'AI Automation',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20factory%20AI%20automation%2C%20industrial%20IoT%2C%20dark%20theme&image_size=landscape_16_9',
      description: 'IoT-enabled manufacturing monitoring and automation',
      metrics: ['40% efficiency boost', 'Predictive maintenance', '99% uptime'],
      tags: ['IoT', 'Manufacturing', 'AI']
    },
    {
      id: 'whatsapp-banking-solution',
      title: 'WhatsApp Banking Solution',
      category: 'WhatsApp',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=WhatsApp%20banking%20interface%2C%20mobile%20app%2C%20modern%20design&image_size=landscape_16_9',
      description: 'Secure banking on WhatsApp with instant transactions',
      metrics: ['2M+ active users', '95% satisfaction', 'Instant transactions'],
      tags: ['WhatsApp', 'Banking', 'Security']
    },
    {
      id: 'retail-crm-automation',
      title: 'Retail CRM Automation',
      category: 'CRM',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=retail%20CRM%20dashboard%2C%20customer%20analytics%2C%20modern%20dark%20theme&image_size=landscape_16_9',
      description: 'Complete CRM platform for retail businesses',
      metrics: ['500% revenue growth', '2M+ customers', '360° view'],
      tags: ['CRM', 'Retail', 'Analytics']
    },
    {
      id: 'ecommerce-growth-campaign',
      title: 'E-commerce Growth Campaign',
      category: 'Digital Marketing',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=digital%20marketing%20dashboard%2C%20growth%20analytics%2C%20social%20media%20campaigns%2C%20dark%20theme%2C%20gold%20accents&image_size=landscape_16_9',
      description: 'Complete digital marketing strategy driving exponential growth',
      metrics: ['500% revenue growth', '2M+ impressions', '15% conversion rate'],
      tags: ['SEO', 'Social Media', 'PPC']
    },
    {
      id: 'brand-awareness-campaign',
      title: 'Brand Awareness Campaign',
      category: 'Digital Marketing',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=brand%20marketing%20campaign%2C%20content%20strategy%2C%20analytics%20dashboard%2C%20modern%20design&image_size=landscape_16_9',
      description: 'Multi-channel brand awareness and engagement campaign',
      metrics: ['10x reach', '50K+ new followers', 'Viral content'],
      tags: ['Branding', 'Content', 'Influencer']
    },
    {
      id: 'educational-learning-platform',
      title: 'Educational Learning Platform',
      category: 'Websites',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=educational%20learning%20platform%2C%20online%20courses%20dashboard%2C%20edtech&image_size=landscape_16_9',
      description: 'Interactive e-learning platform with AI tutoring',
      metrics: ['100K+ students', '500+ courses', 'Personalized learning'],
      tags: ['EdTech', 'AI', 'E-learning']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const metrics = [
    { number: '100+', label: 'Successful Projects' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gold-gradient">Portfolio</span> & Success Stories
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore how we've helped businesses transform with cutting-edge AI and automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold-gradient mb-2">{metric.number}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-gold-gradient text-black gold-glow'
                    : 'glassmorphism border-gold text-gray-300 hover:border-gold-500'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glassmorphism rounded-xl overflow-hidden border-gold group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-gold-500/20 border border-gold-500/50 rounded-full text-gold-400 text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="text-gold-500 flex-shrink-0" size={16} />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/case-study/${project.id}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-gold-500 font-semibold"
                    >
                      View Case Study <ArrowUpRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gold-gradient">Success Story</span>
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=enterprise%20AI%20dashboard%2C%20business%20intelligence%2C%20data%20analytics%2C%20dark%20luxury%20theme&image_size=landscape_16_9"
                alt="Featured Project"
                className="rounded-xl glassmorphism border-gold p-2"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-500 font-semibold mb-4 block">Case Study</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Enterprise AI Transformation
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                We helped a Fortune 500 company transform their operations with AI automation,
                resulting in unprecedented efficiency gains and cost savings.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 glassmorphism rounded-lg border-gold">
                  <div className="text-3xl font-bold text-gold-500">400%</div>
                  <div className="text-gray-400 text-sm">ROI Increase</div>
                </div>
                <div className="text-center p-4 glassmorphism rounded-lg border-gold">
                  <div className="text-3xl font-bold text-gold-500">85%</div>
                  <div className="text-gray-400 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center p-4 glassmorphism rounded-lg border-gold">
                  <div className="text-3xl font-bold text-gold-500">24/7</div>
                  <div className="text-gray-400 text-sm">Operations</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow"
              >
                Read Full Case Study
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-3xl p-12 border-gold text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Next Success Story
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to transform your business like our clients?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold-gradient text-black font-bold rounded-lg gold-glow"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

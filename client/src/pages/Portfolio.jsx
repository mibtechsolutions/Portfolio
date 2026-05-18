import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, ExternalLink, Filter, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  EnhancedSection,
  TiltCard,
} from '../components/animations';

const API_BASE_URL = 'http://localhost:3001/api';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['All', 'AI Automation', 'CRM', 'WhatsApp', 'Chatbots', 'Websites', 'Digital Marketing'];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/projects`);
      const result = await response.json();
      
      if (result.success) {
        setProjects(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

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
            {loading ? (
              <div className="col-span-2 flex items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-gold-500 animate-spin" />
                <span className="ml-4 text-xl text-gray-400">Loading projects...</span>
              </div>
            ) : error ? (
              <div className="col-span-2 text-center py-20 glassmorphism rounded-xl p-12 border-gold">
                <h3 className="text-2xl font-bold mb-4 text-red-500">Error Loading Projects</h3>
                <p className="text-gray-400 mb-6">{error}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchProjects}
                  className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow"
                >
                  Try Again
                </motion.button>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="col-span-2 text-center py-20 glassmorphism rounded-xl p-12 border-gold">
                <h3 className="text-2xl font-bold mb-4 text-gold-500">No Projects Yet</h3>
                <p className="text-gray-400">
                  {activeFilter === 'All' 
                    ? 'Add projects to your Supabase database to see them here!' 
                    : `No projects found in the "${activeFilter}" category.`}
                </p>
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glassmorphism rounded-xl overflow-hidden border-gold group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image_url}
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
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="text-gold-500 flex-shrink-0" size={16} />
                            <span className="text-gray-300 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.id && (
                      <Link to={`/case-study/${project.id}`}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-gold-500 font-semibold"
                        >
                          View Case Study <ArrowUpRight size={18} />
                        </motion.button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))
            )}
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
              <div className="grid grid-cols-3 gap-4">
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

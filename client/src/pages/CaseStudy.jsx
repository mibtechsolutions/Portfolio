import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Brain,
  Zap,
  Target,
  Lightbulb,
  TrendingUp,
  Star,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import { AnimatedBackground, GradientBlob } from '../components/AnimatedBackground';

const API_BASE_URL = 'http://localhost:3001/api';

const CaseStudy = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/projects`);
      const result = await response.json();
      
      if (result.success) {
        const foundProject = result.data.find(p => p.id === id);
        if (foundProject) {
          setProject(foundProject);
        } else {
          setError('Project not found');
        }
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Error fetching project:', err);
      setError('Failed to load project');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xl text-gray-400">Loading case study...</span>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center glassmorphism rounded-xl p-12 border-gold">
          <h2 className="text-3xl font-bold mb-4 text-red-500">{error || 'Project Not Found'}</h2>
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow"
            >
              Back to Portfolio
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob className="opacity-40" />
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          {project.image_url && (
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-gold-500 mb-8 hover:text-gold-400 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gold-500/20 border border-gold-500/50 rounded-full text-gold-400 text-sm mb-6">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-gold-500" size={32} />
        </motion.div>
      </section>

      {/* Project Overview */}
      {project.overview && (
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gold-500/5 relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                  <Target className="text-gold-500" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Project <span className="text-gold-gradient">Overview</span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glassmorphism rounded-2xl p-10 border-gold"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Client Problems */}
      {project.client_problems && project.client_problems.length > 0 && (
        <section className="py-20 px-6 relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Zap className="text-red-400" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Challenges We <span className="text-red-400">Addressed</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.client_problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glassmorphism rounded-xl p-8 border-red-500/30 hover:border-red-500/60 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <CheckCircle className="text-red-400" size={20} />
                    </div>
                    <p className="text-lg text-gray-300">{problem}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Needs */}
      {project.client_needs && project.client_needs.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-b from-gold-500/5 to-black relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                  <Target className="text-gold-500" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Client <span className="text-gold-gradient">Requirements</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.client_needs.map((need, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glassmorphism rounded-xl p-8 border-gold text-center"
                >
                  <CheckCircle className="text-gold-500 mx-auto mb-4" size={32} />
                  <p className="text-gray-300">{need}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Solution */}
      {project.solution_approach && (
        <section className="py-20 px-6 relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                  <Lightbulb className="text-gold-500" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Our <span className="text-gold-gradient">Solution</span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glassmorphism rounded-2xl p-10 border-gold"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.solution_approach}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Automation Used */}
      {project.automation_used && project.automation_used.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gold-500/5 relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                  <Brain className="text-gold-500" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Automation <span className="text-gold-gradient">Implemented</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.automation_used.map((automation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glassmorphism rounded-xl p-8 border-gold"
                >
                  <div className="flex items-center gap-4">
                    <Zap className="text-gold-500 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="font-semibold text-gold-500">Automation</h3>
                      <p className="text-gray-300">{automation}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Provided */}
      {project.services_provided && project.services_provided.length > 0 && (
        <section className="py-20 px-6 relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                  <CheckCircle className="text-gold-500" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Services <span className="text-gold-gradient">Provided</span>
                </h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {project.services_provided.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glassmorphism rounded-xl p-8 border-gold text-center"
                >
                  <TrendingUp className="text-gold-500 mx-auto mb-4" size={32} />
                  <p className="font-semibold text-white">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO Details */}
      {project.seo_details && (
        <section className="py-20 px-6 bg-gradient-to-b from-gold-500/5 to-black relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                  <TrendingUp className="text-gold-500" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  SEO & <span className="text-gold-gradient">Growth</span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glassmorphism rounded-2xl p-10 border-gold"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.seo_details}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Before & After */}
      {project.before_image_url && project.after_image_url && (
        <section className="py-20 px-6 relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-30" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Transformation <span className="text-gold-gradient">Journey</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-gray-500">Before</span>
                </div>
                <img
                  src={project.before_image_url}
                  alt="Before"
                  className="w-full rounded-xl glassmorphism border-gold p-2"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-gold-gradient">After</span>
                </div>
                <img
                  src={project.after_image_url}
                  alt="After"
                  className="w-full rounded-xl glassmorphism border-gold p-2"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Client Review */}
      {project.client_review && (
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gold-500/5 relative overflow-hidden">
          <AnimatedBackground type="particles" color="gold" density="low" />
          <GradientBlob className="opacity-40" />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                What Our <span className="text-gold-gradient">Client Says</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glassmorphism rounded-2xl p-12 border-gold text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-gold-500 fill-gold-500" size={32} />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-300 italic mb-8">
                "{project.client_review}"
              </blockquote>
              {project.client_review_name && (
                <div>
                  <div className="font-bold text-xl text-white">{project.client_review_name}</div>
                  {project.client_review_company && (
                    <div className="text-gold-500">{project.client_review_company}</div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob className="opacity-60" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-3xl p-12 border-gold text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's create something amazing together
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gold-gradient text-black font-bold rounded-lg gold-glow flex items-center gap-2 mx-auto"
              >
                Get Started <ArrowUpRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;

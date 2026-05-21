import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Cpu, MessageSquare, Globe, Database, Code, BarChart3, Brain, TrendingUp, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  TextReveal,
  MagneticButton,
  SectionReveal,
  TiltCard,
  AnimatedCounter,
  EnhancedSection,
} from '../components/animations';
import { AnimatedBackground, GradientBlob, GridLines } from '../components/AnimatedBackground';
import homeHero from '../assets/home-hero.png';

const API_BASE_URL = 'https://mib-tech-backend.onrender.com/api';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);

  const stats = [
    { number: 500, label: 'Projects Delivered', suffix: '+' },
    { number: 200, label: 'Happy Clients', suffix: '+' },
    { number: 99, label: 'Satisfaction Rate', suffix: '%' },
    { number: 24, label: 'Support Available', suffix: '/7' },
  ];

  const services = [
    { icon: Brain, title: 'AI Automation', desc: 'Intelligent automation systems' },
    { icon: MessageSquare, title: 'WhatsApp Automation', desc: 'Customer interactions automation' },
    { icon: Zap, title: 'AI Chatbots', desc: 'Smart NLP chatbots' },
    { icon: Database, title: 'CRM Systems', desc: 'Custom CRM solutions' },
    { icon: TrendingUp, title: 'Digital Marketing', desc: 'Strategic digital marketing' },
    { icon: Code, title: 'Custom Software', desc: 'Bespoke development' },
    { icon: Globe, title: 'Web Development', desc: 'Premium websites' },
    { icon: Cpu, title: 'API Integration', desc: 'Seamless integrations' },
    { icon: Brain, title: 'Machine Learning', desc: 'Advanced ML models' },
    { icon: BarChart3, title: 'Dashboard Systems', desc: 'Real-time analytics' },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understand your requirements and goals' },
    { step: '02', title: 'Strategy', desc: 'Design a tailored solution strategy' },
    { step: '03', title: 'Development', desc: 'Build with cutting-edge technology' },
    { step: '04', title: 'Launch', desc: 'Deploy and optimize for success' },
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoadingTestimonials(true);
      const response = await fetch(`${API_BASE_URL}/testimonials`);
      const result = await response.json();
      
      if (result.success) {
        setTestimonials(result.data);
      } else {
        setTestimonialsError(result.message);
      }
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setTestimonialsError('Failed to load testimonials');
    } finally {
      setLoadingTestimonials(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <EnhancedSection className="relative pt-32 pb-20 px-6 overflow-hidden" type="scale" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="right" className="space-y-6" delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span className="text-gold-500 text-sm font-medium">Premium Enterprise Solutions</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Welcome to
                <span className="text-gold-gradient">
                  &nbsp;MiB Tech Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-lg">
                Welcome to MiB Tech Solutions — your trusted technology and AI transformation partner.
                We help businesses automate operations, boost productivity, and accelerate growth using advanced AI.
                Our smart automation solutions reduce manual work, increase efficiency, and build scalable systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow">
                  Get Started <ArrowRight size={20} />
                </MagneticButton>
                <MagneticButton className="px-6 py-3 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10">
                  Learn More
                </MagneticButton>
              </div>
            </EnhancedSection>

            <EnhancedSection direction="left" className="relative" delay={0.4}>
              <TiltCard className="relative">
                <DotLottieReact
                  src="https://lottie.host/5b766836-f45c-4d0f-9902-d96769c5057b/HafesgAsWR.lottie"
                  loop
                  autoplay
                  className="rounded-2xl w-full h-auto"
                />
              </TiltCard>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Stats Section */}
      <EnhancedSection className="py-20 px-6 border-y border-gold-500/10 relative overflow-hidden" type="scale" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <EnhancedSection key={index} delay={index * 0.15} className="text-center" type="slide" direction="up">
                <div className="text-5xl font-bold text-gold-gradient mb-2">
                  <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Services Section */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gold-gradient">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive enterprise solutions tailored to your business needs
            </p>
          </EnhancedSection>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <EnhancedSection
                key={index}
                delay={index * 0.06}
                type="scale"
                className="h-full"
              >
                <TiltCard className="glassmorphism rounded-xl p-4 border-gold group hover:border-gold-500/50 transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold-gradient/20 flex items-center justify-center mb-3 group-hover:gold-glow transition-all">
                    <service.icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="text-base font-bold mb-1">{service.title}</h3>
                  <p className="text-gray-400 text-xs">{service.desc}</p>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Process Section */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <GradientBlob className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gold-gradient">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </EnhancedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <EnhancedSection key={index} delay={index * 0.15} className="text-center" type="slide" direction={index % 2 === 0 ? 'up' : 'down'}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="text-6xl font-bold text-gold-gradient mb-4"
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Driving Digital Transformation Section */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="left" delay={0.2}>
              <div className="relative glassmorphism rounded-2xl p-8 border-gold">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gold-gradient/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-500/15 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-4">
                    {[
                      { label: 'AI Automation', percent: 95 },
                      { label: 'Process Efficiency', percent: 88 },
                      { label: 'Customer Satisfaction', percent: 92 },
                      { label: 'Cost Savings', percent: 85 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="text-sm text-gold-500 font-bold">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                            className="bg-gold-gradient h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="text-center glassmorphism p-4 rounded-xl border-gold"
                    >
                      <div className="text-3xl font-bold text-gold-gradient">500+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="text-center glassmorphism p-4 rounded-xl border-gold"
                    >
                      <div className="text-3xl font-bold text-gold-gradient">200+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Clients</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </EnhancedSection>
            
            <EnhancedSection direction="right" delay={0.3} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Driving Digital Transformation
                <span className="text-gold-gradient block"> Through AI</span>
              </h2>
              <p className="text-gray-400">
                At MiB Tech Solutions, we don't just build software; we architect the nervous systems of tomorrow's industry leaders. Our mission is to democratize elite-level intelligence for every scale of business.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-gold-gradient mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Uptime Reliability</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold-gradient mb-1">400%</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Efficiency Increase</div>
                </div>
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Testimonials */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <GradientBlob className="opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
          </EnhancedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {loadingTestimonials ? (
              <div className="col-span-3 flex items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-gold-500 animate-spin" />
                <span className="ml-4 text-xl text-gray-400">Loading testimonials...</span>
              </div>
            ) : testimonialsError ? (
              <div className="col-span-3 text-center py-20 glassmorphism rounded-xl p-12 border-gold">
                <h3 className="text-2xl font-bold mb-4 text-red-500">Error Loading Testimonials</h3>
                <p className="text-gray-400 mb-6">{testimonialsError}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchTestimonials}
                  className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow"
                >
                  Try Again
                </motion.button>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="col-span-3 text-center py-20 glassmorphism rounded-xl p-12 border-gold">
                <h3 className="text-2xl font-bold mb-4 text-gold-500">No Testimonials Yet</h3>
                <p className="text-gray-400">Add testimonials to your Supabase database to see them here!</p>
              </div>
            ) : (
              testimonials.map((testimonial, index) => (
                <EnhancedSection key={testimonial.id || index} delay={index * 0.15} type="slide" direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}>
                  <TiltCard className="glassmorphism rounded-xl p-8 border-gold">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-gold-500">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      {testimonial.company && (
                        <div className="text-gold-500 text-sm">{testimonial.company}</div>
                      )}
                    </div>
                  </TiltCard>
                </EnhancedSection>
              ))
            )}
          </div>
        </div>
      </EnhancedSection>

      {/* CTA Section */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="scale" delay={0.2}>
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob className="opacity-60" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="glassmorphism rounded-3xl p-12 border-gold text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/10 blur-3xl"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed with MiB Tech Solutions
              </p>
              <MagneticButton className="px-10 py-4 bg-gold-gradient text-black font-bold rounded-lg gold-glow">
                Get Started Today
              </MagneticButton>
            </div>
          </div>
        </div>
      </EnhancedSection>
    </div>
  );
};

export default Home;

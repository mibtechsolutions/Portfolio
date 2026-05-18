import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Cpu, MessageSquare, Globe, Database, Code, BarChart3, Brain, TrendingUp } from 'lucide-react';
import {
  TextReveal,
  MagneticButton,
  SectionReveal,
  TiltCard,
  AnimatedCounter,
  EnhancedSection,
} from '../components/animations';

const Home = () => {
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

  const testimonials = [
    { name: 'John Smith', company: 'CEO, TechCorp', text: 'MiB Tech transformed our operations with their AI automation. Game changer!' },
    { name: 'Sarah Johnson', company: 'Founder, StartupX', text: 'Outstanding service and innovative solutions. Highly recommend!' },
    { name: 'Michael Chen', company: 'CTO, Enterprise Inc', text: 'Professional team and exceptional results. Our business grew by 300%.' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <EnhancedSection className="relative pt-32 pb-20 px-6" type="scale" delay={0.1}>
        <div className="max-w-7xl mx-auto">
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
                <TextReveal text="Transforming" delay={0.3} />
                <span className="text-gold-gradient">
                  <TextReveal text=" Businesses" delay={0.5} />
                </span>
                <br />
                <TextReveal text="with AI Automation" delay={0.7} />
              </h1>

              <p className="text-xl text-gray-400 max-w-lg">
                Premium enterprise-level automation solutions powered by cutting-edge AI technology.
                Experience the future of business automation today.
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
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20AI%20neural%20network%20visualization%2C%20gold%20and%20neon%20lines%2C%20dark%20black%20background%2C%20digital%20enterprise%20dashboard&image_size=square_hd"
                  alt="AI Automation & Portfolio Services"
                  className="rounded-2xl w-full h-auto"
                  style={{
                    filter: 'drop-shadow(0 0 35px rgba(212, 175, 55, 0.6)) drop-shadow(0 0 70px rgba(212, 175, 55, 0.3))',
                  }}
                />
              </TiltCard>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Stats Section */}
      <EnhancedSection className="py-20 px-6 border-y border-gold-500/10" type="scale" delay={0.1}>
        <div className="max-w-7xl mx-auto">
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
      <EnhancedSection className="py-20 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
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
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
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
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
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
              
              <MagneticButton className="mt-4 px-8 py-3 border border-gold-500 text-gold-500 font-medium rounded-lg hover:bg-gold-500/10">
                Our Full Story
              </MagneticButton>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Testimonials */}
      <EnhancedSection className="py-20 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
          </EnhancedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <EnhancedSection key={index} delay={index * 0.15} type="slide" direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}>
                <TiltCard className="glassmorphism rounded-xl p-8 border-gold">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-gold-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gold-500 text-sm">{testimonial.company}</div>
                  </div>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* CTA Section */}
      <EnhancedSection className="py-20 px-6" type="scale" delay={0.2}>
        <div className="max-w-5xl mx-auto">
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

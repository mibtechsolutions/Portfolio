import { motion } from 'framer-motion';
import { Brain, MessageSquare, Zap, Globe, Database, Cpu, BarChart3, Code, TrendingUp, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Bot, Users, Shield, Layers, Smartphone, Server } from 'lucide-react';
import { useState } from 'react';
import {
  EnhancedSection,
  TiltCard,
  MagneticButton,
} from '../components/animations';
import { AnimatedBackground, GradientBlob } from '../components/AnimatedBackground';

const Services = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence Solutions',
      description: 'Transform your business with cutting-edge AI. We deliver custom AI solutions that drive innovation, automate decision-making, and unlock new possibilities for growth.',
      features: ['Custom AI model development', 'Natural language processing', 'Computer vision integration', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'Streamline operations and eliminate manual work with intelligent automation. Our solutions optimize workflows, reduce errors, and free your team for high-value tasks.',
      features: ['Robotic Process Automation (RPA)', 'Workflow orchestration', 'Document automation', 'Process optimization']
    },
    {
      icon: Database,
      title: 'CRM & ERP Solutions',
      description: 'Centralize your business operations with custom CRM and ERP systems. We build scalable solutions that integrate seamlessly with your existing tools and processes.',
      features: ['Custom CRM development', 'ERP implementation', 'Integration with existing systems', 'Real-time analytics dashboards']
    },
    {
      icon: Brain,
      title: 'Machine Learning Integration',
      description: 'Harness the power of ML to gain actionable insights from your data. We implement machine learning models that learn and improve over time.',
      features: ['ML model deployment', 'Data pipeline construction', 'Model training & optimization', 'A/B testing frameworks']
    },
    {
      icon: Globe,
      title: 'Website & Mobile App Development',
      description: 'Build stunning, high-performance digital experiences. We create responsive websites and native mobile apps that engage users and drive conversions.',
      features: ['Responsive web design', 'iOS & Android development', 'Progressive Web Apps', 'E-commerce solutions']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Brand Growth',
      description: 'Amplify your online presence with data-driven marketing strategies. We help you reach your target audience and build lasting brand relationships.',
      features: ['SEO optimization', 'Social media marketing', 'Content strategy', 'Performance analytics']
    },
    {
      icon: Bot,
      title: 'AI Chatbot Development',
      description: 'Deliver 24/7 customer support with intelligent chatbots. Our AI-powered bots handle inquiries, qualify leads, and provide instant assistance.',
      features: ['NLP-based chatbots', 'Multi-language support', 'Integration with WhatsApp', 'Custom conversation flows']
    },
    {
      icon: Layers,
      title: 'Workflow Automation',
      description: 'Design and automate complex business workflows. Our solutions ensure consistency, compliance, and efficiency across all your operations.',
      features: ['Visual workflow designer', 'Rule-based automation', 'Approval routing', 'Audit trails']
    },
    {
      icon: BarChart3,
      title: 'Data Management & Analytics',
      description: 'Turn raw data into strategic insights. We help you organize, analyze, and visualize your data to make informed business decisions.',
      features: ['Data warehousing', 'Business intelligence', 'Real-time dashboards', 'Data visualization']
    },
    {
      icon: Server,
      title: 'Corporate IT Support & Consulting',
      description: 'Get comprehensive IT support and strategic consulting. Our experts help you navigate technology challenges and plan for future growth.',
      features: ['24/7 IT support', 'Technology roadmap', 'Security assessments', 'Cloud migration consulting']
    }
  ];

  const strategySteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Deep dive into your business requirements, goals, and challenges to understand your needs completely.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Design a tailored solution strategy with clear milestones, timelines, and success metrics.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using cutting-edge technologies with continuous testing and quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Launch your solution seamlessly with comprehensive training and documentation for your team.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Monitor performance, gather feedback, and continuously improve to ensure long-term success.'
    }
  ];

  const testimonials = [
    {
      name: 'TechNova Inc.',
      role: 'CEO',
      text: 'MiB Tech transformed our operations completely. Their AI automation solutions reduced our manual work by 80% and increased productivity significantly.',
      company: 'Technology Company'
    },
    {
      name: 'Global Retail Group',
      role: 'Operations Director',
      text: 'Outstanding service and innovative approaches. The custom CRM they built helped us scale 300% in just 6 months.',
      company: 'Retail Industry'
    },
    {
      name: 'HealthFirst Systems',
      role: 'CTO',
      text: 'Professional, reliable, and cutting-edge. MiB Tech is the best technology partner we have worked with.',
      company: 'Healthcare Sector'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you deliver a custom solution?',
      answer: 'Delivery timelines vary by project scope, but we typically deliver MVPs in 4-8 weeks and complete solutions in 8-16 weeks. We always provide detailed timelines during our discovery phase.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive maintenance and support packages, including 24/7 critical support options. We can tailor support plans to your specific needs and budget.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We specialize in modern technologies including React, Node.js, Python, TensorFlow, AWS, Docker, PostgreSQL, MongoDB, Kubernetes, TypeScript, Next.js, and GraphQL, among others.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We have extensive experience integrating with legacy systems, third-party APIs, and existing software stacks. Seamless integration is one of our core strengths.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We provide a free 30-minute consultation to discuss your project requirements, explore how we can help, and answer any questions you may have.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. We work with you to find the best fit for your project.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <EnhancedSection className="pt-32 pb-20 px-6 relative overflow-hidden" type="scale" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-gold-500 text-sm font-medium tracking-wider uppercase">COMPREHENSIVE SOLUTIONS</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Our <span className="text-gold-gradient">Core Services</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business, streamline operations, and drive sustainable growth through innovation and automation.
            </p>
          </div>
        </div>
      </EnhancedSection>

      {/* Services Grid */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <EnhancedSection
                key={index}
                delay={index * 0.08}
                type="slide"
                direction={index % 2 === 0 ? 'left' : 'right'}
                className="h-full"
              >
                <TiltCard className="glassmorphism rounded-2xl p-8 border-gold h-full group hover:border-gold-500/50 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gold-gradient/20 flex items-center justify-center mb-6 group-hover:gold-glow transition-all">
                    <service.icon size={32} className="text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-gold-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Our Strategy */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-40" />
        <div className="max-w-5xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gold-gradient">Strategy</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven, structured approach to delivering exceptional results
            </p>
          </EnhancedSection>

          <div className="relative">
            <div className="space-y-0">
              {strategySteps.map((step, index) => (
                <EnhancedSection key={index} delay={index * 0.15} type="fade">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative ${index % 2 === 0 ? 'md:mr-auto md:pr-24' : 'md:ml-auto md:pl-24'} md:w-3/4`}
                  >
                    {/* Connecting decorative line */}
                    {index < strategySteps.length - 1 && (
                      <div className={`hidden md:block absolute ${index % 2 === 0 ? 'right-0 top-full' : 'left-0 top-full'} w-24 h-24 border-l-2 border-b-2 border-gold-500/30 ${index % 2 === 0 ? 'border-r-0' : 'border-r-2 border-l-0'} rounded-bl-3xl rounded-br-3xl`}></div>
                    )}

                    {/* Step indicator */}
                    <div className={`absolute top-8 ${index % 2 === 0 ? 'md:right-8' : 'md:left-8'} z-20`}>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-gold-gradient/10 blur-xl"></div>
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30">
                          <span className="text-2xl font-black text-black">{step.step}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Main content card */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.03,
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                      className="glassmorphism rounded-3xl p-10 border-2 border-gold/30 relative overflow-hidden group"
                      style={{
                        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.1)'
                      }}
                    >
                      {/* Decorative gradient overlay */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gold-500/5 to-transparent rounded-full blur-2xl"></div>
                      
                      {/* Background grid pattern */}
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                      }}></div>

                      <div className="relative z-10">
                        <div className={`${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="h-1 bg-gradient-to-r from-gold-500 to-transparent rounded-full mb-6"
                          ></motion.div>

                          <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-gold-400 group-hover:to-gold-200 transition-all duration-300">
                            {step.title}
                          </h3>
                          
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Decorative elements at bottom */}
                          <div className="flex gap-2 mt-6">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + i * 0.1 }}
                                className="w-2 h-2 rounded-full bg-gold-500"
                              ></motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </EnhancedSection>
              ))}
            </div>
          </div>
        </div>
      </EnhancedSection>

      {/* Trusted by Innovation Leaders */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-gold-gradient">Innovation Leaders</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies that trust MiB Tech Solutions
            </p>
          </EnhancedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <EnhancedSection key={index} delay={index * 0.15} type="slide" direction="up">
                <TiltCard className="glassmorphism rounded-2xl p-8 border-gold h-full">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-gold-500 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-xl text-gold-500">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-xs mt-1">{testimonial.company}</div>
                  </div>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* FAQ Section */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about our services
            </p>
          </EnhancedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <EnhancedSection key={index} delay={index * 0.1} type="fade">
                <motion.div
                  className="glassmorphism rounded-xl border-gold overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp size={24} className="text-gold-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={24} className="text-gold-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              </EnhancedSection>
            ))}
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
                Let's discuss how our comprehensive services can help you achieve your goals
              </p>
              <MagneticButton className="px-10 py-4 bg-gold-gradient text-black font-bold rounded-lg gold-glow">
                Get Started Today <ArrowRight size={20} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </EnhancedSection>
    </div>
  );
};

export default Services;

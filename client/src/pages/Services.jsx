import { motion } from 'framer-motion';
import { Brain, MessageSquare, Zap, Globe, Database, Cpu, BarChart3, Code, Cloud, TrendingUp, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Target, Shield, Globe2, ZapOff, Layers, Smartphone, ShoppingBag, Building2, Factory, HeartPulse, GraduationCap, PenTool } from 'lucide-react';
import { useState } from 'react';
import {
  EnhancedSection,
  TiltCard,
  MagneticButton,
} from '../components/animations';
import { AnimatedBackground, GradientBlob, GridLines } from '../components/AnimatedBackground';

const Services = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const capabilities = [
    { icon: Brain, title: 'AI Automation', desc: 'Intelligent automation systems' },
    { icon: MessageSquare, title: 'WhatsApp Automation', desc: 'Customer interactions' },
    { icon: Zap, title: 'AI Chatbots', desc: 'Smart NLP solutions' },
    { icon: TrendingUp, title: 'Digital Marketing', desc: 'Strategic growth campaigns' },
    { icon: Database, title: 'CRM Systems', desc: 'Custom CRM solutions' },
    { icon: Code, title: 'Custom Software', desc: 'Bespoke development' },
    { icon: Globe, title: 'Website Dev', desc: 'Premium websites' },
    { icon: Cpu, title: 'API Integration', desc: 'Seamless connections' },
  ];

  const sectors = [
    { icon: Building2, label: 'Corporate' },
    { icon: ShoppingBag, label: 'E-commerce' },
    { icon: Factory, label: 'Manufacturing' },
    { icon: HeartPulse, label: 'Healthcare' },
    { icon: GraduationCap, label: 'Education' },
    { icon: PenTool, label: 'Creative' },
    { icon: Smartphone, label: 'Mobile' },
    { icon: Layers, label: 'SaaS' },
  ];

  const executionSteps = [
    { step: '01', title: 'Discovery', desc: 'Deep dive into your needs' },
    { step: '02', title: 'Design', desc: 'Craft the perfect strategy' },
    { step: '03', title: 'Implement', desc: 'Build with excellence' },
    { step: '04', title: 'Optimize', desc: 'Refine and perfect' },
  ];

  const techStack = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker',
    'PostgreSQL', 'MongoDB', 'Kubernetes', 'TypeScript', 'Next.js', 'GraphQL'
  ];

  const testimonials = [
    { name: 'TechCorp Inc', text: 'MiB Tech transformed our operations completely. Their AI solutions are game-changing.' },
    { name: 'StartupX', text: 'Outstanding service and innovative approaches. We scaled 300% in 6 months.' },
    { name: 'Global Enterprises', text: 'Professional, reliable, and cutting-edge. The best tech partner we\'ve had.' },
  ];

  const faqs = [
    { question: 'How quickly can you deliver a project?', answer: 'Delivery timelines vary by scope, but we typically deliver MVPs in 4-8 weeks and full solutions in 8-16 weeks.' },
    { question: 'Do you provide ongoing support?', answer: 'Yes! We offer comprehensive maintenance and support packages, including 24/7 critical support options.' },
    { question: 'What technologies do you specialize in?', answer: 'We specialize in React, Node.js, Python, AI/ML, cloud infrastructure, and modern web technologies.' },
    { question: 'Can you work with our existing team?', answer: 'Absolutely! We can integrate seamlessly with your in-house team, providing expertise where needed.' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <EnhancedSection className="pt-32 pb-20 px-6 relative overflow-hidden" type="scale" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="right" className="space-y-6" delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Smart AI Solutions for
                <span className="text-gold-gradient block"> Modern Businesses</span>
              </h1>
              
              <MagneticButton className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow">
                Get Started
              </MagneticButton>
            </EnhancedSection>

            <EnhancedSection direction="left" className="relative" delay={0.3}>
              <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full"></div>
              <div className="relative glassmorphism rounded-2xl border-gold p-2">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
                  alt="AI Solutions"
                  className="rounded-xl w-full"
                />
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Our Core Capabilities */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-12" type="scale" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core <span className="text-gold-gradient">Capabilities</span>
            </h2>
          </EnhancedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, index) => (
              <EnhancedSection key={index} delay={index * 0.08} type="scale" className="h-full">
                <TiltCard className="glassmorphism rounded-xl p-5 border-gold h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold-gradient/20 flex items-center justify-center mb-3">
                    <cap.icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="text-sm font-bold mb-1">{cap.title}</h3>
                  <p className="text-gray-400 text-xs">{cap.desc}</p>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Featured Service - AI Automation Excellence */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <GradientBlob className="opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="left" delay={0.2} className="space-y-6">
              <h2 className="text-3xl font-bold">
                AI Automation <span className="text-gold-gradient">Excellence</span>
              </h2>
              <p className="text-gray-400">
                Transform your operations with intelligent automation that learns, adapts, and scales with your business needs. Our AI systems deliver unprecedented efficiency.
              </p>
              <div className="space-y-3">
                {[
                  'Smart workflow optimization',
                  'Predictive analytics integration',
                  'Continuous learning systems',
                  'Seamless scalability'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-gold-500" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </EnhancedSection>

            <EnhancedSection direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/15 blur-3xl rounded-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
                  alt="AI Automation"
                  className="relative rounded-2xl w-full"
                />
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Global Intelligence for Every Sector */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-12" type="scale" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Global Intelligence for <span className="text-gold-gradient">Every Sector</span>
            </h2>
          </EnhancedSection>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {sectors.map((sector, index) => (
              <EnhancedSection key={index} delay={index * 0.06} type="scale">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glassmorphism rounded-xl p-4 border-gold text-center"
                >
                  <sector.icon size={24} className="text-gold-500 mx-auto mb-2" />
                  <span className="text-gray-300 text-xs">{sector.label}</span>
                </motion.div>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Our Strategic Execution */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <GradientBlob className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-12" type="scale" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-gold-gradient">Strategic Execution</span>
            </h2>
          </EnhancedSection>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {executionSteps.map((step, index) => (
              <EnhancedSection key={index} delay={index * 0.15} type="scale" className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient/20 border-2 border-gold-500/50 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-gold-500">{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-xs">{step.desc}</p>
                  {index < executionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-gold-500/50 to-transparent"></div>
                  )}
                </div>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* The Technical Edge */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <GridLines />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-12" type="scale" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold">
              The <span className="text-gold-gradient">Technical Edge</span>
            </h2>
          </EnhancedSection>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech, index) => (
              <EnhancedSection key={index} delay={index * 0.05} type="scale">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glassmorphism rounded-lg p-3 border-gold text-center"
                >
                  <span className="text-sm font-bold text-gray-200">{tech}</span>
                </motion.div>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Trusted by Innovation Leaders */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <GradientBlob className="opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-12" type="scale" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by <span className="text-gold-gradient">Innovation Leaders</span>
            </h2>
          </EnhancedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <EnhancedSection key={index} delay={index * 0.15} type="slide" direction="up">
                <TiltCard className="glassmorphism rounded-xl p-6 border-gold h-full">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-gold-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm italic">"{testimonial.text}"</p>
                  <div className="font-bold text-gold-500">{testimonial.name}</div>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* FAQ Section */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <div className="max-w-4xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-12" type="scale" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>
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
                    className="w-full p-5 flex justify-between items-center text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp size={20} className="text-gold-500" />
                    ) : (
                      <ChevronDown size={20} className="text-gold-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-5 pb-5 text-gray-400">
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
                Ready to Transform Your Business with AI?
              </h2>
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

export default Services;

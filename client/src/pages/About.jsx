import { motion } from 'framer-motion';
import { Target, Eye, Award, Shield, Users, Zap, CheckCircle, TrendingUp, Code, Cpu, Globe, Database, Brain, Bot, BarChart3, Clock } from 'lucide-react';
import {
  EnhancedSection,
  TiltCard,
  MagneticButton,
} from '../components/animations';

const About = () => {
  const expertise = [
    { icon: Code, title: 'Custom Development', desc: 'Bespoke solutions tailored to your needs' },
    { icon: Brain, title: 'AI & ML', desc: 'Cutting-edge artificial intelligence and machine learning' },
    { icon: Cpu, title: 'Cloud Infrastructure', desc: 'Scalable cloud solutions for modern businesses' },
    { icon: Bot, title: 'Automation', desc: 'Smart automation to streamline operations' },
    { icon: BarChart3, title: 'Analytics', desc: 'Data-driven insights for better decisions' },
    { icon: Globe, title: 'Global Reach', desc: 'Solutions that scale worldwide' },
  ];

  const team = [
    { name: 'Alex Morgan', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop' },
    { name: 'Sarah Williams', role: 'CTO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'David Chen', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Emily Davis', role: 'AI Researcher', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker',
    'PostgreSQL', 'MongoDB', 'Kubernetes', 'TypeScript', 'Next.js', 'GraphQL'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <EnhancedSection className="pt-32 pb-20 px-6" type="scale" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="right" className="space-y-6" delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span className="text-gold-500 text-sm font-medium tracking-wider uppercase">NEXT-GEN INTELLIGENCE</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transforming Businesses with
                <span className="text-gold-gradient block"> AI Automation</span>
              </h1>

              <p className="text-lg text-gray-400 max-w-lg">
                Streamline operations and unlock exponential growth with our bespoke intelligent automation solutions. We turn complexity into competitive advantage.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow">
                  Get Started
                </MagneticButton>
                <MagneticButton className="px-6 py-3 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10">
                  Book Free Consultation
                </MagneticButton>
              </div>
            </EnhancedSection>

            <EnhancedSection direction="left" className="relative" delay={0.3}>
              <div className="absolute -inset-10 bg-gold-500/20 blur-3xl rounded-full"></div>
              <div className="relative">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20AI%20neural%20network%20visualization%2C%20gold%20and%20neon%20lines%2C%20dark%20black%20background%2C%20digital%20enterprise%20dashboard&image_size=square_hd"
                  alt="AI Neural Network"
                  className="rounded-2xl w-full h-auto drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.5)) drop-shadow(0 0 60px rgba(212, 175, 55, 0.25))',
                  }}
                />
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* The MiB Edge Section */}
      <EnhancedSection className="py-20 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/15 blur-3xl rounded-3xl"></div>
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20business%20team%20in%20modern%20office%20with%20futuristic%20AI%20interfaces%2C%20blue%20and%20gold%20lighting%2C%20dark%20luxury%20theme&image_size=landscape_16_9"
                  alt="MiB Tech Team"
                  className="relative rounded-2xl w-full"
                />
              </div>
            </EnhancedSection>
            
            <EnhancedSection direction="right" delay={0.3} className="space-y-6">
              <span className="text-gold-500 font-medium tracking-wider text-sm uppercase">
                THE MIB EDGE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Pioneering the Future of Workflow
              </h2>
              <p className="text-lg text-gray-400">
                At MiB Tech Solutions, we bridge the gap between traditional business operations and the future of AI. Our expertise spans across multi-modal AI systems, high-performance web development, and sophisticated WhatsApp automation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient/20 flex items-center justify-center border border-gold-500/50">
                    <CheckCircle size={16} className="text-gold-500" />
                  </div>
                  <span className="text-gray-200">Custom AI agents tailored to your industry workflows.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient/20 flex items-center justify-center border border-gold-500/50">
                    <CheckCircle size={16} className="text-gold-500" />
                  </div>
                  <span className="text-gray-200">Enterprise-grade web applications with modern tech stacks.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient/20 flex items-center justify-center border border-gold-500/50">
                    <CheckCircle size={16} className="text-gold-500" />
                  </div>
                  <span className="text-gray-200">Seamless communication via intelligent WhatsApp automation.</span>
                </div>
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Mission & Vision */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <EnhancedSection direction="left" delay={0.2} type="slide">
              <div className="glassmorphism rounded-xl p-8 border-gold h-full">
                <Target className="text-gold-500 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To empower businesses with intelligent automation solutions that drive growth, efficiency, and innovation. We believe in making advanced technology accessible to all enterprises.
                </p>
              </div>
            </EnhancedSection>

            <EnhancedSection direction="right" delay={0.3} type="slide">
              <div className="glassmorphism rounded-xl p-8 border-gold h-full">
                <Eye className="text-gold-500 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400">
                  To be the global leader in AI-driven automation, setting new standards for enterprise technology solutions and transforming the way businesses operate in the digital age.
                </p>
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Expertise Section */}
      <EnhancedSection className="py-20 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Businesses <span className="text-gold-gradient">Trust Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our expertise spans across multiple domains, ensuring we deliver comprehensive solutions
            </p>
          </EnhancedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <EnhancedSection
                key={index}
                delay={index * 0.12}
                type="scale"
                className="h-full"
              >
                <TiltCard className="glassmorphism rounded-xl p-6 border-gold h-full">
                  <item.icon className="text-gold-500 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Team Section */}
      <EnhancedSection className="py-20 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-gold-gradient">Experts</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A talented team dedicated to your success
            </p>
          </EnhancedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <EnhancedSection
                key={index}
                delay={index * 0.15}
                type="slide"
                direction="up"
                className="h-full"
              >
                <TiltCard className="glassmorphism rounded-xl overflow-hidden border-gold h-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gold-500">{member.role}</p>
                  </div>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Why Choose MiB? */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gold-gradient">MiB Tech?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine innovation, reliability, and excellence to deliver unmatched solutions
            </p>
          </EnhancedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Security',
                desc: 'Enterprise-grade security protocols and data protection measures for complete peace of mind.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                desc: 'Optimized performance and rapid deployment times to get your solutions up and running quickly.'
              },
              {
                icon: Target,
                title: 'Precision Focus',
                desc: 'Tailored solutions designed specifically for your unique business needs and goals.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'A dedicated team of experienced professionals committed to your success.'
              },
              {
                icon: Award,
                title: 'Proven Excellence',
                desc: 'Track record of delivering exceptional results for hundreds of satisfied clients.'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                desc: 'Round-the-clock support and maintenance to keep your systems running smoothly.'
              },
            ].map((item, index) => (
              <EnhancedSection key={index} delay={index * 0.1} type="scale" className="h-full">
                <TiltCard className="glassmorphism rounded-xl p-6 border-gold h-full">
                  <div className="w-14 h-14 rounded-lg bg-gold-gradient/20 flex items-center justify-center mb-4">
                    <item.icon size={28} className="text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
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
                Ready to Join Our Journey?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's work together to transform your business with cutting-edge technology
              </p>
            </div>
          </div>
        </div>
      </EnhancedSection>
    </div>
  );
};

export default About;

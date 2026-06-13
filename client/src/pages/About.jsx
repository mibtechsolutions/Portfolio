import { motion, useEffect, useRef } from 'framer-motion';
import { Target, Eye, Award, Shield, Users, Zap, CheckCircle, TrendingUp, Code, Cpu, Globe, Database, Brain, Bot, BarChart3, Clock } from 'lucide-react';
import { EnhancedSection, TiltCard, MagneticButton } from '../components/animations';
import { AnimatedBackground, GradientBlob, GridLines } from '../components/AnimatedBackground';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ceoImg from '../assets/ceo.png';

const About = () => {
  const splineRef = useRef(null);

  useEffect(() => {
    const hideLogo = () => {
      const splineViewer = splineRef.current;
      if (splineViewer && splineViewer.shadowRoot) {
        const existingStyle = splineViewer.shadowRoot.querySelector('#hide-spline-logo');
        if (!existingStyle) {
          const style = document.createElement('style');
          style.id = 'hide-spline-logo';
          style.textContent = `
            a, [class*="logo"], [class*="watermark"], [href*="spline"], div[style*="bottom"], div[style*="position: absolute"] {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
            }
          `;
          splineViewer.shadowRoot.appendChild(style);
        }
      }
    };

    const t1 = setTimeout(hideLogo, 500);
    const t2 = setTimeout(hideLogo, 1500);
    const t3 = setTimeout(hideLogo, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const expertise = [
    { icon: Code, title: 'Custom Development', desc: 'Bespoke solutions tailored to your needs' },
    { icon: Brain, title: 'AI & ML', desc: 'Cutting-edge artificial intelligence and machine learning' },
    { icon: Cpu, title: 'Cloud Infrastructure', desc: 'Scalable cloud solutions for modern businesses' },
    { icon: Bot, title: 'Automation', desc: 'Smart automation to streamline operations' },
    { icon: BarChart3, title: 'Analytics', desc: 'Data-driven insights for better decisions' },
    { icon: Globe, title: 'Global Reach', desc: 'Solutions that scale worldwide' },
  ];

  const team = [
    { name: 'Sheik Mohammed Mustafa Imran', role: 'CEO & Founder', img: ceoImg },
    { name: 'Sarah Williams', role: 'CTO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'David Chen', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Emily Davis', role: 'AI Researcher', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Kubernetes', 'TypeScript', 'Next.js', 'GraphQL'
  ];

  const splineCards = [
    { title: 'AI AUTOMATION', desc: 'Transform operations with smart AI systems', position: 'top' },
    { title: 'CHATBOTS', desc: 'Intelligent conversational AI', position: 'right' },
    { title: 'WEB3 & APPS', desc: 'Cutting-edge full-stack solutions', position: 'bottom' },
    { title: 'SMART MARKETING', desc: 'Data-driven marketing automation', position: 'left' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <EnhancedSection className="pt-32 pb-20 px-6 relative overflow-hidden" type="scale" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="right" className="space-y-6" delay={0.2}>
              <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.3 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-gold-500 text-sm font-medium tracking-wider uppercase">NEXT-GEN INTELLIGENCE</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">Transforming Businesses with <span className="text-gold-gradient block">AI Automation</span></h1>
              <p className="text-lg text-gray-400 max-w-lg">
                Welcome to MiB Tech Solutions — your trusted technology and AI transformation partner. We help businesses automate operations, boost productivity, and accelerate growth using advanced AI. Our smart automation solutions reduce manual work, increase efficiency, and build scalable systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow">Get Started</MagneticButton>
                <MagneticButton className="px-6 py-3 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10">Book Free Consultation</MagneticButton>
              </div>
            </EnhancedSection>
            <EnhancedSection direction="left" className="relative" delay={0.3}>
              <div className="absolute -inset-10 bg-gold-500/20 blur-3xl rounded-full" />
              <div className="relative aspect-square lg:aspect-[4/3] relative">
                {/* Top Card */}
                <motion.div initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.6 }} viewport={{ once:true }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4 z-20">
                  <div className="glassmorphism border-gold rounded-xl p-4 border text-center">
                    <h3 className="text-gold-500 font-bold text-lg">AI AUTOMATION</h3>
                    <p className="text-gray-300 text-sm">Transform operations with smart AI systems</p>
                  </div>
                </motion.div>
                
                {/* Right Card */}
                <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} transition={{ delay:0.5, duration:0.6 }} viewport={{ once:true }} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-20">
                  <div className="glassmorphism border-gold rounded-xl p-4 border text-center">
                    <h3 className="text-gold-500 font-bold text-lg">CHATBOTS</h3>
                    <p className="text-gray-300 text-sm">Intelligent conversational AI</p>
                  </div>
                </motion.div>
                
                {/* Bottom Card */}
                <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:0.6, duration:0.6 }} viewport={{ once:true }} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full z-20">
                  <div className="glassmorphism border-gold rounded-xl p-4 border text-center">
                    <h3 className="text-gold-500 font-bold text-lg">WEB3 & APPS</h3>
                    <p className="text-gray-300 text-sm">Cutting-edge full-stack solutions</p>
                  </div>
                </motion.div>
                
                {/* Left Card */}
                <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} transition={{ delay:0.7, duration:0.6 }} viewport={{ once:true }} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-20">
                  <div className="glassmorphism border-gold rounded-xl p-4 border text-center">
                    <h3 className="text-gold-500 font-bold text-lg">SMART MARKETING</h3>
                    <p className="text-gray-300 text-sm">Data-driven marketing automation</p>
                  </div>
                </motion.div>
                
                <spline-viewer
                  ref={splineRef}
                  url="https://prod.spline.design/hJK-KuivBGj4d8h4/scene.splinecode"
                  className="rounded-2xl w-full aspect-square lg:aspect-[4/3]"
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
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EnhancedSection direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/15 blur-3xl rounded-3xl" />
                <DotLottieReact src="https://lottie.host/9482092f-1d2b-449e-9467-aa865c817813/i6EF42yDOu.lottie" loop autoplay className="relative rounded-2xl w-full" />
              </div>
            </EnhancedSection>
            <EnhancedSection direction="right" delay={0.3} className="space-y-6">
              <span className="text-gold-500 font-medium tracking-wider text-sm uppercase">THE MIB EDGE</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Pioneering the Future of Workflow</h2>
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
      
      {/* Why Choose MiB */}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
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
      
      {/* Expertise */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Businesses <span className="text-gold-gradient">Trust Us</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our expertise spans across multiple domains, ensuring we deliver comprehensive solutions</p>
          </EnhancedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <EnhancedSection key={i} delay={i*0.12} type="scale" className="h-full">
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
      
      {/* Team */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our <span className="text-gold-gradient">Experts</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A talented team dedicated to your success</p>
          </EnhancedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <EnhancedSection key={i} delay={i*0.15} type="slide" direction="up" className="h-full">
                <div className="glassmorphism rounded-xl overflow-hidden border-gold h-full relative group cursor-pointer">
                  <div className="relative h-80 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-gold-400">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gold-500">{member.role}</p>
                  </div>
                </div>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>
      
      {/* Why Choose MiB again*/}
      <EnhancedSection className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent relative overflow-hidden" type="fade" delay={0.1}>
        <AnimatedBackground type="particles" color="gold" density="low" />
        <GradientBlob className="opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <EnhancedSection className="text-center mb-16" type="scale" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-gold-gradient">MiB Tech</span>?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We combine innovation, reliability, and excellence to deliver unmatched solutions</p>
          </EnhancedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[{ icon: Users, title: 'Experienced Professional Team' }, { icon: Brain, title: 'Customized AI-Based Solutions' }, { icon: Shield, title: 'End-to-End Technology Support' }, { icon: Shield, title: '100% Security' }, { icon: Zap, title: 'Innovative & Future-Ready Approach' }, { icon: Clock, title: 'Dedicated Client Support 24/7' }].map((item, i) => (
              <EnhancedSection key={i} delay={i*0.1} type="scale" className="h-full">
                <TiltCard className="glassmorphism rounded-xl p-8 border-gold h-full group hover:border-gold-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center flex-shrink-0 group-hover:gold-glow transition-all">
                      <item.icon size={24} className="text-gold-500" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-gold-400 transition-colors">✔️ {item.title}</h3>
                  </div>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>
      
      {/* CTA */}
      <EnhancedSection className="py-20 px-6 relative overflow-hidden" type="scale" delay={0.2}>
        <AnimatedBackground type="particles" color="gold" density="medium" />
        <GradientBlob className="opacity-60" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="glassmorphism rounded-3xl p-12 border-gold text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Journey?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Let's work together to transform your business with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </EnhancedSection>
    </div>
  );
};

export default About;

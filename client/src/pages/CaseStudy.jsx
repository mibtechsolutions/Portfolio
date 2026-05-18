import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Brain, Zap, MessageSquare, Target, BarChart3, Shield, Globe, Database, Code, Cloud, Users, Award, Layers, Smartphone, ShoppingBag, ChevronRight, Building, Factory, GraduationCap } from 'lucide-react';
import {
  EnhancedSection,
  TiltCard,
  MagneticButton,
} from '../components/animations';

const caseStudies = {
  'ai-warehouse-automation': {
    title: 'AI WhatsApp Customer Support System',
    category: 'Chatbots',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20customer%20support%20dashboard%2C%20chatbot%20interface%2C%20modern%20design%2C%20dark%20theme&image_size=landscape_16_9',
    client: 'Warehouse Retail Group',
    duration: '3 Months',
    metrics: {
      first: { value: '45%', label: 'Support Cost Cut' },
      second: { value: '24/7', label: 'Always Available' },
      third: { value: '300%', label: 'Support Efficiency' }
    },
    overview: [
      { icon: Database, title: 'Client Overview', desc: 'Leading retail chain with 50+ locations nationwide' },
      { icon: MessageSquare, title: 'Project Goal', desc: 'Reduce support load and improve response times' },
      { icon: Target, title: 'Target Impact', desc: 'Achieve 80% automated resolution rate' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Scaling support teams was becoming too expensive',
        'Customers frustrated with long wait times',
        'Inconsistent responses across different agents',
        'Limited support coverage outside business hours'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        'AI-powered intent recognition with 95% accuracy',
        'Multi-language support for global customer base',
        'Seamless handoff to human agents when needed',
        'Continuous learning from every interaction'
      ]
    },
    capabilities: [
      {
        icon: Brain,
        title: 'Smart Intent Matching',
        desc: 'Our AI understands what your customers need before they finish typing'
      },
      {
        icon: Zap,
        title: 'Instant Response',
        desc: 'No more waiting - answers delivered in milliseconds, 24/7'
      },
      {
        icon: Users,
        title: 'Human-in-the-Loop',
        desc: 'Smart escalation to your team when complex issues arise'
      }
    ],
    analytics: [
      {
        title: 'Real-Time Conversations',
        desc: 'Monitor every interaction, measure sentiment, and optimize performance on the fly',
        hasChart: true
      },
      {
        title: 'Multi-Language Support',
        desc: 'Speak your customers\' language with native-level fluency across 20+ languages',
        hasChart: false
      }
    ],
    techStack: ['React', 'Python', 'TensorFlow', 'NLP', 'API Integration', 'Node.js'],
    impact: [
      { value: '92%', label: 'Automated Resolution' },
      { value: '+3s', label: 'Avg Response Time' },
      { value: '12x', label: 'Ticket Volume Handled' }
    ],
    testimonial: {
      quote: '"MiB Tech Solutions didn\'t just give us a chatbot - they architected a new way to serve our customers. Their neural engine is nothing short of industrial-grade magic."',
      author: 'Sarah Chen',
      role: 'COO, Warehouse Retail'
    }
  },
  'real-estate-dashboard': {
    title: 'Real Estate CRM Automation',
    category: 'CRM',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=real%20estate%20CRM%20dashboard%2C%20property%20management%2C%20dark%20theme&image_size=landscape_16_9',
    client: 'Prime Properties Inc.',
    duration: '5 Months',
    metrics: {
      first: { value: '40%', label: 'Faster Closings' },
      second: { value: '300+', label: 'Agents' },
      third: { value: '1000+', label: 'Properties' }
    },
    overview: [
      { icon: Building, title: 'Client Overview', desc: 'Large real estate agency with multiple locations' },
      { icon: Target, title: 'Project Goal', desc: 'Unify systems and automate workflows' },
      { icon: TrendingUp, title: 'Target Impact', desc: 'Increase agent productivity by 50%' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Fragmented systems across multiple platforms',
        'No unified view of clients and properties',
        'Manual paperwork slowing down transactions',
        'Agents spending too much time on admin'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        '360-degree view of all client interactions',
        'Automated document generation and management',
        'AI-powered lead scoring and prioritization',
        'Real-time analytics and performance dashboards'
      ]
    },
    capabilities: [
      {
        icon: Database,
        title: 'Property Management',
        desc: 'Track every property, showing, and transaction in one place'
      },
      {
        icon: Users,
        title: 'Agent Performance',
        desc: 'Monitor KPIs, provide coaching, and recognize top performers'
      },
      {
        icon: Target,
        title: 'Lead Intelligence',
        desc: 'AI scores leads based on conversion probability'
      }
    ],
    analytics: [
      {
        title: 'Portfolio Growth',
        desc: 'Track your property portfolio, market trends, and performance metrics',
        hasChart: true
      },
      {
        title: 'Agent Productivity',
        desc: 'Individual dashboards for every agent with goals and achievements',
        hasChart: false
      }
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Maps API', 'AI/ML', 'AWS'],
    impact: [
      { value: '60%', label: 'Agent Productivity' },
      { value: '3x', label: 'More Agents' },
      { value: '40%', label: 'Faster Transactions' }
    ],
    testimonial: {
      quote: 'This CRM transformed how we operate. Our agents are closing more deals and spending less time on paperwork. Absolutely game-changing.',
      author: 'Michael Rodriguez',
      role: 'CEO, Prime Properties'
    }
  },
  'whatsapp-banking-solution': {
    title: 'WhatsApp Banking Solution',
    category: 'WhatsApp',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=WhatsApp%20banking%20interface%2C%20mobile%20app%2C%20modern%20design&image_size=landscape_16_9',
    client: 'Global Finance Bank',
    duration: '2.5 Months',
    metrics: {
      first: { value: '2M+', label: 'Active Users' },
      second: { value: '95%', label: 'Satisfaction' },
      third: { value: '80%', label: 'Cost Reduction' }
    },
    overview: [
      { icon: Shield, title: 'Client Overview', desc: 'Leading financial institution serving millions' },
      { icon: MessageSquare, title: 'Project Goal', desc: 'Bring banking to customers\' favorite app' },
      { icon: Target, title: 'Target Impact', desc: 'Reduce branch visits by 40%' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Customers wanted banking on their preferred platform',
        'Security was non-negotiable for financial data',
        'Needed seamless integration with core banking systems',
        'Must support multiple transaction types securely'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        'End-to-end encryption for all transactions',
        'Multi-factor authentication for security',
        'Integration with core banking systems in real-time',
        'Support for balance, transfers, payments, and more'
      ]
    },
    capabilities: [
      {
        icon: Shield,
        title: 'Bank-Grade Security',
        desc: 'Every transaction encrypted, authenticated, and audited'
      },
      {
        icon: Zap,
        title: 'Instant Transactions',
        desc: 'Check balance, transfer funds, pay bills - all in seconds'
      },
      {
        icon: Globe,
        title: 'Always Accessible',
        desc: 'No app download needed - just WhatsApp'
      }
    ],
    analytics: [
      {
        title: 'Transaction Analytics',
        desc: 'Monitor transaction volumes, patterns, and user behavior',
        hasChart: true
      },
      {
        title: 'Security Monitoring',
        desc: 'Real-time fraud detection and security alerts',
        hasChart: false
      }
    ],
    techStack: ['WhatsApp API', 'Node.js', 'Security', 'Core Banking', 'API', 'AWS'],
    impact: [
      { value: '2M+', label: 'Users in 6 Months' },
      { value: '95%', label: 'Customer Satisfaction' },
      { value: '40%', label: 'Fewer Branch Visits' }
    ],
    testimonial: {
      quote: 'Our customers love being able to bank right from WhatsApp. The uptake was incredible and security has been flawless.',
      author: 'David Kim',
      role: 'CTO, Global Finance Bank'
    }
  },
  'retail-crm-automation': {
    title: 'Retail CRM Automation',
    category: 'CRM',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=retail%20CRM%20dashboard%2C%20customer%20analytics%2C%20modern%20dark%20theme&image_size=landscape_16_9',
    client: 'Fashion Retail Co',
    duration: '4 Months',
    metrics: {
      first: { value: '500%', label: 'Revenue Growth' },
      second: { value: '2M+', label: 'Customers' },
      third: { value: '90%', label: 'Retention' }
    },
    overview: [
      { icon: ShoppingBag, title: 'Client Overview', desc: 'Multi-brand fashion retailer with online & offline' },
      { icon: Target, title: 'Project Goal', desc: 'Unify customer data and personalize marketing' },
      { icon: TrendingUp, title: 'Target Impact', desc: 'Increase customer lifetime value by 100%' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Customer data siloed across multiple channels',
        'No single view of customer journey',
        'Generic marketing campaigns with low engagement',
        'High customer churn rate'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        'Unified customer profile from all touchpoints',
        'AI-powered product recommendations',
        'Personalized marketing automation',
        'Predictive churn prevention'
      ]
    },
    capabilities: [
      {
        icon: Brain,
        title: 'AI Recommendations',
        desc: 'Personalized product suggestions based on behavior'
      },
      {
        icon: Target,
        title: '360° Customer View',
        desc: 'Every interaction, purchase, and preference in one place'
      },
      {
        icon: Zap,
        title: 'Marketing Automation',
        desc: 'Personalized campaigns that convert'
      }
    ],
    analytics: [
      {
        title: 'Customer Insights',
        desc: 'Deep analytics into behavior, preferences, and lifetime value',
        hasChart: true
      },
      {
        title: 'Campaign Performance',
        desc: 'Track every campaign, measure ROI, optimize in real-time',
        hasChart: false
      }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'AWS', 'Segment'],
    impact: [
      { value: '90%', label: 'Customer Retention' },
      { value: '45%', label: 'Higher AOV' },
      { value: '300%', label: 'Campaign ROI' }
    ],
    testimonial: {
      quote: 'This CRM changed everything. We now know our customers better than ever and can deliver truly personalized experiences.',
      author: 'Emma Watson',
      role: 'CMO, Fashion Retail Co'
    }
  },
  'manufacturing-ai-automation': {
    title: 'Manufacturing AI Automation',
    category: 'AI Automation',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20factory%20AI%20automation%2C%20industrial%20IoT%2C%20dark%20theme&image_size=landscape_16_9',
    client: 'Global Manufacturing Co.',
    duration: '6 Months',
    metrics: {
      first: { value: '40%', label: 'Efficiency Gain' },
      second: { value: '99%', label: 'Uptime' },
      third: { value: '30%', label: 'Less Waste' }
    },
    overview: [
      { icon: Factory, title: 'Client Overview', desc: 'Large manufacturing plant with multiple production lines' },
      { icon: Target, title: 'Project Goal', desc: 'Reduce downtime and optimize production' },
      { icon: TrendingUp, title: 'Target Impact', desc: 'Increase overall equipment effectiveness by 25%' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Unplanned downtime costing millions',
        'No predictive maintenance capabilities',
        'Manual quality control missing defects',
        'Energy costs were skyrocketing'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        'IoT sensors across all equipment',
        'AI-powered predictive maintenance',
        'Real-time quality control with computer vision',
        'Energy optimization algorithms'
      ]
    },
    capabilities: [
      {
        icon: Brain,
        title: 'Predictive Maintenance',
        desc: 'Know when equipment will fail before it does'
      },
      {
        icon: Zap,
        title: 'Real-Time Monitoring',
        desc: 'Every sensor, every machine, in real-time'
      },
      {
        icon: Target,
        title: 'Quality Assurance',
        desc: 'Computer vision detects defects humans miss'
      }
    ],
    analytics: [
      {
        title: 'Production Analytics',
        desc: 'Monitor OEE, cycle times, and production efficiency',
        hasChart: true
      },
      {
        title: 'Energy Optimization',
        desc: 'AI optimizes energy usage across the plant',
        hasChart: false
      }
    ],
    techStack: ['AI/ML', 'IoT', 'Python', 'AWS IoT', 'Computer Vision', 'Time Series'],
    impact: [
      { value: '80%', label: 'Less Unplanned Downtime' },
      { value: '40%', label: 'Efficiency Up' },
      { value: '35%', label: 'Maintenance Cost Cut' }
    ],
    testimonial: {
      quote: 'We went from reactive to proactive. The predictive maintenance alone saved us millions in the first year.',
      author: 'Robert Johnson',
      role: 'Plant Director'
    }
  },
  'ecommerce-growth-campaign': {
    title: 'E-commerce Growth Campaign',
    category: 'Digital Marketing',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=digital%20marketing%20dashboard%2C%20growth%20analytics%2C%20social%20media%20campaigns%2C%20dark%20theme%2C%20gold%20accents&image_size=landscape_16_9',
    client: 'StyleHub E-commerce',
    duration: '6 Months',
    metrics: {
      first: { value: '500%', label: 'Revenue Growth' },
      second: { value: '2M+', label: 'Impressions' },
      third: { value: '15%', label: 'Conversion Rate' }
    },
    overview: [
      { icon: ShoppingBag, title: 'Client Overview', desc: 'Fashion e-commerce brand looking to scale' },
      { icon: Target, title: 'Project Goal', desc: 'Increase traffic and conversions dramatically' },
      { icon: TrendingUp, title: 'Target Impact', desc: '5x revenue growth in 6 months' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Low organic visibility in search engines',
        'Social media presence wasn\'t converting',
        'No cohesive digital marketing strategy',
        'High customer acquisition cost'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        'Complete SEO audit and optimization',
        'Data-driven social media strategy',
        'Targeted PPC campaigns across platforms',
        'Email marketing automation and personalization'
      ]
    },
    capabilities: [
      {
        icon: TrendingUp,
        title: 'SEO Dominance',
        desc: 'Rank for your most valuable keywords'
      },
      {
        icon: Target,
        title: 'Performance Marketing',
        desc: 'Every ad dollar tracked and optimized'
      },
      {
        icon: Zap,
        title: 'Social Growth',
        desc: 'Build engaged communities that convert'
      }
    ],
    analytics: [
      {
        title: 'Traffic & Conversion',
        desc: 'Monitor every channel, attribution, and conversion path',
        hasChart: true
      },
      {
        title: 'ROI Dashboard',
        desc: 'See exactly which campaigns drive the best returns',
        hasChart: false
      }
    ],
    techStack: ['SEO', 'Social Media', 'PPC', 'Analytics', 'Email Marketing', 'Content'],
    impact: [
      { value: '400%', label: 'Organic Traffic' },
      { value: '5x', label: 'Conversion Rate' },
      { value: '50%', label: 'Lower CAC' }
    ],
    testimonial: {
      quote: 'Our growth exploded. We went from a small online store to a major player in just 6 months. Their strategy was flawless.',
      author: 'Jessica Williams',
      role: 'Founder, StyleHub'
    }
  },
  'brand-awareness-campaign': {
    title: 'Brand Awareness Campaign',
    category: 'Digital Marketing',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=brand%20marketing%20campaign%2C%20content%20strategy%2C%20analytics%20dashboard%2C%20modern%20design&image_size=landscape_16_9',
    client: 'InnovateTech Startup',
    duration: '4 Months',
    metrics: {
      first: { value: '10x', label: 'Reach' },
      second: { value: '50K+', label: 'Followers' },
      third: { value: 'Global', label: 'Presence' }
    },
    overview: [
      { icon: Target, title: 'Client Overview', desc: 'New tech startup needing to establish brand' },
      { icon: TrendingUp, title: 'Project Goal', desc: 'Build awareness and establish thought leadership' },
      { icon: Users, title: 'Target Impact', desc: '50,000+ engaged followers in 4 months' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Zero brand awareness in a crowded market',
        'No established social media presence',
        'Needed to establish credibility quickly',
        'Limited initial marketing budget'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        'Brand identity and positioning',
        'Content strategy and thought leadership',
        'Influencer partnerships and PR',
        'Community building and engagement'
      ]
    },
    capabilities: [
      {
        icon: Award,
        title: 'Brand Positioning',
        desc: 'Stand out from the crowd with a unique voice'
      },
      {
        icon: Target,
        title: 'Content Excellence',
        desc: 'Content that educates, entertains, and converts'
      },
      {
        icon: Users,
        title: 'Community Building',
        desc: 'Build engaged communities that become advocates'
      }
    ],
    analytics: [
      {
        title: 'Brand Mentions',
        desc: 'Track every mention, share, and conversation about your brand',
        hasChart: true
      },
      {
        title: 'Engagement Analytics',
        desc: 'See who\'s engaging, what resonates, and optimize',
        hasChart: false
      }
    ],
    techStack: ['Branding', 'Content', 'Influencer', 'PR', 'Social', 'Community'],
    impact: [
      { value: '50K+', label: 'Followers' },
      { value: '2M+', label: 'People Reached' },
      { value: 'Top', label: 'Industry Publications' }
    ],
    testimonial: {
      quote: 'We went from unknown to featured in every major tech publication. Their brand strategy was pure genius.',
      author: 'Alex Thompson',
      role: 'Founder, InnovateTech'
    }
  },
  'educational-learning-platform': {
    title: 'Educational Learning Platform',
    category: 'Websites',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=educational%20learning%20platform%2C%20online%20courses%20dashboard%2C%20edtech&image_size=landscape_16_9',
    client: 'EduTech Global',
    duration: '4 Months',
    metrics: {
      first: { value: '100K+', label: 'Students' },
      second: { value: '500+', label: 'Courses' },
      third: { value: '95%', label: 'Completion' }
    },
    overview: [
      { icon: GraduationCap, title: 'Client Overview', desc: 'Educational institution moving online' },
      { icon: Target, title: 'Project Goal', desc: 'Create world-class online learning experience' },
      { icon: TrendingUp, title: 'Target Impact', desc: '90% course completion rate' }
    ],
    challenge: {
      title: 'The Challenge',
      items: [
        'Existing platform had poor engagement',
        'Low course completion rates',
        'No personalized learning paths',
        'Limited interactive content'
      ]
    },
    solution: {
      title: 'The Neural Solution',
      items: [
        'AI-powered personalized tutoring',
        'Interactive course content and assessments',
        'Gamification and achievement system',
        'Live classes and recordings'
      ]
    },
    capabilities: [
      {
        icon: Brain,
        title: 'AI Tutoring',
        desc: 'Personalized learning paths adapted to each student'
      },
      {
        icon: Award,
        title: 'Gamification',
        desc: 'Achievements, badges, and leaderboards that motivate'
      },
      {
        icon: Users,
        title: 'Community Learning',
        desc: 'Discussion forums, study groups, and peer learning'
      }
    ],
    analytics: [
      {
        title: 'Learning Analytics',
        desc: 'Track progress, engagement, and learning outcomes',
        hasChart: true
      },
      {
        title: 'Course Performance',
        desc: 'See which courses perform best and optimize content',
        hasChart: false
      }
    ],
    techStack: ['React', 'Node.js', 'Video Streaming', 'AI', 'WebRTC', 'AWS'],
    impact: [
      { value: '95%', label: 'Completion Rate' },
      { value: '100K+', label: 'Students' },
      { value: '50+', label: 'Partner Institutions' }
    ],
    testimonial: {
      quote: 'Our students love the platform. Completion rates went through the roof and we\'re now partnering with universities worldwide.',
      author: 'Professor Emily Davis',
      role: 'Dean, EduTech Global'
    }
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies[id];

  if (!study) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/portfolio" className="text-gold-500 hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <EnhancedSection className="pt-24 pb-8 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </EnhancedSection>

      {/* Hero Section */}
      <EnhancedSection className="pb-12 px-6" type="scale" delay={0.15}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <EnhancedSection direction="left" delay={0.2} className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {study.title}
              </h1>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <div className="text-3xl font-bold text-gold-gradient">{study.metrics.first.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">{study.metrics.first.label}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-gradient">{study.metrics.second.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">{study.metrics.second.label}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-gradient">{study.metrics.third.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">{study.metrics.third.label}</div>
                </div>
              </div>
            </EnhancedSection>

            <EnhancedSection direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/15 blur-3xl rounded-3xl"></div>
                <img
                  src={study.image}
                  alt={study.title}
                  className="relative rounded-2xl w-full"
                />
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* Project Overview + Challenge */}
      <EnhancedSection className="py-16 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left: Project Overview */}
            <EnhancedSection direction="left" delay={0.2} className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold-gradient">
                Project Overview
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {study.client}, a multinational conglomerate with over 5,000 retail outlets, faced a critical bottleneck in customer service. Their legacy system relied on fragmented manual chat support across multiple time zones, leading to high latency and inconsistent service quality.
              </p>
              
              <div className="glassmorphism rounded-2xl p-6 border-gold/30">
                <div className="mb-4">
                  <p className="text-gold-500 text-xs uppercase tracking-widest mb-1">CLIENT</p>
                  <p className="text-2xl font-bold">{study.client}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">SECTOR</p>
                  <p className="text-gray-300">International Enterprise Retail</p>
                </div>
              </div>
            </EnhancedSection>

            {/* Right: The Challenge */}
            <EnhancedSection direction="right" delay={0.3} className="lg:col-span-2">
              <div className="glassmorphism rounded-3xl p-8 md:p-10 border-gold/30 relative overflow-hidden">
                <div className="absolute top-6 right-6 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-500">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  The Challenge
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-400">
                        <path d="M3 17h18"></path>
                        <path d="M7 17V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10"></path>
                        <polyline points="17 12 21 8 21 17"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Scaling Inefficiency</h3>
                    <p className="text-gray-400">
                      Manual support costs were scaling linearly with customer volume, creating a non-sustainable ROI model for high-traffic periods.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-400">
                        <polyline points="15 10 20 15 15 20"></polyline>
                        <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Response Latency</h3>
                    <p className="text-gray-400">
                      Average wait times on WhatsApp exceeded 4 hours during peak promotions, resulting in a 22% cart abandonment rate.
                    </p>
                  </div>
                </div>
              </div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>

      {/* The Solution */}
      <EnhancedSection className="py-16 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="text-center mb-10" type="scale" delay={0.2}>
            <p className="text-gold-500 text-xs uppercase tracking-widest mb-2">{study.solution.title.toUpperCase()}</p>
            <h2 className="text-3xl font-bold">
              How We <span className="text-gold-gradient">Engineered Success</span>
            </h2>
          </EnhancedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {study.solution.items.map((item, index) => (
              <EnhancedSection key={index} delay={index * 0.08} type="scale" className="h-full">
                <TiltCard className="glassmorphism rounded-xl p-5 border-gold h-full">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient/20 flex items-center justify-center mb-3">
                    <CheckCircle size={20} className="text-gold-500" />
                  </div>
                  <p className="text-gray-300 text-sm">{item}</p>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Core Capabilities */}
      <EnhancedSection className="py-16 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="mb-10" type="fade" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient">
              Core Capabilities
            </h2>
          </EnhancedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[1fr]">
            {/* Neural Intent Recognition - Large */}
            <EnhancedSection className="lg:col-span-2 lg:row-span-2" type="fade" delay={0.1}>
              <motion.div 
                className="glassmorphism rounded-3xl p-8 border-gold/20 h-full flex flex-col relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(212, 175, 55, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="mb-6 flex-1 relative z-10">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Brain size={20} className="text-gold-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Neural Intent Recognition</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Beyond simple keywords. Our system understands nuance, sarcasm, and multi-part queries, ensuring the customer feels heard and understood.
                  </p>
                </div>
                
                <div className="relative h-40 relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent rounded-xl flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <svg className="w-full h-full" viewBox="0 0 200 100">
                        {/* Animated Neural Network */}
                        <g>
                          <motion.path 
                            d="M20 80 L40 60 L60 70 L80 40 L100 50 L120 30 L140 45 L160 25 L180 35" 
                            fill="none" 
                            stroke="#d4af37" 
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                          />
                          {[ 
                            { x: 40, y: 60 },
                            { x: 60, y: 70 },
                            { x: 80, y: 40 },
                            { x: 100, y: 50 },
                            { x: 120, y: 30 },
                            { x: 140, y: 45 },
                            { x: 160, y: 25 },
                            { x: 180, y: 35 }
                          ].map((point, i) => (
                            <motion.circle 
                              key={i}
                              cx={point.x} 
                              cy={point.y} 
                              r="4" 
                              fill="#d4af37"
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: 0.5 + i * 0.15,
                                type: "spring",
                                stiffness: 200
                              }}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                          {[
                            { x1: 40, y1: 60, x2: 60, y2: 70 },
                            { x1: 60, y1: 70, x2: 80, y2: 40 },
                            { x1: 80, y1: 40, x2: 100, y2: 50 },
                            { x1: 100, y1: 50, x2: 120, y2: 30 },
                            { x1: 120, y1: 30, x2: 140, y2: 45 },
                            { x1: 140, y1: 45, x2: 160, y2: 25 },
                            { x1: 160, y1: 25, x2: 180, y2: 35 }
                          ].map((line, i) => (
                            <motion.line 
                              key={i}
                              x1={line.x1}
                              y1={line.y1}
                              x2={line.x2}
                              y2={line.y2}
                              stroke="#d4af37"
                              strokeWidth="0.8"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 0.6 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1 + i * 0.1 }}
                            />
                          ))}
                        </g>
                        
                        {/* Glow effect */}
                        <defs>
                          <radialGradient id="neuralGlow" cx="50%" cy="50%">
                            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="100" cy="50" r="60" fill="url(#neuralGlow)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </EnhancedSection>

            {/* Multilingual Support - Small */}
            <EnhancedSection type="fade" delay={0.2}>
              <motion.div 
                className="glassmorphism rounded-3xl p-6 border-gold/20 h-full relative overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-400">
                      <path d="m5 8 6 6"/>
                      <path d="m4 14 6-6 2-3"/>
                      <path d="M2 5h12"/>
                      <path d="M7 2h1"/>
                      <path d="m22 22-5-10-5 10"/>
                      <path d="M14 18h6"/>
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Multilingual Support</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Supporting 45+ languages with native-level fluency, enabling Global Retail Group to serve customers from Dubai to Tokyo.
                  </p>
                </div>
              </motion.div>
            </EnhancedSection>

            {/* POS Integration - Small */}
            <EnhancedSection type="fade" delay={0.3}>
              <motion.div 
                className="glassmorphism rounded-3xl p-6 border-gold/20 h-full relative overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-400">
                      <rect width="18" height="18" x="3" y="3" rx="2"/>
                      <path d="M3 9h18"/>
                      <path d="M9 21V9"/>
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">POS Integration</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Live inventory sync allows customers to check stock at their nearest physical store directly through the WhatsApp interface.
                  </p>
                </div>
              </motion.div>
            </EnhancedSection>

            {/* Real-time Analytics - Large */}
            <EnhancedSection className="lg:col-span-2" type="fade" delay={0.4}>
              <motion.div 
                className="glassmorphism rounded-3xl p-6 border-gold/20 h-full flex flex-col relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(212, 175, 55, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="mb-4 relative z-10">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <BarChart3 size={20} className="text-gold-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Comprehensive dashboard providing C-suite insights into customer sentiment, common pain points, and automated conversion rates.
                  </p>
                </div>
                
                <div className="mt-auto pt-4 relative z-10">
                  <div className="flex items-end gap-2 h-24 px-4">
                    {[33, 66, 100, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-gold-500/70 to-gold-500/30 rounded-t relative"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.5 + i * 0.15,
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        animate={{
                          height: [
                            `${height}%`,
                            `${height - 10 + Math.random() * 20}%`,
                            `${height}%`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      >
                        {/* Glow on top */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-white/50 to-transparent rounded-t"></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Glow under bars */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-gold-500/30 to-transparent blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            </EnhancedSection>
          </div>
        </div>
      </EnhancedSection>



      {/* The Engine Room */}
      <EnhancedSection className="py-16 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="text-center mb-10" type="scale" delay={0.2}>
            <p className="text-gold-500 text-xs uppercase tracking-widest mb-2">THE ENGINE ROOM</p>
          </EnhancedSection>

          <div className="flex flex-wrap justify-center gap-3">
            {study.techStack.map((tech, index) => (
              <EnhancedSection key={index} delay={index * 0.06} type="scale">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="glassmorphism rounded-lg px-5 py-2 border-gold"
                >
                  <span className="text-sm font-medium text-gray-200">{tech}</span>
                </motion.div>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Measurable Impact */}
      <EnhancedSection className="py-16 px-6" type="fade" delay={0.1}>
        <div className="max-w-7xl mx-auto">
          <EnhancedSection className="text-center mb-10" type="scale" delay={0.2}>
            <p className="text-gold-500 text-xs uppercase tracking-widest mb-2">MEASURABLE IMPACT</p>
          </EnhancedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {study.impact.map((item, index) => (
              <EnhancedSection key={index} delay={index * 0.12} type="scale" className="h-full">
                <TiltCard className="glassmorphism rounded-xl p-8 border-gold text-center h-full">
                  <div className="text-5xl md:text-6xl font-black text-gold-gradient mb-2">{item.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{item.label}</div>
                </TiltCard>
              </EnhancedSection>
            ))}
          </div>
        </div>
      </EnhancedSection>

      {/* Testimonial */}
      <EnhancedSection className="py-16 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" type="fade" delay={0.1}>
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism rounded-2xl p-10 border-gold text-center">
            <div className="text-8xl opacity-10 font-black absolute top-4 left-1/2 -translate-x-1/2 -z-10">"</div>
            <p className="text-lg md:text-xl text-gray-300 italic mb-6 relative z-10">
              {study.testimonial.quote}
            </p>
            <div className="text-gold-500 font-bold">{study.testimonial.author}</div>
            <div className="text-gray-400 text-sm">{study.testimonial.role}</div>
          </div>
        </div>
      </EnhancedSection>

      {/* CTA Section */}
      <EnhancedSection className="py-16 px-6" type="scale" delay={0.2}>
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-3xl p-12 border-gold text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/10 blur-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build your own AI solution?
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <MagneticButton className="px-10 py-4 bg-gold-gradient text-black font-bold rounded-lg gold-glow">
                    Talk to Us
                  </MagneticButton>
                </Link>
                <Link to="/portfolio">
                  <MagneticButton className="px-10 py-4 border border-gold-500 text-gold-500 font-medium rounded-lg">
                    See More Work
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </EnhancedSection>
    </div>
  );
};

export default CaseStudy;

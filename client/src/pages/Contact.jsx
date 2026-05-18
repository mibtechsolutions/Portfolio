import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar, ChevronDown, ChevronUp, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import {
  EnhancedSection,
  TiltCard,
  MagneticButton,
} from '../components/animations';

const Contact = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    { question: 'How quickly can you respond to inquiries?', answer: 'We typically respond within 1 business day. For urgent matters, use our WhatsApp channel for instant support.' },
    { question: 'Do you offer free consultations?', answer: 'Yes! We provide a free 30-minute consultation to discuss your project requirements and explore how we can help.' },
    { question: 'What are your payment terms?', answer: 'We offer flexible payment plans including milestone-based payments, monthly retainers, and customized arrangements.' },
    { question: 'Do you work with clients worldwide?', answer: 'Absolutely! We work with clients globally across all time zones and offer 24/7 support for critical issues.' },
    { question: 'Can you sign an NDA?', answer: 'Yes, we are happy to sign a Non-Disclosure Agreement to protect your confidential information.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let's <span className="text-gold-gradient">Connect</span> & Build
                <br />Smart Solutions
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Ready to transform your business? Get in touch with our team and let's discuss your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 glassmorphism rounded-lg p-4 border-gold">
                  <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                    <MessageSquare className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">WhatsApp</div>
                    <div className="font-semibold">+91 9600631764</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 glassmorphism rounded-lg p-4 border-gold">
                  <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                    <Mail className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-semibold">mibtechsolutions@gmail.com</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full"></div>
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20contact%20center%2C%20digital%20communication%2C%20AI%20interface%2C%20dark%20luxury%20theme&image_size=landscape_16_9"
                alt="Contact"
                className="relative rounded-2xl glassmorphism border-gold p-2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glassmorphism rounded-xl p-6 border-gold"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                    <MapPin className="text-gold-500" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Office</h3>
                </div>
                <p className="text-gray-400">MIB Tech solutions, Nivedh Vikas Apartment<br />27/9, Pankaja Mills Rd, Puliakulam<br />Coimbatore, Tamil Nadu 641045</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glassmorphism rounded-xl p-6 border-gold"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                    <Clock className="text-gold-500" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Hours</h3>
                </div>
                <p className="text-gray-400">Monday - Friday: 9:30 AM - 6:30 PM<br />Saturday: Every 2nd Saturday<br />Support: 24/7 Available</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glassmorphism rounded-xl p-6 border-gold"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 flex items-center justify-center">
                    <Calendar className="text-gold-500" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Book a Meeting</h3>
                </div>
                <p className="text-gray-400 mb-4">Schedule a free consultation with our experts</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg"
                >
                  Schedule Now
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glassmorphism rounded-xl p-8 border-gold">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="text-gold-500 mx-auto mb-4" size={64} />
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-gray-400">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism rounded-xl border-gold overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-gold-500" />
                  ) : (
                    <ChevronDown className="text-gold-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
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
              Ready to Automate & Grow Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's start your digital transformation journey today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gold-gradient text-black font-bold rounded-lg gold-glow"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10"
              >
                Schedule Free Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

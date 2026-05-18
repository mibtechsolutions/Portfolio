import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageSquare, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gold-500/20 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gold-gradient mb-4">MiB Tech Solutions</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses with futuristic AI automation and enterprise solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://wa.me/919600631764"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500/20 transition-colors"
              >
                <MessageSquare size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/mibtechsolutions"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500/20 transition-colors"
              >
                <Globe size={18} />
              </motion.a>
              <motion.a
                href="mailto:mibtechsolutions@gmail.com"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500/20 transition-colors"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-gold-500 transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {['AI Automation', 'WhatsApp Automation', 'AI Chatbots', 'CRM Systems', 'Custom Software'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <span className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">MIB Tech solutions, Nivedh Vikas Apartment, 27/9, Pankaja Mills Rd, Puliakulam, Coimbatore, Tamil Nadu 641045</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 flex-shrink-0" size={18} />
                <a href="mailto:mibtechsolutions@gmail.com" className="text-gray-400 hover:text-gold-500 transition-colors">
                  mibtechsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 flex-shrink-0" size={18} />
                <a href="tel:+919600631764" className="text-gray-400 hover:text-gold-500 transition-colors">
                  +91 9600631764
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gold-500/20 text-center"
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} MiB Tech Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

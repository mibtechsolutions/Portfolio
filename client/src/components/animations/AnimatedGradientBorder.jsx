import { motion } from 'framer-motion';

const AnimatedGradientBorder = ({ children, className = '', glow = false }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(212,175,55,0.8), rgba(255,215,0,0.4), rgba(184,134,11,0.8))',
            'linear-gradient(135deg, rgba(184,134,11,0.8), rgba(212,175,55,0.4), rgba(255,215,0,0.8))',
            'linear-gradient(225deg, rgba(255,215,0,0.8), rgba(184,134,11,0.4), rgba(212,175,55,0.8))',
            'linear-gradient(45deg, rgba(212,175,55,0.8), rgba(255,215,0,0.4), rgba(184,134,11,0.8))',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          padding: '2px',
        }}
      />

      <div className="relative bg-black z-10 w-full h-full">
        {children}
      </div>

      {glow && (
        <motion.div
          className="absolute -inset-1 opacity-50 blur-xl"
          animate={{
            background: [
              'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
};

export default AnimatedGradientBorder;

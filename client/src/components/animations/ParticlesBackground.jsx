import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastMove = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMove > 100) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        lastMove = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Animated Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Single Smooth Mouse Glow */}
      <motion.div
        className="absolute rounded-full"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 25 }}
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
        }}
      />

      {/* Lightweight Floating Particles (15 only) */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            background: `rgba(212, 175, 55, ${0.4 + Math.random() * 0.4})`,
            boxShadow: '0 0 8px rgba(212, 175, 55, 0.5)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, `-${30 + Math.random() * 40}px`, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Light Falling Particles (12 only) */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`fall-${i}`}
          className="absolute"
          style={{ left: `${Math.random() * 100}%` }}
          initial={{ top: '-20px', opacity: 0 }}
          animate={{
            top: '120vh',
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 20,
          }}
        >
          <div
            style={{
              width: '3px',
              height: '3px',
              background: '#D4AF37',
              borderRadius: '50%',
              boxShadow: '0 0 6px rgba(212, 175, 55, 0.6)',
            }}
          />
        </motion.div>
      ))}

      {/* 2 Simple Ambient Orbs */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
          left: '25%',
          top: '25%',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)',
          right: '20%',
          top: '55%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Minimal Light Streaks (3 only) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute h-px"
          style={{
            width: '200px',
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
            top: `${20 + i * 25}%`,
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: ['-100%', '150%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 7,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;

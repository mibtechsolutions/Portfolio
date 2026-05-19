import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: position.x,
          y: position.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2 : isClicking ? 0.8 : 1,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="relative">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gold-500/30 rounded-full blur-xl"></div>
          
          {/* Outer Ring */}
          <div className="relative w-8 h-8 rounded-full border-2 border-gold-500"></div>
          
          {/* Shine Effect */}
          <motion.div
            className="absolute top-1 left-1 w-3 h-3 bg-white/80 rounded-full blur-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Trail / Follower Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: position.x,
          y: position.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 3 : 1.5,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
        }}
      >
        <div className="relative w-16 h-16">
          {/* Gold Gradient Blob */}
          <motion.div
            className="absolute inset-0 bg-gold-gradient/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Shine Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-t from-transparent via-gold-500/80 to-transparent origin-bottom"
              style={{
                transform: `rotate(${angle}deg) translateX(-50%)`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                height: ['8px', '16px', '8px'],
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: position.x,
            y: position.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 border-2 border-gold-500 rounded-full"></div>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;

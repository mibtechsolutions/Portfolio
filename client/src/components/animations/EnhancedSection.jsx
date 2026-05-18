import { motion } from 'framer-motion';

const EnhancedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  type = 'fade',
  staggerChildren = 0,
}) => {
  const getVariants = () => {
    switch (type) {
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'slide':
        switch (direction) {
          case 'left':
            return {
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            };
          case 'right':
            return {
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            };
          case 'down':
            return {
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            };
          default:
            return {
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            };
        }
      default:
        switch (direction) {
          case 'left':
            return {
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            };
          case 'right':
            return {
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            };
          case 'down':
            return {
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            };
          default:
            return {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            };
        }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerChildren > 0 ? containerVariants : getVariants()}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {staggerChildren > 0 ? (
        <motion.div variants={getVariants()}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default EnhancedSection;

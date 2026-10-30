import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface MotionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  viewportOnce?: boolean;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 24,
  className = '',
  viewportOnce = true,
  ...rest
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] // Smooth settling curve
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

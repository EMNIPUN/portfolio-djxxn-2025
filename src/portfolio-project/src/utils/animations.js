import { motion } from 'framer-motion';

export const fadeIn = (direction = 'up', duration = 0.5) => {
  return {
    initial: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: 'easeInOut',
      },
    },
  };
};

export const slideIn = (direction = 'left', duration = 0.5) => {
  return {
    initial: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: 'easeInOut',
      },
    },
  };
};

export const zoomIn = (duration = 0.5) => {
  return {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeInOut',
      },
    },
  };
};
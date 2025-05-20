import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
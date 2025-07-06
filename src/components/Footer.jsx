import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <footer className="w-full h-[5vh] bg-neutral-800 text-white flex justify-center items-center font-josefin">
        &copy; 2025 Designed By MohanPrasth ❤️
      </footer>
    </motion.div>
  )
}

export default Footer

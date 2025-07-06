import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className='w-full text-white flex justify-between items-center p-4 md:px-20 h-[10vh] z-10 font-josefin fixed top-0 backdrop-blur-sm'>
      <motion.h1
        className="text-2xl md:text-4xl font-condiment tracking-10 text-sky-400 font-bold cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => scrollToSection('home')}
      >
        Mprasath
      </motion.h1>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl"
        whileTap={{ scale: 0.9 }}
      >
        ☰
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col md:flex-row gap-4 md:gap-20 text-lg md:text-xl font-semibold absolute md:relative top-10 md:top-0 left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button onClick={() => scrollToSection('home')} className="nav-item block text-left">Home</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button onClick={() => scrollToSection('about')} className="nav-item block text-left">About</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button onClick={() => scrollToSection('skills')} className="nav-item block text-left">Skills</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button onClick={() => scrollToSection('project')} className="nav-item block text-left">Project</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button onClick={() => scrollToSection('contact')} className="nav-item block text-left">Contact</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`flex flex-col md:flex-row gap-4 md:gap-20 text-lg md:text-xl font-semibold absolute md:relative top-10 md:top-0 left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 ${isOpen ? 'hidden' : 'hidden md:flex'}`}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button onClick={() => scrollToSection('home')} className="nav-item">Home</button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button onClick={() => scrollToSection('about')} className="nav-item">About</button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button onClick={() => scrollToSection('skills')} className="nav-item block text-left">Skills</button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button onClick={() => scrollToSection('project')} className="nav-item">Project</button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button onClick={() => scrollToSection('contact')} className="nav-item">Contact</button>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar

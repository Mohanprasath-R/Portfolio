import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Footer from "./components/Footer.jsx";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const projectInView = useInView(projectRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      <div id="home" ref={homeRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={homeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Home />
        </motion.div>
      </div>
      <div id="about" ref={aboutRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>
      </div>
      <div id="skills" ref={skillsRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Skills />
        </motion.div>
      </div>
      <div id="project" ref={projectRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Project />
        </motion.div>
      </div>
      <div id="contact" ref={contactRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default App

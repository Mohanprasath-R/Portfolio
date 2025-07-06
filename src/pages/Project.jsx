

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, showcasing projects and skills with smooth animations.",
      tech: ["React", "React Icons ", "Tailwind CSS ", "web3forms API", "Framer Motion"],
      image: "./portfolio.png",
      github: "https://github.com/Mohanprasath-R/portfolio",
      live: "https://mohanprasath-r.github.io/portfolio"
    },
    {
      title: "E-Commerce App",
      description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
      tech: ["Node.js", "Express", "MongoDB", "React"],
      image: "./ecommerce.png",
      github: "https://github.com/Mohanprasath-R/ecommerce",
      live: "https://ecommerce-demo.herokuapp.com"
    },
    {
      title: "Task Manager",
      description: "A productivity app for managing tasks with drag-and-drop functionality and real-time updates.",
      tech: ["React", "Firebase", "Material-UI"],
      image: "./image.png",
      github: "https://github.com/Mohanprasath-R/task-manager",
      live: "https://task-manager-demo.netlify.app"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className="w-full min-h-[95vh] text-white justify-center flex flex-col items-center py-10 px-4 font-poppins"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap items-center gap-2 mb-4 h-15">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-around gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub title="GitHub" /> GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt title="Live Demo" /> Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Project

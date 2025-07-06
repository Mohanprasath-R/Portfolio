import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.div
        className="w-full h-[100vh] text-white flex font-poppins flex-col md:flex-row justify-center items-center"
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex justify-center items-center md:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src="./profile.png"
            alt="profile"
            className="w-75 md:w-100 lg:w-100 opacity-80 rounded-xl shadow-in "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
        <motion.div
          className="flex flex-col font-bold basis-1/2 gap-6 text-center justify-center md:text-left md:pe-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            className="text-5xl text-center font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="lg:text-2xl text-xl md:leading-10 tracking-2 font-light font-condiment text-justify px-2 md:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Passionate Full-Stack Developer specializing in dynamic, user-centric web applications from concept to deployment. Expertise spans front-end technologies (HTML, CSS, JavaScript) and back-end frameworks (Node.js, Spring, SpringBoot, Express.js). Focused on transforming ideas into scalable, efficient, visually appealing digital experiences with clean architecture, performance optimization, and seamless integration for reliable functionality and exceptional user experience.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  )
}

export default About

import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFilePdf, FaEnvelope  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full h-[100vh] text-white flex font-josefin flex-col md:flex-row justify-around items-center">
      <motion.div
        className="flex flex-col font-bold gap-6 basis-2/3 text-center justify-center md:text-left pt-16 md:ps-30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className='text-6xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi I'm
        </motion.h1>
        <motion.h1
          className="text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mohanprasath R
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          A Professional
          <TypeAnimation
            sequence={[
              ' UI/UX developer',
              1500,
              ' Full Stack Developer',
              1500,
            ]}
            speed={50}
            className="text-sky-400"
            repeat={Infinity}
          />
        </motion.p>
        <motion.div
          className='flex gap-6 justify-center md:justify-start text-4xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="https://www.linkedin.com/posts/mohanprasath-r-b915692a1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="LinkedIn"
          >
            <FaLinkedin color="#288ff6ff" />
          </motion.a>
          <motion.a
            href="https://github.com/Mohanprasath-R"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="GitHub"
          >
            <FaGithub color="#fff" />
          </motion.a>
          <motion.a
            href="https://wa.me/9345757510"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="WhatsApp"
          >
            <FaWhatsapp color="#25D366" />
          </motion.a>
          <motion.a
            href="mailto:mprasath3015@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Email"
          >
            <FaEnvelope color="#db3904ff" />
          </motion.a>
        </motion.div>
        <motion.div
          className="flex gap-6 justify-center items-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="/resume.pdf"
            download="Mohanprasath_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <FaFilePdf className="inline mb-1" />
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/project" className='rounded-lg ring-2 p-3 ring-blue-600 hover:bg-blue-700'>My Work</Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-center h-[90vh] basis-2/3 items-center md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src="./profile.png"
          alt="profile"
          className="w-75 md:w-100 lg:w-100 opacity-80 rounded-full bg-center shadow-3xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
    </div>
  )
}

export default Home

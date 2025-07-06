import { motion } from 'framer-motion';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiJava, DiMysql, DiPostgresql } from 'react-icons/di';
import { SiSpring, SiExpress } from "react-icons/si";
const Skills = () => {
const skills = [
    { name: 'HTML', icon: DiHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: DiCss3, color: 'text-blue-500' },
    { name: 'JavaScript', icon: DiJavascript1, color: 'text-yellow-500' },
    { name: 'React', icon: DiReact, color: 'text-cyan-500' }, // ✅ Fixed React icon
    { name: 'Node.js', icon: DiNodejs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-500' }, // ✅ Proper icon
    { name: 'MongoDB', icon: DiMongodb, color: 'text-green-600' },
    { name: 'Java', icon: DiJava, color: 'text-red-500' },
    { name: 'Spring', icon: SiSpring, color: 'text-green-400' }, // ✅ Spring icon
    { name: 'Spring Boot', icon: SiSpring, color: 'text-green-500' },
    { name: 'MySQL', icon: DiMysql, color: 'text-blue-600' },
    { name: 'SQL', icon: DiPostgresql, color: 'text-purple-500' }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="w-full min-h-[100vh] text-white flex flex-col justify-center items-center py-10 px-4 font-poppins"
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
        My Skills
      </motion.h1>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-700"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <skill.icon className={`text-6xl mb-4 ${skill.color}`} title={skill.name} />
            <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;

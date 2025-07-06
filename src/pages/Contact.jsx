

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "088ae8ac-3c2c-4bdc-a1f4-e0b3fe96b4e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({ name: '', email: '', message: '' });
    } else {
      setResult("Error");
    }
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohanprasath-r-b915692a1", color: "#0077B5" },
    { icon: FaGithub, href: "https://github.com/Mohanprasath-R", color: "#fff" },
    { icon: FaWhatsapp, href: "https://wa.me/9345757510", color: "#25D366" },
    { icon: FaEnvelope, href: "mailto:mprasath3015@gmail.com", color: "#EA4335" }
  ];

  return (
    <motion.div
      className="w-full min-h-[90vh] text-white flex flex-col items-center py-10 px-4 font-poppins"
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
        Get In Touch
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl w-full">
        {/* Contact Form */}
        <motion.div
          className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                placeholder="Your message here..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Submit Form
            </motion.button>

            <span className="text-center mt-4">{result}</span>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
          <div className="flex flex-col gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <link.icon size={30} color={link.color} title={link.icon === FaLinkedin ? 'LinkedIn' : link.icon === FaGithub ? 'GitHub' : link.icon === FaWhatsapp ? 'WhatsApp' : 'Email'} />
                <span>{link.icon === FaLinkedin ? 'LinkedIn' : link.icon === FaGithub ? 'GitHub' : link.icon === FaWhatsapp ? 'WhatsApp' : 'Email'}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact

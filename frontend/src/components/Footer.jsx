import React from 'react';

const Footer = () => {
  return (
    <div className="bg-dark text-white text-center py-4">
      <p>&copy; 2024 Mohanprasath | All Rights Reserved</p>
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://wa.me/9345757510?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mohanprasath-r-b915692a1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>

          <a
            href="https://github.com/Prasathcode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="GitHub"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
  );
};

export default Footer;

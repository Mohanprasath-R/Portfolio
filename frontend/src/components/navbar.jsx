import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling between sections

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Logo/Brand Name */}
        <a className="navbar-brand" href="#home">
          Mohanprasath
        </a>
        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="home"
                className="nav-link"
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link"
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                className="nav-link"
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="active"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                className="nav-link"
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                className="nav-link"
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="active"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-link"
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

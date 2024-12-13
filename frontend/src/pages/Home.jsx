import { useEffect } from "react";
import Typed from "typed.js";
import { Link } from 'react-scroll'; // For smooth scrolling between sections
import "../App.css"
const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["UI/UX Designer", "Full Stack Developer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      {/* Main Home Section */}
      
        <div className="container-fluid text-center py-5 vh-100 " id="home">
        <div className="d-flex justify-content-center align-items-center my-5 " >
          {/* Navigation Bar */}

          {/* Content Section */}
          <div className="row align-items-center">
            {/* Left Column (Text Content) */}
            <div className="col-12 col-lg-6">
              <h1 className="animate__animated animate__fadeInDown animate__delay-1s text-light">
                Hello, I'm <span className="text-primary">R.Mohanprasath</span>
              </h1>
              <h4 className="text-light "><span className="typed text-info"></span>
              </h4>
              <p className="text-light lead mb-2">
                A passionate Web Developer dedicated to crafting innovative digital experiences.
              </p>
              <Link
                to="about"
                className="btn btn-primary btn-lg m-1 px-4 py-2 rounded-pill"
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="active"
              >
                About Me
              </Link>
              {/* Social Media Links */}
              <div className="d-flex justify-content-center mt-4">
                <a
                  href="https://wa.me/9345757510?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-success h3"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohanprasath-r-b915692a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-primary h3"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Prasathcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-light h3"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            {/* Right Column (Profile Image) */}
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <img
                src="https://raw.githubusercontent.com/Prasathcode/TechAlpha_Portfolio-Website/refs/heads/main/assets/img/profile.jpg"
                alt="Profile"
                className="img-fluid rounded-circle border-3 shadow-lg w-75 mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Sections */}
    </>
  );
};

export default Home;

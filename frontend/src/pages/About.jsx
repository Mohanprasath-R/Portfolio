import React from "react";

const About = () => {
  return (
    <div className="container vh-100" id="about">
      <div className="row align-items-center text-center">
        <h1 className="text-primary my-5">About Me</h1>
        <div className="col-lg-6 col-sm-12 text-center">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://raw.githubusercontent.com/Prasathcode/TechAlpha_Portfolio-Website/refs/heads/main/assets/img/profile.jpg"
              alt="Profile"
              className="img-fluid rounded-circle border-2 shadow-lg w-50"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h2 className="text-danger">I'm Mohanprasath</h2>
          <p className="text-justify">
            As a full-stack developer, I craft both the visible and invisible
            components of web applications. My expertise spans from front-end
            languages like HTML, CSS, and JavaScript to back-end frameworks like
            Node.js, Django, and Express.js. I bring ideas to life with seamless
            functionality and exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

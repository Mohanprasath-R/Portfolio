import React from "react";

const services = [
  {
    name: 'Frontend Development',
    icon: "fas fa-laptop-code",
    description: "Crafting user-friendly interfaces with React and Bootstrap."
  },
  {
    name: 'UI/UX Design',
    icon: "fas fa-palette",
    description: "I design intuitive and aesthetically pleasing user interfaces to create seamless user experiences."
  },
  {
    name: 'Web Development',
    icon: "fas fa-code",
    description: "Building responsive websites using React, Node.js, and MongoDB."
  },
  {
    name: 'Backend Development',
    icon: "fas fa-server",
    description: "Developing the server-side logic and databases with Node.js, Express, and MongoDB."
  },
  {
    name: 'SEO Optimization',
    icon: "fas fa-search",
    description: "Improving search engine rankings and increasing web traffic through SEO best practices."
  },
  {
    name: 'Mobile App Development',
    icon: "fas fa-mobile-alt",
    description: "Creating mobile applications for iOS and Android using React Native."
  },
];



const Services = () => {
  return (
    <div className="container-fluid py-3 px-sm-5 h-100" id="services">
      <h2 className="text-primary text-center mb-5">Services</h2>
      <div className="row ">

        {services.map((service, index) => (
          <div className="col-md-4 p-2" key={index}>
            <div className="text-center py-3 border">
              <p className="h1 text-danger"><i className={service.icon}></i>
              </p>
              <h5 className="card-title mb-2">{service.name}</h5>
              <p className="card-text">
                {service.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;

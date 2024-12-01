import React from "react";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column container vh-100" id="contact">
      <form className="text-light rounded">
      <h2 className="text-primary text-center ">Contact</h2>
        <div className="mb-1">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your name" />
        </div>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your email" />
        </div>
        <div className="mb-1">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="mt-3 w-100 btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

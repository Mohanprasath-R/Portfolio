import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_iawdb2h", // Replace with your EmailJS service ID
        "template_z7kumhi", // Replace with your EmailJS template ID
        formData,
        "oGqM7lGOoJrPxZUZr"   // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setIsSent(false);
          }, 10000);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
        }
      );
  };

  return (
    <div className="container mt-5 " id="contact">
      <h2 className="text-center text-primary mb-4">Contact Us</h2>
      <div className="d-flex">
        <form onSubmit={handleSubmit} className="border p-4 mx-auto rounded shadow-sm">
          {isSent && (
            <div className="alert alert-success" role="alert">
              Your message has been sent successfully!
            </div>
          )}
          {isError && (
            <div className="alert alert-danger" role="alert">
              Something went wrong. Please try again.
            </div>
          )}
          <div className="my-1">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Please enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-1">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Ask me like your friend"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

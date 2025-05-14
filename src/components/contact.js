import React, { useState } from "react";
import "../styles/styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

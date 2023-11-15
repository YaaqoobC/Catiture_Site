import React, { useState } from 'react';
import './ContactPage.css';



function ContactPage() {
  const [formData, setFormData] = useState({  //We use the useState hook to manage the form data in the formData state object.
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => { //The handleChange function updates the formData object as users type into the form fields.
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => { //The handleSubmit function is called when the form is submitted
    e.preventDefault();
    // Here, you can send the form data to a backend API or handle it as needed
    console.log('Form data submitted:', formData);  //currently sending it to the console
    // You can also reset the form fields here if needed
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

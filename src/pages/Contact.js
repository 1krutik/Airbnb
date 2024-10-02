import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          {submitted ? (
            <div className="alert alert-success">
              Thank you for your message. We'll get back to you soon!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger">Send Message</button>
            </form>
          )}
        </div>
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <p>We'd love to hear from you. Please fill out the form or use the contact information below.</p>
          <ul className="list-unstyled">
            <li><i className="bi bi-geo-alt-fill me-2"></i>123 AirbnbClone St, San Francisco, CA 94111</li>
            <li><i className="bi bi-telephone-fill me-2"></i>+1 (555) 123-4567</li>
            <li><i className="bi bi-envelope-fill me-2"></i>contact@airbnbclone.com</li>
          </ul>
          <h3 className="mt-4">Follow Us</h3>
          <div className="d-flex">
  <a href="#" className="me-3 text-dark">
    <i className="bi bi-facebook"></i>
    <span className="visually-hidden">Facebook</span>
  </a>
  <a href="#" className="me-3 text-dark">
    <i className="bi bi-twitter"></i>
    <span className="visually-hidden">Twitter</span>
  </a>
  <a href="#" className="me-3 text-dark">
    <i className="bi bi-instagram"></i>
    <span className="visually-hidden">Instagram</span>
  </a>
  <a href="#" className="text-dark">
    <i className="bi bi-linkedin"></i>
    <span className="visually-hidden">LinkedIn</span>
  </a>
</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
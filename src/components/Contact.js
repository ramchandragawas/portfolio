// Contact.js
import React, { useState, useRef } from 'react';
import './Contact.css';
import { loadLinkedInScript, openLinkedInProfile } from '../Utils/LinkdinScript';

const Contact = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleLinkedInClick = async (e) => {
    e.preventDefault();
    
    try {
      // Load the LinkedIn script
      await loadLinkedInScript();
      
      // Try to open the profile using the LinkedIn API
      const success = openLinkedInProfile('ramchandra-gawas-444847265');
      
      // If the LinkedIn API fails, fall back to opening the URL directly
      if (!success) {
        window.open('https://www.linkedin.com/in/ramchandra-gawas-444847265/', '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      // If script loading fails, fall back to opening the URL directly
      window.open('https://www.linkedin.com/in/ramchandra-gawas-444847265/', '_blank', 'noopener,noreferrer');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: 'Message sent successfully!',
        isError: false,
        isSubmitting: false
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>Belagavi,karnataka</p>
            </div>
            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <a href="mailto:ramgawas01@gmail.com">ramgawas01@gmail.com</a>
            </div>
            <div className="contact-card">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <a href="tel:+1234567890">+91 9370 881 921</a>
            </div>
         
            <div className="social-links">
              <a href="https://github.com/ramchandragawas" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" onClick={handleLinkedInClick} className="linkedin-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ram</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ram"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ramgawas01@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry...."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${formStatus.isSubmitting ? 'submitting' : ''}`}
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                ) : (
                  <>Send Message <i className="fas fa-paper-plane"></i></>
                )}
              </button>
              {formStatus.message && (
                <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
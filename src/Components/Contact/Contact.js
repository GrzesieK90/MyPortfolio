import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ show: false, success: false, message: '' });

    emailjs.sendForm(
      'service_sy7pkgp', // Replace with your EmailJS service ID
      'template_d7npu34', // Replace with your EmailJS template ID
      form.current,
      'y7JdQlboPNQ9AcF0Y' // Replace with your EmailJS public key
    )
      .then((result) => {
        setStatus({
          show: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        setStatus({
          show: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setStatus({ show: false, success: false, message: '' });
        }, 5000);
      });
  };

  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact with <span className="highlight">me:</span></h1>
      
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <FaUser className="info-icon" />
            <div className="info-content">
              <h3>Name</h3>
              <p>Grzegorz Kuzera</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div className="info-content">
              <h3>Address</h3>
              <p>Avenida de Palacios 68<br />03179 Formentera del Segura<br />Alicante, Spain</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div className="info-content">
              <h3>Email</h3>
              <a href="mailto:greg.dev.k@gmail.com">greg.dev.k@gmail.com</a>
            </div>
          </div>

          <div className="info-card">
            <div className="phone-icons">
              <FaPhoneAlt className="info-icon" />
              <FaWhatsapp className="info-icon whatsapp" />
            </div>
            <div className="info-content">
              <h3>Phone & WhatsApp</h3>
              <a href="tel:+34642239431">+34 642 239 431</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.show && (
              <div className={`status-message ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.5677963875387!2d-0.7429861!3d38.0876111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63a3c8d8b8b8b7%3A0x0!2sAvenida%20de%20Palacios%2068%2C%2003179%20Formentera%20del%20Segura%2C%20Alicante!5e0!3m2!1sen!2ses!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

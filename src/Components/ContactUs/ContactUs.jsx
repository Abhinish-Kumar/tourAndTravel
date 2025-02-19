import { useState } from 'react';
import './ContectUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here, you would typically make an API call to submit the form data.
    alert('Tour booking request submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      tourDate: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h2>Contact Us</h2>
        <p>Book your next tour with us! Fill in the details below.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-us-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            id="tourDate"
            name="tourDate"
            value={formData.tourDate}
            onChange={handleChange}
            placeholder="Preferred Tour Date"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  );
};

export default ContactUs;

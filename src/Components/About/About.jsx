import ContactUs from '../ContactUs/ContactUs';
import './About.css'; // Link to the CSS file
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your gateway to the world of travel experiences</p>
      </div>

      <section className="intro">
        <h2>Welcome to Our Travel Agency</h2>
        <div className="intro-content">
          <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Travel" className="intro-img" />
          <p>
            We are a passionate team dedicated to curating the best travel experiences for you. With over 10 years in the industry,
            we offer personalized travel planning to ensure every adventure is tailored to your needs. Whether you're looking for
            a relaxing beach holiday, an adventurous mountain trek, or a cultural city tour, we've got you covered.
          </p>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide unforgettable travel experiences that inspire, educate, and connect. We strive to
          offer exceptional service, affordable prices, and a commitment to sustainability. We believe in the power of travel
          to broaden horizons and bring people closer together.
        </p>
        <div className="mission-img">
          <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Mission" />
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="why-us-content">
          <div className="reason">
            <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Experience" />
            <h3>Expert Guides</h3>
            <p>Our team consists of experienced and certified tour guides who ensure your journey is smooth and memorable.</p>
          </div>
          <div className="reason">
            <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Affordable" />
            <h3>Affordable Prices</h3>
            <p>We offer a wide range of packages that suit every budget, from economy to luxury travel experiences.</p>
          </div>
          <div className="reason">
            <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Support" />
            <h3>24/7 Customer Support</h3>
            <p>Our support team is available around the clock to assist with any inquiries or issues during your trip.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <p>Explore the wide array of travel services we provide to ensure you have a seamless journey:</p>
        <ul>
          <li>Customized Tour Packages</li>
          <li>Flight and Accommodation Booking</li>
          <li>Group Tours and Private Tours</li>
          <li>Visa Assistance</li>
          <li>Travel Insurance</li>
          <li>Corporate and Event Travel</li>
        </ul>
        <div className="services-img">
          <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Services" />
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>John has over 15 years of experience in the travel industry, leading the company with a vision to create meaningful travel experiences.</p>
          </div>
          <div className="member">
            <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Lead Travel Consultant</p>
            <p>Jane specializes in planning bespoke travel itineraries that meet the unique preferences and needs of each client.</p>
          </div>
          <div className="member">
            <img src="https://wallpaperaccess.com/full/2538198.jpg" alt="Team Member" />
            <h3>Samuel Green</h3>
            <p>Tour Guide</p>
            <p>Samuel is an experienced and knowledgeable guide with a passion for showing travelers the hidden gems of every destination.</p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Got questions? We’re here to help! Reach out to us for any inquiries or to plan your next trip.</p>
      <ContactUs/>
      </section>
    </div>
  );
}

export default About;


import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">TravelMate</h2>
          <p>
            TravelMate offers exceptional tours and travel services to the most popular destinations around the world. Whether you're looking for adventure, relaxation, or cultural exploration, we’ve got you covered.
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> support@travelmate.com</p>
            <p><strong>Phone:</strong> +1-800-123-4567</p>
          </div>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#destinations">Destinations</a></li>
          </ul>
        </div>
        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TravelMate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

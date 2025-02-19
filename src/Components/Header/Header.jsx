import { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Header.css";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header>
      <div className="navbar">
        <img
          src="https://images.creativemarket.com/0.1.0/ps/7901653/1896/1265/m1/fpnw/wm0/creativee-05-.jpg?1583899424&s=efd648d56101ccf7b3c02c62e486b6cd"
          className="logo"
          alt="your logo"
        />
        <div className="menu-icon" onClick={toggleDrawer}>
          &#9776; {/* Hamburger icon */}
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="">Home</Link></li> {/* Updated to Link */}
            <li><Link to="about">About</Link></li> {/* Updated to Link */}
            <li><Link to="services">Services</Link></li> {/* Updated to Link */}
            <li><Link to="contactUs">Contact</Link></li> {/* Updated to Link */}
          </ul>
          {/* Add Book Now button */}
          <button className="book-now-btn"><Link to="contactUs" >Book Now</Link></button>
        </nav>
      </div>

      <div className={`side-drawer ${drawerOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="" onClick={toggleDrawer}>Home</Link></li> {/* Updated to Link */}
          <li><Link to="about" onClick={toggleDrawer}>About</Link></li> {/* Updated to Link */}
          <li><Link to="services" onClick={toggleDrawer}>Services</Link></li> {/* Updated to Link */}
          <li><Link to="contactUs" onClick={toggleDrawer}>Contact</Link></li> {/* Updated to Link */}
        </ul>
        {/* Add Book Now button in the drawer */}
        <button className="book-now-btn" onClick={toggleDrawer}><Link to="contactUs" >Book Now</Link></button>
      </div>
    </header>
  );
}

export default Header;

import { useState } from "react";
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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* Add Book Now button */}
          <button className="book-now-btn">Book Now</button>
        </nav>
      </div>

      <div className={`side-drawer ${drawerOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
          <li><a href="#about" onClick={toggleDrawer}>About</a></li>
          <li><a href="#services" onClick={toggleDrawer}>Services</a></li>
          <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
        </ul>
        {/* Add Book Now button in the drawer */}
        <button className="book-now-btn" onClick={toggleDrawer}>Book Now</button>
      </div>
    </header>
  );
}

export default Header;

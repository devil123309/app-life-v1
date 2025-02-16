import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bloodDonation from "./images/12333333-removebg.png";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container" data-aos="zoom-in" data-aos-duration="1500">
          <div className="logo-img">
            <img src={bloodDonation} alt="Blood Donation" />
          </div>
          <div className="logo">
            Life <span>Connect</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className={`links ${menuOpen ? "active" : ""}`}>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <Link to="/donors" onClick={() => setMenuOpen(false)}>Donors</Link>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <Link to="/patients" onClick={() => setMenuOpen(false)}>Patient</Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <i
          className={`fa-solid fa-bars hamburg ${menuOpen ? "open" : ""}`}
          role="button"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        ></i>
      </div>
    </nav>
  );
};

export default Index;

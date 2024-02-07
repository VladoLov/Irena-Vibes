import React, { useState, useEffect } from "react";
import logo from "../images/Logo.png";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // eslint-disable-next-line
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
      setShowLinks(true); // Close links when resizing to a larger screen
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="VocationVibes" />
          <button type="button" className="nav-toggle" onClick={handleToggle}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div>
          {showLinks && (
            <PageLinks parentClass="nav-links" itemClass="nav-link" />
          )}
        </div>
        {/* <PageLinks
          parentClass={`nav-links ${showLinks ? "show-links" : ""}`}
          itemClass="nav-link"
        /> */}

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLink {...link} key={link.id} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

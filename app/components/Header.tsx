"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">BUFFALO AIRPORT EXPRESS</div>
      <nav>
        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Fleet</Link>
          </li>
          <li>
            <Link href="#">Testimonials</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <a href="#" className="btn">
        Book Now
      </a>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;

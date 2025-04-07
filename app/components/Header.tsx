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
      <div className="logo">
        <Link className="logo-img" href="/">
          BUFFALO AIRPORT EXPRESS
        </Link>
      </div>

      <nav>
        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/policies/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/policies/refund-policy">Refund Policy</Link>
          </li>
          <li>
            <Link href="/policies/terms-and-conditions">
              Terms & Conditions
            </Link>
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

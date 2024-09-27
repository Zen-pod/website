import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">ZEN</h1>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#our-team">Our Team</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
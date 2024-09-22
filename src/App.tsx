// src/App.tsx
import React from 'react';
import './App.css'; // Your CSS
import logo from './assets/logo.png'; // Your logo
import backgroundImage from './assets/background.jpg'; // Background image

const App: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Full-screen Hero Section */}
      <div className="hero" id="home">
        <div className="center-logo">
          <img src={logo} alt="Voltwarehouse Logo" />
        </div>
        <h1 className="main-heading">Welcome to Voltwarehouse!</h1>
        <p className="sub-heading">Explore the best products in the market</p>
      </div>

      {/* Section for Products */}
      <div className="section" id="products">
        <h2>Our Products</h2>
        <p>Check out our latest collections and innovations.</p>
      </div>

      {/* Section for Explore */}
      <div className="section" id="explore">
        <h2>Explore More</h2>
        <p>Discover our wide range of offerings.</p>
      </div>

      {/* Section for Contact */}
      <div className="section" id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any queries or assistance.</p>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Voltwarehouse. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;

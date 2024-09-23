import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png'; // Assuming your logo is in 'assets' folder

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulates 3 seconds of loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${!loading ? 'loaded' : ''}`}>
      {/* Loading screen */}
      {loading && (
        <div className="loading-screen">
          <img src={logo} alt="Loading Logo" />
        </div>
      )}

      {/* Main content */}
      {!loading && (
        <div>
          <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <div className="navbar-logo">
              <img src={logo} alt="Logo" />
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              &#9776; {/* Hamburger icon */}
            </div>

            <ul>
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="content">
            <h1 className="animated-text">Welcome to Sound Ethics</h1>
            <p>This is where the main content will go. It should be sleek, clean, and minimalist.</p>
            <button>Learn More</button>
          </div>

          <footer>
            <p>&copy; 2024 Sound Ethics</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.png'; // Replace with your logo path

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for loading effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div id="loading-screen">
          <div id="loading-logo"></div>
        </div>
      )}

      {!loading && (
        <>
          {/* Bose-like Navbar */}
          <nav className="navbar">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" />
            </div>
            <ul>
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#about">About</a></li>
              <li>
                <a href="#services">Services</a>
                <div className="dropdown-content">
                  <a href="#design">Design</a>
                  <a href="#development">Development</a>
                  <a href="#marketing">Marketing</a>
                </div>
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="content">
            <h1>Welcome to Bose</h1>
            <p>This is where the main content will go.</p>
            <button>Learn More</button>
          </div>

          {/* Footer */}
          <footer>
            <p>&copy; 2024 Bose</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;

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
              <li><a href="#about">About</a></li>
              <li>
                <a href="#services">Services</a>
                <div className="dropdown-content">
                  <a href="#contact_us">Contact Us</a>
                  <a href="#partner_up">Partner Up</a>
                  <a href="#opportunities">Opportunities</a>
                </div>
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="content">
            <h1>WELCOME TO VOLTWAREHOUSE!</h1>
            <p>Building something and don't know the right tool to use? Struggling with a new machine or electrical device? VoltWarehouse is your ultimate guide for all things electronic. From beginner-friendly methodologies to detailed descriptions, we bring everything you need to learn, build, and troubleshoot—conveniently in one place!</p>
            <button>Learn More</button>
          </div>

          {/* Footer */}
          <footer>
            <p>&copy; 2024 VoltWarehouse</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;

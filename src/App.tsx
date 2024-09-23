import React from 'react';
import './App.css';
import logo from './assets/logo.png'; // Assuming your logo is in 'assets' folder

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="content">
        <h1>Welcome to Sound Ethics</h1>
        <p>This is where the main content will go, and you can style it however you like!</p>
        <button>Learn More</button>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Sound Ethics</p>
      </footer>
    </div>
  );
};

export default App;

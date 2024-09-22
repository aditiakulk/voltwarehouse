// src/App.tsx
import React from 'react';
import './App.css'; // Make sure this CSS file is correctly loaded
import logo from './assets/logo.png'; // Ensure the path to your logo is correct

const App: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Voltwarehouse Logo" />
        </div>
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h1>Welcome to Voltwarehouse!</h1>
        <p>Your one-stop shop for exploring the best products available.</p>
        <p>Check out our new collections and explore the latest trends.</p>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Voltwarehouse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

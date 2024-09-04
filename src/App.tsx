// src/App.tsx
import React from 'react';
import './App.css';
import logo from './assets/logo.png'; // Ensure the path to your logo is correct

const App: React.FC = () => {
  return (
    <div>
      {/* Header for meta tags */}
      <header>
        <title>Voltwarehouse - Home</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Voltwarehouse - Your go-to place for all products and explorations!" />
      </header>

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
        {/* Add more content here as needed */}
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Voltwarehouse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

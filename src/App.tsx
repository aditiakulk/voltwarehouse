import React from 'react';
import './App.css';
import logo from './assets/logo.png'; // Ensure this path is correct

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import logo from './assets/logo.png'; // Adjust the path if necessary

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default App;

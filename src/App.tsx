// src/App.tsx
import React from 'react';
import './App.css'; // Import the CSS file for styling

const App: React.FC = () => {
  return (
    <div>
      <ul className="navbar">
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      
      <div className="content">
        <h1>Fixed Top Navigation Bar</h1>
        <h2>Scroll this page to see the effect</h2>
        <h2>The navigation bar will stay at the top of the page while scrolling</h2>
        
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        {/* Add additional content here as needed */}
      </div>
    </div>
  );
};

export default App;

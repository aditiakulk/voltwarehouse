import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

const products = [
  { id: 1, name: 'Arduino Uno', image: '/assets/arduino-uno.png' },
  { id: 2, name: 'Raspberry Pi 4', image: '/assets/raspberry-pi.png' },
  { id: 3, name: 'ESP32 Wi-Fi Module', image: '/assets/esp32.png' },
  // Add more products as needed
];

const ProductsPage: React.FC = () => {
  return (
    <div className="products-container">
      <h2>Explore Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

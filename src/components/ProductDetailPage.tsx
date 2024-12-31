import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';

const productDetails = {
  1: {
    name: 'Arduino Uno',
    image: '/assets/arduino-uno.png',
    description: 'A microcontroller board based on the ATmega328P.',
    steps: [
      'Step 1: Connect the Arduino to your PC via USB.',
      'Step 2: Install the Arduino IDE.',
      'Step 3: Write your code and upload it to the board.',
    ],
  },
  2: {
    name: 'Raspberry Pi 4',
    image: '/assets/raspberry-pi.png',
    description: 'A powerful, affordable computer built for project makers.',
    steps: [
      'Step 1: Insert the microSD card with an OS.',
      'Step 2: Connect your monitor and keyboard.',
      'Step 3: Power up the Raspberry Pi.',
    ],
  },
  3: {
    name: 'ESP32 Wi-Fi Module',
    image: '/assets/esp32.png',
    description: 'A low-power system on a chip with integrated Wi-Fi and Bluetooth.',
    steps: [
      'Step 1: Connect ESP32 to your PC.',
      'Step 2: Use a development environment to upload your code.',
      'Step 3: Run the Wi-Fi scan example.',
    ],
  },
};

const ProductDetailPage: React.FC = () => {
  // Ensure id is typed as a string
const { id } = useParams<{ id: string }>();

// Correctly parse id to a number and type productDetails
const productDetails: { [key: number]: { name: string; image: string; description: string; steps: string[] } } = {
  1: { name: 'Product 1', image: 'image1.png', description: 'Desc 1', steps: ['Step 1', 'Step 2'] },
  2: { name: 'Product 2', image: 'image2.png', description: 'Desc 2', steps: ['Step 1', 'Step 2'] },
  // Add other products
};

// Parse id as a number and access product details
const product = productDetails[parseInt(id || '1')];

if (!product) {
  return <div>Product not found</div>;
}

return (
  <div className="product-detail">
    <h2>{product.name}</h2>
    <img src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <h3>Instructions:</h3>
    <ul>
      {/* Explicitly type step and index */}
      {product.steps.map((step: string, index: number) => (
        <li key={index}>{step}</li>
      ))}
    </ul>
  </div>
);

};

export default ProductDetailPage;

import React, { useState } from 'react';
import '../styles/CarouselCard.css'; // Import the CSS file

// Import images
import image262 from '../assests/domino-studio-164_6wVEHfI-unsplash.jpg';
import image263 from '../assests/patrick-hodskins-B6LFgATILWI-unsplash.jpg';
import image1 from '../assests/pexels-ingo-609771.jpg';
import image2 from '../assests/pexels-mnzoutfits-1598505.jpg';

const CarouselCard = () => {
  const [activeSet, setActiveSet] = useState(1);
  const [animating, setAnimating] = useState(false);

  // Update imageSets to use local images
  const imageSets = {
    1: [image262, image263],
    2: [image1, image2],
  };

  // Handle dot click to trigger animations
  const handleDotClick = (setNumber) => {
    if (setNumber !== activeSet) {
      setAnimating(true); // Start animation
      setTimeout(() => {
        setActiveSet(setNumber);
        setAnimating(false); // Reset after animation
      }, 500); // Match duration with CSS transition
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="half">
          <img
            src={imageSets[activeSet][0]}
            alt="First Half"
            className={`image ${
              animating
                ? activeSet === 1
                  ? 'out-up'
                  : 'in-down'
                : activeSet === 1
                ? 'animate-up'
                : 'animate-down'
            }`}
          />
        </div>
        <div className="half">
          <img
            src={imageSets[activeSet][1]}
            alt="Second Half"
            className={`image ${
              animating
                ? activeSet === 1
                  ? 'in-up'
                  : 'out-down'
                : activeSet === 1
                ? 'animate-down'
                : 'animate-up'
            }`}
          />
        </div>
        {/* Centered text for the entire card */}
        <div className="centered-text"></div>
      </div>
      <div className="dot-container">
        <span
          className={`dot ${activeSet === 1 ? 'active' : ''}`}
          onClick={() => handleDotClick(1)}
        />
        <span
          className={`dot ${activeSet === 2 ? 'active' : ''}`}
          onClick={() => handleDotClick(2)}
        />
      </div>
    </div>
  );
};

export default CarouselCard;

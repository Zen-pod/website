import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Recharge and Rejuvenate with Zen</h1>
          <p>Discover the power of a 30-minute nap in our state-of-the-art resting pods, designed to help you recharge and refocus.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Try Zen Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/pod-image.png'} alt="Zen Resting Pod" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
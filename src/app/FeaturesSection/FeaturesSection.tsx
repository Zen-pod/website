import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  const features = [
    { title: "ZEN POSITION", description: "Ergonomic resting position for optimal relaxation" },
    { title: "CUSTOMIZABLE SHELL", description: "Adaptable enclosure for personalized comfort" },
    { title: "SOUNDSCAPES", description: "Immersive audio environments for deep relaxation" },
    { title: "AROMATHERAPY", description: "Soothing scents to enhance your resting experience" },
    { title: "PELTIER COOLING", description: "Advanced temperature regulation for ideal comfort" }
  ];

  return (
    <section className="features-section">
      <h2 className='features-title'>FEATURES</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
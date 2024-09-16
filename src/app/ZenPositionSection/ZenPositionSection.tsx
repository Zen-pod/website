import React from 'react';
import './ZenPositionSection.css';

const ZenPositionSection: React.FC = () => {
  return (
    <section className="zen-position-section">
      <div className="zen-position-content">
        <h2 className='zen-position-title'>ZEN POSITION</h2>
        <p className='zen-position-text'>Experience ultimate relaxation with our ergonomically designed resting position.</p>
        <ul className='zen-position-list'>
          <li className='zen-position-list-text'>Reduces pressure on the lower back</li>
          <li className='zen-position-list-text'>Promotes better blood circulation</li>
          <li className='zen-position-list-text'>Alleviates tension in neck and shoulders</li>
          <li className='zen-position-list-text'>Customizable to your body's unique needs</li>
        </ul>
      </div>
      <div className="zen-position-image">
        <div className="image-frame">
          <img src={process.env.PUBLIC_URL + '/zen-position.png'} alt="Zen Position Demonstration" />
        </div>
      </div>
    </section>
  );
};

export default ZenPositionSection;

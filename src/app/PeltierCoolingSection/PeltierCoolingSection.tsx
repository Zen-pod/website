import React from 'react';
import './PeltierCoolingSection.css';

const ZenPositionSection: React.FC = () => {
  return (
    <section className="peltier-cooling-section">
      <div className="peltier-cooling-content">
        <h2 className='peltier-cooling-title'>PELTIER COOLING</h2>
        <p className='peltier-cooling-text'>Achieve your ideal comfort with advanced Peltier cooling technology. Whether you prefer a cool or warm environment, our temperature regulation system ensures a perfect balance for your relaxation needs.</p>
        <ul className='peltier-cooling-list'>
          <li className='peltier-cooling-list-item'>Dynamic temperature control for maximum comfort</li>
          <li className='peltier-cooling-list-item'>Energy-efficient Peltier cooling system</li>
          <li className='peltier-cooling-list-item'>Quick adjustments to suit personal preferences</li>
          <li className='peltier-cooling-list-item'>Helps maintain optimal body temperature during rest</li>
        </ul>
      </div>
      <div className="peltier-cooling-image">
        <div className="image-frame">
          <img src={process.env.PUBLIC_URL + '/cooling.jpg'} alt="Zen Position Demonstration" style={{ width: 'auto', height: '400px' }}/>
        </div>
      </div>
    </section>
  );
};

export default ZenPositionSection;

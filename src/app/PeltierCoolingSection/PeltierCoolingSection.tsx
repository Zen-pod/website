import React from 'react';
import './PeltierCoolingSection.css';

const PeltierCoolingSection: React.FC = () => {
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
        <div className="image-frame-peltier">
          <img src={process.env.PUBLIC_URL + '/cooling.png'} alt="Peltier Cooling Demonstration" width={350} height={350}/>
        </div>
      </div>
    </section>
  );
};

export default PeltierCoolingSection;

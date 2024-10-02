import React from 'react';
import './AromatherapySection.css';

const AromatherapySection: React.FC = () => {
  return (
    <section className="aromatherapy-section">
      <div className="aromatherapy-image">
        <div className="image-frame-aromatherapy">
          <img src={process.env.PUBLIC_URL + '/aro.png'} alt="Customizable Shell Demonstration" width={300} height={300}/>
        </div>
      </div>
      <div className="aromatherapy-content">
        <h2 className='AROMATHERAPY-title'>AROMATHERAPY</h2>
        <p className='AROMATHERAPY-text'>Elevate your resting experience with our selection of soothing scents. Designed to complement your relaxation, aromatherapy helps reduce stress and promotes a sense of well-being.</p>
        <ul className='AROMATHERAPY-list'>
          <li className='aromatherapy-list-item'>Variety of calming scents like lavender and eucalyptus</li>
          <li className='aromatherapy-list-item'>Aromatherapy integrated with the pod for seamless diffusion</li>
          <li className='aromatherapy-list-item'>Scents tailored to improve mood and relaxation</li>
          <li className='aromatherapy-list-item'>Option to switch between different scents based on your preference</li>
        </ul>
      </div>
    </section>
  );
};

export default AromatherapySection;

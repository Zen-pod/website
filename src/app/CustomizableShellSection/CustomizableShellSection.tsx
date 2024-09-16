import React from 'react';
import './CustomizableShellSection.css';

const CustomizableShellSection: React.FC = () => {
  return (
    <section className="customizable-shell-section">
      <div className="customizable-shell-image">
        <div className="image-frame">
          <img src={process.env.PUBLIC_URL + '/custom-shell.png'} alt="Customizable Shell Demonstration" />
        </div>
      </div>
      <div className="customizable-shell-content">
        <h2 className='customizable-shell-title'>CUSTOMIZABLE SHELL</h2>
        <p className='customizable-shell-text'>Tailor your relaxation experience with our customizable resting pod shell, designed to suit your needs.</p>
        <ul className='customizable-shell-list'>
          <li className='customizable-shell-list-item'>Personalized color options to match your environment</li>
          <li className='customizable-shell-list-item'>Multiple material choices for a luxurious feel</li>
          <li className='customizable-shell-list-item'>Soundproofing options for enhanced privacy</li>
          <li className='customizable-shell-list-item'>Seamless integration with ergonomic features</li>
        </ul>
      </div>
    </section>
  );
};

export default CustomizableShellSection;

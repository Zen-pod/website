import React from 'react';
import './SoundscapesSection.css';

const SoundscapesSection: React.FC = () => {
  return (
    <section className="soundscapes-section">
      <div className="soundscapes-content">
        <h2 className='soundscapes-title'>SOUNDSCAPES</h2>
        <p className='soundscapes-text'>Immerse yourself in a calming audio environment tailored for deep relaxation. Our carefully curated soundscapes are designed to transport you into a state of tranquility, helping you unwind and rejuvenate effortlessly.</p>
        <ul className='soundscapes-list'>
          <li className='soundscapes-list-item'>Customizable sound profiles for your preferred ambiance</li>
          <li className='soundscapes-list-item'>Enhance relaxation with natural sounds and calming music</li>
          <li className='soundscapes-list-item'>Noise isolation to block external distractions</li>
          <li className='soundscapes-list-item'>Sync with personal playlists or choose from preloaded tracks</li>
        </ul>
      </div>
      <div className="soundscapes-image">
        <div className="image-frame-soundscapes">
          <img src={process.env.PUBLIC_URL + '/sensor-signal.png'} alt="Soundscapes" style={{ width: '350px', height: '350px' }}/>
        </div>
      </div>
    </section>
  );
};

export default SoundscapesSection;

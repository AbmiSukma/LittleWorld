import { useState, useEffect } from 'react';
import SleepingZ from './SleepingZ';
import './HeroSection.css';

const HeroSection = ({ timeState }) => {
  const [timeStr, setTimeStr] = useState('');

  // Update time for the top right clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Force WIB (Waktu Indonesia Barat) = UTC+7
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false };
      setTimeStr(now.toLocaleTimeString('en-US', options) + ' WIB');
    };
    
    updateClock();
    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero-section ${timeState.id}`}>
      {/* --- New Mountain Landscape Background --- */}
      <div className="landscape-wrapper">
        {/* Sky and Clouds */}
        <div className="sky">
          <div className="moon"></div>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
        </div>

        {/* Layer Gunung - 5 Buah */}
        <div className="mountain-layer">
          <div className="mountain mt-1 mt-back"></div>
          <div className="mountain mt-2 mt-back"></div>
          <div className="mountain mt-3 mt-back"></div>
          <div className="mountain mt-4 mt-mid"></div>
          <div className="mountain mt-5 mt-mid"></div>
        </div>

        {/* Layer Bukit - 3 Buah */}
        <div className="hill-layer">
          <div className="hill hill-1 hill-dark"></div>
          <div className="hill hill-2 hill-dark"></div>
          <div className="hill hill-3 hill-dark"></div>
        </div>

        {/* Campsite elements */}
        <div className="campsite">
          {/* Pohon - 5 Buah */}
          <div className="tree tree-1"></div>
          <div className="tree tree-2"></div>
          <div className="tree tree-3"></div>
          <div className="tree tree-4"></div>
          <div className="tree tree-5"></div>

          {/* Tenda */}
          <div className="tent">
            <div className="tent-left"></div>
            <div className="tent-right"></div>
            <div className="tent-door"></div>
            <div className="tent-pole"></div>
            <div className="tent-flag"></div>
          </div>

          {/* Api Unggun */}
          <div className="campfire">
            <div className="logs logs-1"></div>
            <div className="logs logs-2"></div>
            <div className="flame">
              <div className="flame-inner"></div>
            </div>
            {/* Added Smoke Animation elements for consistency if wanted, otherwise can ignore */}
            <div className="smoke smoke-1"></div>
            <div className="smoke smoke-2"></div>
            <div className="smoke smoke-3"></div>
          </div>

          {/* UI Api Unggun (Burung) */}
          <div className="birds">
            <div className="bird bird-1"></div>
            <div className="bird bird-2"></div>
          </div>
        </div>
      </div>

      {/* --- Foreground Content (AMEY + Time) --- */}
      <div className="hero-content">
        <div className="hero-location-time">
          <div>INDONESIA</div>
          <div>{timeStr}</div>
        </div>
        
        <div className="hero-title-container">
          <h1 className="hero-title">
            AMEY
            {timeState.id === 'night' && <SleepingZ />}
          </h1>
          <h2 className="hero-subtitle">UI/UX DESIGNER</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

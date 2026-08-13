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
      {/* --- The New Unified Background --- */}
      <div id="landscape-wrapper">
        {/* Sky and Celestial Bodies */}
        <div className="sky">
          <div className="moon"></div>
          {/* Geometric Clouds */}
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>

        {/* Background Mountains */}
        <div className="mountains">
          <div className="mountain m-left"></div>
          <div className="mountain m-center"></div>
          <div className="mountain m-right"></div>
          <div className="mountain m-small"></div>
        </div>

        {/* Foreground Hills */}
        <div className="hills">
          <div className="hill hill-left"></div>
          <div className="hill hill-right"></div>
          <div className="hill hill-center"></div>
        </div>

        {/* Foreground Elements (Trees, Tent, Fire) */}
        <div className="foreground">
          {/* Wind lines */}
          <div className="hero-wind-layer">
            <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
               <path className="wind-line" d="M -200,200 Q 100,180 300,200 T 800,200 T 1600,200" fill="none" stroke="var(--fog)" strokeWidth="4" />
               <path className="wind-line delay" d="M -200,300 Q 200,320 400,300 T 1000,300 T 1600,300" fill="none" stroke="var(--fog)" strokeWidth="3" />
            </svg>
          </div>

          {/* Trees */}
          <div className="tree tree-1"></div>
          <div className="tree tree-2"></div>
          <div className="tree tree-3"></div>
          <div className="tree tree-4"></div>

          {/* Tent */}
          <div className="tent">
            <div className="tent-left"></div>
            <div className="tent-right"></div>
            <div className="tent-door"></div>
            <div className="tent-pole"></div>
            <div className="tent-flag"></div>
          </div>

          {/* Fireplace */}
          <div className="fireplace">
            <div className="log log-1"></div>
            <div className="log log-2"></div>
            <div className="fire fire-1"></div>
            <div className="fire fire-2"></div>
            <div className="fire fire-3"></div>
            {/* Added Smoke Animation elements */}
            <div className="smoke smoke-1"></div>
            <div className="smoke smoke-2"></div>
            <div className="smoke smoke-3"></div>
            <div className="fire-glow"></div>
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

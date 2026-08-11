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
    <section className="hero-section">
      <div className="hero-background">
        {/* Sun/Moon */}
        <div className={`hero-celestial ${timeState.id}`}>
           {timeState.id === 'night' || timeState.id === 'fajar' || timeState.id === 'evening' ? (
             <svg viewBox="0 0 100 100" width="100%" height="100%">
               <path d="M 50 20 A 30 30 0 1 0 80 50 A 25 25 0 1 1 50 20" fill="var(--light)" opacity="0.9" />
             </svg>
           ) : (
             <svg viewBox="0 0 100 100" width="100%" height="100%">
               <circle cx="50" cy="50" r="30" fill="var(--light)" opacity="0.9" />
             </svg>
           )}
        </div>
        
        {/* Low Poly Mountains */}
        <div className="hero-mountains">
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
            {/* Background Mountains */}
            <path fill="var(--mountain-back)" d="M0,400 L200,200 L400,350 L700,100 L1000,400 L1200,250 L1440,500 L1440,600 L0,600 Z" />
            {/* Midground Mountains */}
            <path fill="var(--mountain-front)" d="M-100,600 L150,300 L350,450 L550,250 L850,550 L1100,350 L1350,550 L1500,600 Z" />
          </svg>
        </div>

        {/* Floating Clouds / Wind */}
        <div className="hero-wind-layer">
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
             <path className="wind-line" d="M -200,200 Q 100,180 300,200 T 800,200 T 1600,200" fill="none" stroke="var(--fog)" strokeWidth="4" />
             <path className="wind-line delay" d="M -200,300 Q 200,320 400,300 T 1000,300 T 1600,300" fill="none" stroke="var(--fog)" strokeWidth="3" />
          </svg>
        </div>

        {/* Foreground Trees (Bottom edge) */}
        <div className="hero-trees">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#0a1913" d="M50,100 L70,20 L90,100 Z M200,100 L230,10 L260,100 Z M1100,100 L1140,5 L1180,100 Z M1300,100 L1320,30 L1340,100 Z" />
          </svg>
        </div>
      </div>

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

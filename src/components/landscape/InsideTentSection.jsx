import React, { useState, useEffect } from 'react';
import CardProfile from '../cards/CardProfile';
import CardJob from '../cards/CardJob';
import CardNotebook from '../cards/CardNotebook';
import CardElsewhere from '../cards/CardElsewhere';
import tentInsideImg from '../../assets/tent-inside.jpg';
import { profile, workCards, academicCard, socials } from '../../data/content';
import './InsideTentSection.css';

const InsideTentSection = ({ onExitTent }) => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTimeStr(formatter.format(new Date()).replace(/\./g, ':') + ' WIB');
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="inside-tent-section" id="inside-tent">
      {/* Location and Time Display */}
      <div className="location-time-display">
        <span className="location-text">INDONESIA</span>
        <span className="time-text">{timeStr}</span>
      </div>

      {/* Back Button */}
      <button className="exit-tent-btn" onClick={onExitTent}>
        &larr; Keluar Tenda
      </button>

      {/* Fixed Background Layer with SVG scaling for perfect overlay alignment */}
      <div className="fixed-background-wrapper">
        <svg viewBox="0 0 1024 571" preserveAspectRatio="xMidYMid slice" className="tent-bg-svg">
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 230, 150, 0.9)" />
              <stop offset="40%" stopColor="rgba(255, 170, 50, 0.5)" />
              <stop offset="100%" stopColor="rgba(255, 120, 0, 0)" />
            </radialGradient>
          </defs>

          {/* Base Background Image */}
          <image href={tentInsideImg} xlinkHref={tentInsideImg} x="0" y="0" width="1024" height="571" />
          
          {/* Lantern Glow (breathing) */}
          <circle cx="145" cy="330" r="120" fill="url(#glowGradient)" className="lantern-glow" />
        </svg>
      </div>

      {/* Scrolling Content Layer */}
      <div className="scrolling-content">
        <div className="portfolio-cards-container">
          
          <div className="card-row card-row--identity">
            <CardJob profile={profile} delay={0} />
            <CardProfile profile={profile} delay={0.15} />
            <CardElsewhere socials={socials} delay={0.3} />
          </div>

          <div className="card-row card-row--work">
            <CardNotebook data={academicCard} delay={0.4} rotate={1.5} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsideTentSection;

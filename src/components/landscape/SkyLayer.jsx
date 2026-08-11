import { motion } from 'framer-motion';

const SkyLayer = ({ skyY, timeState }) => {
  return (
    <motion.div 
      className="sky-layer"
      style={{ y: skyY }}
    >
      {/* Sun or Moon depending on timeState */}
      <div className={`celestial-body ${timeState.id}`}>
        {/* SVG Sun/Moon */}
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {timeState.id === 'night' || timeState.id === 'evening' ? (
             <path d="M 50 10 A 40 40 0 1 0 90 50 A 30 30 0 1 1 50 10" fill="var(--light)" opacity="0.9" />
          ) : (
             <circle cx="50" cy="50" r="40" fill="var(--light)" opacity="0.9" />
          )}
        </svg>
      </div>
      
      {/* Distant Mountains (parallax extremely slow) */}
      <div className="distant-mountains">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="mountain-svg">
          {/* Back mountains */}
          <path fill="var(--mountain-back)" d="M0,250 C150,150 300,300 450,200 C600,100 750,250 900,150 C1050,50 1200,200 1440,100 L1440,400 L0,400 Z" />
          {/* Front mountains */}
          <path fill="var(--mountain-front)" d="M0,350 C200,200 400,380 600,250 C800,120 1000,320 1200,220 C1300,170 1400,250 1440,200 L1440,400 L0,400 Z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default SkyLayer;

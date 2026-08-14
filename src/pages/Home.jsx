import { useState, useEffect } from 'react';
import { useTimeEngine } from '../hooks/useTimeEngine';
import { useAudioEngine } from '../hooks/useAudioEngine';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from '../components/landscape/HeroSection';
import InsideTentSection from '../components/landscape/InsideTentSection';
import './Home.css';

const Home = () => {
  const timeState = useTimeEngine();
  const [isInsideTent, setIsInsideTent] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  const { isRadioPlaying, toggleRadio } = useAudioEngine(timeState, isInsideTent, hasInteracted);

  // Temporary function to force change the URL for testing
  const setDebugTime = (stateName) => {
    window.location.href = `/?debugState=${stateName}`;
  };

  return (
    <div className="home-wrapper">
      <AnimatePresence mode="wait">
        {!isInsideTent ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100vh' }}
          >
            <HeroSection 
              timeState={timeState} 
              onEnterTent={() => setIsInsideTent(true)} 
            />
          </motion.div>
        ) : (
          <motion.div
            key="tent"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', minHeight: '100vh' }}
          >
            <InsideTentSection 
              onExitTent={() => setIsInsideTent(false)} 
              isRadioPlaying={isRadioPlaying}
              toggleRadio={toggleRadio}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* TEMPORARY TIME DEMO CONTROLS (Hidden)
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.8)',
        padding: '10px',
        borderRadius: '8px',
        display: 'flex',
        gap: '10px',
        zIndex: 9999
      }}>
        <button style={btnStyle} onClick={() => setDebugTime('fajar')}>Fajar</button>
        <button style={btnStyle} onClick={() => setDebugTime('sunrise')}>Pagi</button>
        <button style={btnStyle} onClick={() => setDebugTime('daylight')}>Siang</button>
        <button style={btnStyle} onClick={() => setDebugTime('sunset')}>Sore</button>
        <button style={btnStyle} onClick={() => setDebugTime('evening')}>Senja</button>
        <button style={btnStyle} onClick={() => setDebugTime('night')}>Malam</button>
        <button style={{...btnStyle, background: '#ff4444'}} onClick={() => window.location.href = '/'}>Reset</button>
      </div>
      */}
    </div>
  );
};

const btnStyle = {
  padding: '8px 12px',
  background: '#444',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '12px'
};

export default Home;

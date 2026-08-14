import React from 'react';
import { motion } from 'framer-motion';
import './Radio.css';

const Radio = ({ isPlaying, onToggle }) => {
  return (
    <motion.div 
      className="vintage-radio"
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      <div className="radio-antenna"></div>
      <div className="radio-handle"></div>
      <div className="radio-body">
        <div className="radio-speaker">
          {/* Animated sound waves */}
          <div className={`sound-waves ${isPlaying ? 'playing' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="radio-controls">
          <div className="radio-dial"></div>
          <div className="radio-dial small"></div>
          <div className={`radio-indicator ${isPlaying ? 'on' : 'off'}`}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Radio;

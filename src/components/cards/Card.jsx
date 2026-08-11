import { motion } from 'framer-motion';
import Stamp from './Stamp';
import './Card.css';

const Card = ({ card, index }) => {
  // Slight natural rotation
  const rotation = index % 2 === 0 ? -1.5 : 2;

  return (
    <motion.div 
      className="card-container"
      initial={{ rotate: rotation, y: 20, opacity: 0 }}
      whileInView={{ rotate: rotation, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* SVG filter for paper texture */}
      <svg width="0" height="0">
        <filter id="paper-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" result="noise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" in="noise" result="coloredNoise" />
          <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply" />
        </filter>
      </svg>

      <div className="card-paper">
        <div className="card-header">
          <h3 className="card-title">{card.title}</h3>
          <span className="card-type">{card.type}</span>
        </div>
        
        <div className="card-body">
          <p>{card.content}</p>
        </div>

        <div className="card-footer">
          {card.stamps && card.stamps.map((stamp, i) => (
            <Stamp key={i} stamp={stamp} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Stamp.css';

const Stamp = ({ stamp }) => {
  const shouldReduceMotion = useReducedMotion();

  const isExternal = stamp.external;

  const content = (
    <motion.div 
      className={`stamp-container stamp-${stamp.type}`}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 2, y: -2 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
    >
      <div className="stamp-inner">
        <span className="stamp-icon">
          {/* Simple SVG icon based on type */}
          {stamp.type === 'github' && <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>}
          {stamp.type === 'route' && <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
          {stamp.type === 'document' && <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
          {stamp.type === 'figma' && <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>}
        </span>
        <span className="stamp-label">{stamp.label}</span>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={stamp.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return (
    <Link to={stamp.href} style={{ textDecoration: 'none' }}>
      {content}
    </Link>
  );
};

export default Stamp;

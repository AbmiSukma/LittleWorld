import { motion } from 'framer-motion';
import './CardJob.css';

/**
 * Job Card – tall white card with vertical name, "book a call" tab on left,
 * email tab on bottom-left. Matches left card in reference image row 1.
 */
const CardJob = ({ profile, delay = 0 }) => {
  return (
    <motion.div
      className="card-job"
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, rotate: -1.5, transition: { duration: 0.2 } }}
    >
      <div className="card-job-inner">
        <div className="job-buttons">
          <a href="https://cal.com/abmi-sukma-khk2y6/30min" target="_blank" rel="noreferrer" className="job-btn">
            book a call
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noreferrer" className="job-btn">
            {profile.email}
          </a>
        </div>

        <div className="job-name-container">
          <span className="job-name">{profile.name}</span>
          <span className="job-title-tag">{profile.title}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardJob;

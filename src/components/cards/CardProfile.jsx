import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CardProfile.css';

/**
 * Profile Card – center card in row 1.
 * Features a randomized portrait image, top badge, overlaid bio, and black footer.
 */
// Dynamically import all images in src/assets/pfp
// This runs at build time / HMR time, so any new file dropped into that folder is automatically picked up!
const pfpModules = import.meta.glob('../../assets/pfp/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const pfpImages = Object.values(pfpModules);

const CardProfile = ({ profile, delay = 0 }) => {
  // If no images found, fallback to a placeholder or empty string
  const defaultImage = pfpImages.length > 0 ? pfpImages[0] : '';
  const [currentImage, setCurrentImage] = useState(defaultImage);

  useEffect(() => {
    if (pfpImages.length > 0) {
      if (pfpImages.length === 1) {
        setCurrentImage(pfpImages[0]);
        return;
      }

      // Prevent showing the same image twice in a row on refresh
      const lastImage = sessionStorage.getItem('last_pfp');
      let randomImage;
      do {
        randomImage = pfpImages[Math.floor(Math.random() * pfpImages.length)];
      } while (randomImage === lastImage);

      sessionStorage.setItem('last_pfp', randomImage);
      setCurrentImage(randomImage);
    }
  }, []);

  return (
    <motion.div
      className="card-profile"
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className="card-profile-inner">
        <div className="profile-image-container">
          <img src={currentImage} alt="Profile" className="profile-img" />
          
          {/* Art credit tag */}
          <div className="profile-art-credit">LOOK ITS ME</div>
          
          {/* Bio text overlaid on image */}
          <p className="profile-bio">{profile.bio}</p>
        </div>

        {/* Footer bar */}
        <div className="profile-footer-bar">
          <span className="profile-footer-name">Abmi</span>
          <span className="profile-footer-title">INFORMATIC ENGENERING '22</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProfile;

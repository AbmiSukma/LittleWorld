import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="footer-content">
        <h2 className="footer-logo">AMEY</h2>
        <div className="footer-text">
          <p>Made with patience.</p>
          <p>Built with curiosity.</p>
        </div>
        <div className="footer-nav">
          <Link to="/">HOME</Link>
          <Link to="/resume">RESUME</Link>
          <Link to="/work">WORK</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

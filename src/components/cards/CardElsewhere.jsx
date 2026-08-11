import { motion } from 'framer-motion';
import './CardElsewhere.css';

/**
 * Elsewhere Card – 3×3 grid with circular passport-style stamps.
 * Adopted perfectly from the user's reference HTML/CSS.
 */
const CardElsewhere = ({ socials, delay = 0 }) => {
  return (
    <motion.div
      className="card-elsewhere"
      initial={{ opacity: 0, y: 30, rotate: 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, rotate: 1, transition: { duration: 0.2 } }}
    >
      <section aria-hidden="false" className="dom-card__face dom-card__face--front dom-card__face--index">
        <div data-card-zone="surface" className="dom-card__safe-area dom-card__safe-area--index">
          


          <div data-card-zone="content" className="dom-card__index-body">
            <div aria-hidden="true" className="dom-card__index-holes"></div>
            <div aria-hidden="true" className="dom-card__index-lines"></div>
            <div className="dom-card__index-content">
              <nav aria-label="Social links" className="social-loyalty-card">
                <div className="social-loyalty-card__paper">
                  <div aria-label="Social link stamp grid" className="social-loyalty-card__grid">
                    
                    <span aria-hidden="true" className="social-loyalty-card__cell social-loyalty-card__cell--empty"></span>
                    <span aria-hidden="true" className="social-loyalty-card__cell social-loyalty-card__cell--empty"></span>
                    
                    {/* LinkedIn Stamp */}
                    <a href="https://www.linkedin.com/in/abmi-sukma-1948ab250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn /arieare" data-collected="true" className="social-loyalty-card__cell social-loyalty-card__stamp social-loyalty-card__stamp--linkedin">
                      <span aria-hidden="true" className="social-loyalty-card__stamp-mark">
                        <span className="social-loyalty-card__stamp-ring">
                          <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true" className="social-loyalty-card__stamp-ring-text social-loyalty-card__stamp-ring-text--top">
                            <defs><path id="social-loyalty-stamp-linkedin-2-top" d="M 17 50 A 33 33 0 0 1 83 50"></path></defs>
                            <text><textPath href="#social-loyalty-stamp-linkedin-2-top" startOffset="50%">LinkedIn</textPath></text>
                          </svg>
                          <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true" className="social-loyalty-card__stamp-ring-text social-loyalty-card__stamp-ring-text--bottom">
                            <defs><path id="social-loyalty-stamp-linkedin-2-bottom" d="M 83 50 A 33 33 0 0 1 17 50"></path></defs>
                            <text><textPath href="#social-loyalty-stamp-linkedin-2-bottom" startOffset="50%">/arieare</textPath></text>
                          </svg>
                          <span className="social-loyalty-card__stamp-center">
                            <span className="social-loyalty-card__icon">
                              <svg viewBox="0 0 24 24" focusable="false"><path d="M5.3 8.8h3.2v10.3H5.3V8.8Zm1.6-5.1a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm3.6 5.1h3.1v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.6h-3.2v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1h-3.2V8.8Z"></path></svg>
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                    
                    <span aria-hidden="true" className="social-loyalty-card__cell social-loyalty-card__cell--empty"></span>
                    <span aria-hidden="true" className="social-loyalty-card__cell social-loyalty-card__cell--empty"></span>
                    
                    {/* Instagram Stamp */}
                    <a href="https://www.instagram.com/abmisukma/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @arieare" data-collected="true" className="social-loyalty-card__cell social-loyalty-card__stamp social-loyalty-card__stamp--instagram">
                      <span aria-hidden="true" className="social-loyalty-card__stamp-mark">
                        <span className="social-loyalty-card__stamp-ring">
                          <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true" className="social-loyalty-card__stamp-ring-text social-loyalty-card__stamp-ring-text--top">
                            <defs><path id="social-loyalty-stamp-instagram-5-top" d="M 17 50 A 33 33 0 0 1 83 50"></path></defs>
                            <text><textPath href="#social-loyalty-stamp-instagram-5-top" startOffset="50%">Instagram</textPath></text>
                          </svg>
                          <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true" className="social-loyalty-card__stamp-ring-text social-loyalty-card__stamp-ring-text--bottom">
                            <defs><path id="social-loyalty-stamp-instagram-5-bottom" d="M 83 50 A 33 33 0 0 1 17 50"></path></defs>
                            <text><textPath href="#social-loyalty-stamp-instagram-5-bottom" startOffset="50%">@arieare</textPath></text>
                          </svg>
                          <span className="social-loyalty-card__stamp-center">
                            <span className="social-loyalty-card__icon">
                              <svg viewBox="0 0 24 24" focusable="false"><path d="M8.2 3.6h7.6a4.6 4.6 0 0 1 4.6 4.6v7.6a4.6 4.6 0 0 1-4.6 4.6H8.2a4.6 4.6 0 0 1-4.6-4.6V8.2a4.6 4.6 0 0 1 4.6-4.6Zm0 2.2a2.4 2.4 0 0 0-2.4 2.4v7.6a2.4 2.4 0 0 0 2.4 2.4h7.6a2.4 2.4 0 0 0 2.4-2.4V8.2a2.4 2.4 0 0 0-2.4-2.4H8.2Zm3.8 3a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm0 2.1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm4-2.7a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"></path></svg>
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                    
                    {/* GitHub Stamp */}
                    <a href="https://github.com/abmisukma" target="_blank" rel="noopener noreferrer" aria-label="GitHub /arieare" data-collected="true" className="social-loyalty-card__cell social-loyalty-card__stamp social-loyalty-card__stamp--github">
                      <span aria-hidden="true" className="social-loyalty-card__stamp-mark">
                        <span className="social-loyalty-card__stamp-ring">
                          <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true" className="social-loyalty-card__stamp-ring-text social-loyalty-card__stamp-ring-text--top">
                            <defs><path id="social-loyalty-stamp-github-6-top" d="M 17 50 A 33 33 0 0 1 83 50"></path></defs>
                            <text><textPath href="#social-loyalty-stamp-github-6-top" startOffset="50%">GitHub</textPath></text>
                          </svg>
                          <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true" className="social-loyalty-card__stamp-ring-text social-loyalty-card__stamp-ring-text--bottom">
                            <defs><path id="social-loyalty-stamp-github-6-bottom" d="M 83 50 A 33 33 0 0 1 17 50"></path></defs>
                            <text><textPath href="#social-loyalty-stamp-github-6-bottom" startOffset="50%">/arieare</textPath></text>
                          </svg>
                          <span className="social-loyalty-card__stamp-center">
                            <span className="social-loyalty-card__icon">
                              <svg viewBox="0 0 24 24" focusable="false"><path d="M12 3.4a8.7 8.7 0 0 0-2.8 17c.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1-2.9-1-.4-1-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.8 1.3 2 1 2.4.8.1-.6.3-1 .5-1.2-1.9-.2-3.8-1-3.8-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4.9a8.2 8.2 0 0 1 4.3 0c1.6-1.1 2.4-.9 2.4-.9.5 1.3.2 2.2.1 2.4.5.6.9 1.4.9 2.4 0 3.3-2 4.1-3.9 4.3.3.3.6.8.6 1.6V20c0 .2.1.5.6.4A8.7 8.7 0 0 0 12 3.4Z"></path></svg>
                            </span>
                          </span>
                        </span>
                      </span>
                    </a>
                    <span aria-hidden="true" className="social-loyalty-card__cell social-loyalty-card__cell--empty"></span>
                  </div>
                  
                  <div className="social-loyalty-card__copy">
                    <h2 className="social-loyalty-card__title">else —where</h2>
                    <p className="social-loyalty-card__fine-print">Visit link to collect stamps.</p>
                  </div>
                  
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CardElsewhere;

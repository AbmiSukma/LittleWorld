import { motion } from 'framer-motion';
import UINSuskaLogo from '../icons/UINSuskaLogo';
import './CardNotebook.css';

const CardNotebook = ({ data, delay = 0, rotate = 0 }) => {
  const isAcademic = data.id === 'informatics';
  const bodyText = data.bullets.join(' ');

  return (
    <motion.article
      className={`dom-card card-id-badge`}
      style={{ '--card-rotate': `${rotate}deg` }}
      initial={{ opacity: 0, y: 30, rotate: rotate - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, rotate: rotate - 1.5, transition: { duration: 0.2 } }}
    >
      <div className="dom-card__frame">
        <div className="dom-card__face-stack">
          <section className="dom-card__face dom-card__face--front">
            {/* Lanyard Hole Cutout (Simulated flat shape) */}
            <div className="id-badge-hole" />
            
            {/* Header: Logo + Brand */}
            <header className="id-badge-header">
              <div className="id-badge-logo">
                {isAcademic ? <UINSuskaLogo /> : <span className="card-notebook__emoji-icon">{data.icon}</span>}
              </div>
              <div className="id-badge-brand">
                <span className="id-badge-company">{data.company || "UIN SUSKA RIAU"}</span>
                <span className="id-badge-label">ID BADGE</span>
              </div>
            </header>

            {/* Main Body */}
            <div className="id-badge-body">
              <h2 className="id-badge-title">{data.title}</h2>
              <p className="id-badge-desc">{bodyText}</p>
            </div>

            {/* Metadata Grid */}
            <div className="id-badge-meta">
              <div className="meta-box">
                <span className="meta-label">PERIOD</span>
                <span className="meta-value">{data.period}</span>
              </div>
              <div className="meta-box">
                <span className="meta-label">STATUS</span>
                <span className="meta-value meta-active">● ACTIVE</span>
              </div>
            </div>

            {/* Barcode Footer */}
            <div className="id-badge-barcode">
              <div className="barcode-bars" />
              <div className="barcode-number">ID: {data.id.toUpperCase()}-01</div>
            </div>
          </section>
        </div>
      </div>
    </motion.article>
  );
};

export default CardNotebook;

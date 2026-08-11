import CardJob from '../cards/CardJob';
import CardProfile from '../cards/CardProfile';
import CardElsewhere from '../cards/CardElsewhere';
import CardNotebook from '../cards/CardNotebook';
import { profile, socials, academicCard } from '../../data/content';
import './UndergroundSection.css';

/**
 * UndergroundSection
 *
 * The ant-colony portfolio section immediately below the hero.
 * Visual structure:
 *  - Jagged dirt surface edge (SVG) 
 *  - Solid dirt body
 *  - Row 1 (identity): CardJob  |  CardProfile  |  CardElsewhere
 *  - Row 2 (work/academic): CardNotebook × 2 (work)  +  CardNotebook (academic)
 */
const UndergroundSection = () => {
  return (
    <section className="underground-section">
      {/* SVG jagged soil edge connecting hero trees to underground body */}
      <div className="underground-edge">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            fill="var(--terrain-base)"
            d="M0,0 L30,25 L80,8 L140,40 L200,15 L270,45 L350,10 L430,50 L500,18 L580,42 L650,5 L730,38 L800,12 L880,48 L950,20 L1030,55 L1110,22 L1200,48 L1300,8 L1380,35 L1440,18 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Main underground body */}
      <div className="underground-body">

        {/* Row 1: Identity Cards */}
        <div className="card-row card-row--identity">
          <CardJob profile={profile} delay={0} />
          <CardProfile profile={profile} delay={0.15} />
          <CardElsewhere socials={socials} delay={0.3} />
        </div>

        {/* Row 2: Academic Notebook Card */}
        <div className="card-row card-row--work">
          <CardNotebook data={academicCard} delay={0.3} rotate={2} />
        </div>

      </div>
    </section>
  );
};

export default UndergroundSection;

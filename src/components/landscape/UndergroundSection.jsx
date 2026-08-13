import CardJob from '../cards/CardJob';
import CardProfile from '../cards/CardProfile';
import CardElsewhere from '../cards/CardElsewhere';
import CardNotebook from '../cards/CardNotebook';
import { profile, socials, academicCard } from '../../data/content';
import './UndergroundSection.css';

const UndergroundSection = () => {
  return (
    <section className="underground-section">
      <div className="card-row card-row--identity">
        <CardJob profile={profile} delay={0} />
        <CardProfile profile={profile} delay={0.15} />
        <CardElsewhere socials={socials} delay={0.3} />
      </div>

      <div className="card-row card-row--work">
        <CardNotebook data={academicCard} delay={0.3} rotate={2} />
      </div>
    </section>
  );
};

export default UndergroundSection;

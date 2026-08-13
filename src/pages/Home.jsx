import { useTimeEngine } from '../hooks/useTimeEngine';
import HeroSection from '../components/landscape/HeroSection';
import UndergroundSection from '../components/landscape/UndergroundSection';
import './Home.css';

const Home = () => {
  const timeState = useTimeEngine();

  return (
    <div className="home-wrapper">
      <HeroSection timeState={timeState} />
      <div className="content-overlay">
        <UndergroundSection />
      </div>
    </div>
  );
};

export default Home;

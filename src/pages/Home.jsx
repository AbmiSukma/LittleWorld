import { useTimeEngine } from '../hooks/useTimeEngine';
import HeroSection from '../components/landscape/HeroSection';
import UndergroundSection from '../components/landscape/UndergroundSection';
import Waterfall from '../components/landscape/Waterfall';
import './Home.css';

const Home = () => {
  const timeState = useTimeEngine();

  return (
    <div className="home-wrapper">
      {/* 1. Hero (Pemandangan Waktu) */}
      <HeroSection timeState={timeState} />

      {/* 2. Underground Cards Section (Dalam Tanah) */}
      <UndergroundSection />

      {/* 3. Waterfall ending */}
      <Waterfall />
    </div>
  );
};

export default Home;

import './Waterfall.css';

const Waterfall = () => {
  return (
    <div className="waterfall-section">
      {/* The cliff edge at the top */}
      <svg className="cliff-edge" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="var(--terrain-base)" d="M0,0 L300,50 L400,20 L600,80 L700,50 L900,100 L1100,40 L1300,90 L1440,0 L1440,0 L0,0 Z" />
        {/* Left side rock */}
        <path fill="var(--mountain-front)" d="M0,0 L100,0 L150,50 L120,100 L50,150 L0,200 Z" opacity="0.8"/>
        {/* Right side rock */}
        <path fill="var(--mountain-front)" d="M1440,0 L1350,0 L1300,80 L1350,150 L1440,200 Z" opacity="0.8"/>
      </svg>
      
      {/* The underground void (cave) */}
      <div className="cave-void"></div>

      {/* The Waterfall Pillar */}
      <div className="waterfall-pillar">
        {/* Abstract white splashing shapes (looping) */}
        <div className="splash-layer">
          <svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
            <path className="splash-shape s1" fill="#ffffff" d="M150,-100 Q180,-50 160,0 T140,100 Q120,150 150,200 Z" />
            <path className="splash-shape s2 delay-1" fill="#ffffff" d="M250,-200 Q280,-150 240,-100 T220,0 Q200,50 250,100 Z" />
            <path className="splash-shape s3 delay-2" fill="#ffffff" d="M100,-300 Q120,-250 100,-200 T80,-100 Q90,-50 120,0 Z" />
            <path className="splash-shape s4 delay-3" fill="#ffffff" d="M200,-50 Q230,0 210,50 T190,150 Q170,200 200,250 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Waterfall;

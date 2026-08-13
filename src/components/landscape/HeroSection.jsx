import { useState, useEffect } from 'react';
import SleepingZ from './SleepingZ';
import './HeroSection.css';

const HeroSection = ({ timeState }) => {
  const [timeStr, setTimeStr] = useState('');

  // Update time for the top right clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Force WIB (Waktu Indonesia Barat) = UTC+7
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false };
      setTimeStr(now.toLocaleTimeString('en-US', options) + ' WIB');
    };
    
    updateClock();
    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero-section ${timeState.id}`}>
      
      {/* =========================================
          LAYER 1: BACKGROUND SKY & CELESTIAL
          ========================================= */}
      <div className="layer-background">
        {/* Sun/Moon Container */}
        <div className={`hero-celestial ${timeState.id}`}>
           <div className="celestial-body"></div>
        </div>
      </div>


      {/* =========================================
          LAYER 2: SVG LANDSCAPE & CAMPFIRE
          ========================================= */}
      <div className="layer-landscape">
        <svg className="landscape-svg" width="100%" height="100%" viewBox="0 0 1002 278" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mountains */}
          <path d="M304.5 119.5L342.5 88L360.5 104.5L373.5 112L443 52L461.5 68.5L539.5 0L618.5 68.5L635.5 52L707.5 114L736 90L793.125 136.5L818.5 123.5L1001.5 276H964.5H0L273.5 98L304.5 119.5Z" fill="var(--svg-m-back-left)"/>
          <path d="M632 79.5L635.5 51.5L707.5 113.5L730.908 140.193L736 133L905.5 195.5L1001.5 276H850H674L700.929 189.032L632 79.5Z" fill="var(--svg-m-mid-right)"/>
          <path d="M437 71.5L443 52L461.5 68L473 110.5L438 83.5L437 71.5Z" fill="var(--svg-m-mid-left)"/>
          <path d="M533.5 117.5L514 58L516.5 51.5L540 0L618.5 68V113.5L569.5 62.5L552.5 149L541.5 117.5H533.5Z" fill="var(--svg-m-mid-center)"/>
          
          {/* Snowcaps */}
          <path d="M328 120.5L342 87.5L304.5 118.5L268 154.5L328 120.5Z" fill="var(--svg-snow)"/>
          <path d="M279.5 118.5L273.5 98L173 163.5L268 133L279.5 118.5Z" fill="var(--svg-snow)"/>
          <path d="M443.5 52L374 112L387 118.5L417.5 102L439 83.5L437 72L443.5 52Z" fill="var(--svg-snow)"/>
          <path d="M473 112L461 68L539.5 0L583 37.5L571.5 35V41.5H558L546.5 54.5L533.5 41.5L530 46L515.5 51.5L514 58L499.5 68L473 112Z" fill="var(--svg-snow)"/>
          <path d="M635.5 51.5L618.5 68L632.5 88H634.5L643 98.5L631.5 79.5L635.5 51.5Z" fill="var(--svg-snow)"/>
          <path d="M610 196L736 90L737.5 107.5L732.5 117L736 133L691.5 196H610Z" fill="var(--svg-snow)"/>
          <path d="M616 102V96.9999C616 96.9999 613.5 95.9999 612 96.4999C610.5 96.9999 609.583 97.2053 608 97.4999C606.452 97.7879 606.5 97.9999 604 97.9999C601.5 97.9999 600 96.9999 600 96.9999V102C600 102 601.5 103.5 608 102C614.5 100.5 616 102 616 102Z" fill="var(--svg-snow)"/>
          
          {/* Hills / Ground */}
          <path d="M502 228H194L308.233 166.84C308.233 165.768 310.052 155.833 310.962 151L313.301 164.126L331.625 154.316L332.405 146L334.354 152.854L335.914 152.019C335.914 151.204 337.473 141 338.253 136L340.592 149.515L354.628 142L366.714 149.053C367.026 147.411 368.403 143 369.053 141L370.613 151.328L375.732 154.316C376.003 153.147 377.63 144.951 378.41 141L380.749 157.243L403.752 170.667L502 228Z" fill="var(--svg-hill-left)"/>
          <path d="M807 217H395L547.805 155.84C547.805 154.768 550.239 144.833 551.456 140L554.585 153.126L579.096 143.316L580.139 135L582.747 141.854L584.833 141.019C584.833 140.204 586.919 130 587.962 125L591.091 138.515L609.866 131L626.033 138.053C626.45 136.411 628.293 132 629.162 130L631.248 140.328L638.096 143.316C638.459 142.147 640.635 133.951 641.678 130L644.808 146.243L675.577 159.667L807 217Z" fill="var(--svg-hill-right)"/>
          <path d="M337.372 169.908L415 194.462L444.772 184.554L449.759 168.185L453.814 181.544L456.132 180.773L460.187 166.121L463.663 178.267L466.559 177.303L471.773 159.373L476.987 173.833L500.159 166.121L503.056 156.123L505.373 164.386L510.008 162.844L515.221 147.508L520.435 159.373L556.09 147.508C555.837 146.474 559.249 136.738 560.987 132L565.622 144.336L569.098 135.877L573.153 141.829L580.684 139.323L590.532 142.333L592.85 135.877L596.325 144.104L617.324 150.523L619.498 145.785L621.236 151.719L624.712 152.781L627.029 148.369V153.49L754.478 192.448L761.43 182.831V186.277L765.485 180.677L771.278 197.583L818.5 213.633L822 197.583L826.5 216.352L830 217.541C830 214.415 832.667 199.51 834 192.448L836.5 219.751L839 220.6C839.4 218.153 841.167 212.18 842 209.5L846 222.979L1002 276H0L205.868 178.092L210.503 179.862L215.716 167.754L219.192 183.18L221.839 184.191L224.985 175.938L229.62 187.162L248.737 194.462L285.813 184.191L290.448 167.754L295.662 181.462L337.372 169.908Z" fill="var(--svg-ground)"/>
          
          {/* Tent */}
          <path d="M594.5 121H600.5L614 155.5L613 158L621.5 173L621 176L631.5 196L621 195L614 176V173C613.5 172 610.333 164.5 608.5 159.5H600.5L602 190.5L599 192L568 187.5L574 175L573 173L582 157.5L581.5 155.5L594.5 121Z" fill="var(--svg-tent-main)"/>
          <path d="M574 175L573 173H601V175H574Z" fill="var(--svg-tent-shadow)"/>
          <path d="M620.5 176L614 175.5V173H621.5L620.5 176Z" fill="var(--svg-tent-shadow)"/>
          <path d="M613 158L582 157.5V155H614L613 158Z" fill="var(--svg-tent-shadow)"/>
          <path d="M621 195L599 192L602 190.5L600.5 159.5H608.5L614 173V175.5L621 195Z" fill="var(--svg-tent-inside)"/>
          <path d="M599 192L568 187.5L569 185.5L602 190.5L599 192Z" fill="var(--svg-tent-shadow)"/>
          <path d="M630.5 194L620 192.5L621 195L631.5 196L630.5 194Z" fill="var(--svg-tent-shadow)"/>
          <path d="M614 194L600.5 159.5H608.5L614 173V176L621 195L614 194Z" fill="var(--svg-tent-dark)"/>
          <path d="M606.349 136H589L588.159 138H607L606.349 136Z" fill="var(--svg-tent-shadow)"/>
          <path d="M600.5 121H594.5L592 112L594 110.5L597 116L596.826 90H600V116L602.5 110.5L604.5 111.5L600.5 121Z" fill="var(--svg-tent-pole-main)"/>
          <path d="M593 112.5L594.5 111.5L594 110.5L592 112L594.5 121H596L593 112.5Z" fill="var(--svg-tent-pole-dark)"/>
          <path d="M616 97.0002V92.5002C616 92.5002 615 91.0002 608 92.5002C601 94.0002 600 92.5002 600 92.5002V97.0002C604.5 100.5 611.592 95.821 616 97.0002Z" fill="var(--svg-flag)"/>
          <path d="M595.5 91.5L597 90V115.696L596.5 114.5L595.5 91.5Z" fill="var(--svg-tent-pole-dark)"/>
          
          {/* Trees */}
          <path d="M219 231H191L205.347 155L219 231Z" fill="var(--svg-tree)"/>
          <path d="M483 201H445L464.471 121L483 201Z" fill="var(--svg-tree)"/>
          <path d="M420.5 206.5H360L391 74L420.5 206.5Z" fill="var(--svg-tree)"/>
          <path d="M348 277H288L318.744 145L348 277Z" fill="var(--svg-tree)"/>
          <path d="M437 277H409L423.347 210L437 277Z" fill="var(--svg-tree)"/>
          <path d="M60 278H0L30.7438 146L60 278Z" fill="var(--svg-tree)"/>
          <path d="M149 278H121L135.347 176L149 278Z" fill="var(--svg-tree)"/>
          <path d="M1002 276H927L965.43 149L1002 276Z" fill="var(--svg-tree)"/>
          <path d="M825 277H750L788.43 163L825 277Z" fill="var(--svg-tree)"/>
          
          {/* Fog/Base layer */}
          <path d="M0 276.45H1002C1002 276.45 932.593 230.652 800.5 204.95C700.048 185.405 558.495 183.132 411.911 188.525C299.844 192.649 174 222.494 137 232C100 241.506 0 276.45 0 276.45Z" fill="var(--svg-fog)"/>

          {/* Logs */}
          <defs>
            <linearGradient id="logGradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="var(--svg-log-light)"/>
              <stop offset="1" stopColor="var(--svg-log-dark)"/>
            </linearGradient>
          </defs>
          <path d="M685.307 183.151L692.692 191.054L688.101 193.945L683.969 196.547L680.44 193.582L677.734 189.468L681.52 186.309L685.307 183.151Z" fill="url(#logGradient)"/>
          <path d="M671.57 188.964L675.109 185.846L678.563 185.277L681.599 188.323L678.471 190.866L674.85 193.491L671.57 188.964Z" fill="url(#logGradient)"/>
          <path d="M688.338 189.238L690.398 186.365L697.304 185.225L701.897 191.562L697.452 195.336L692.188 197.218L687.921 192.855L688.338 189.238Z" fill="url(#logGradient)"/>
          <path d="M701.002 186.136L703.138 186.797L707.324 190.667L702.905 194.943L701.643 196.165L696.226 190.978L698.614 188.557L701.002 186.136Z" fill="url(#logGradient)"/>
          <path d="M704.369 188.114L709.465 188.287L712.501 191.333L710.767 196.18L705.671 196.007L704.115 192.717L704.369 188.114Z" fill="url(#logGradient)"/>
          
          {/* Campfire overlay exactly scaled inside SVG viewBox */}
          <foreignObject x="670" y="140" width="60" height="60">
            <div className="campfire-container">
              <div className="fire-glow"></div>
              <div className="fire fire-1"></div>
              <div className="fire fire-2"></div>
              <div className="fire fire-3"></div>
              <div className="smoke smoke-1"></div>
              <div className="smoke smoke-2"></div>
              <div className="smoke smoke-3"></div>
            </div>
          </foreignObject>
        </svg>

        {/* Wind lines */}
        <div className="hero-wind-layer">
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
             <path className="wind-line" d="M -200,200 Q 100,180 300,200 T 800,200 T 1600,200" fill="none" stroke="var(--fog)" strokeWidth="4" />
             <path className="wind-line delay" d="M -200,300 Q 200,320 400,300 T 1000,300 T 1600,300" fill="none" stroke="var(--fog)" strokeWidth="3" />
          </svg>
        </div>
      </div>


      {/* =========================================
          LAYER 3: FOREGROUND UI & TEXT
          ========================================= */}
      <div className="layer-ui">
        {/* Top Right Info */}
        <div className="hero-location-time">
          <div>INDONESIA</div>
          <div>{timeStr}</div>
        </div>
        
        {/* Center Main Text */}
        <div className="hero-title-container">
          <h1 className="hero-title">
            AMEY
            {timeState.id === 'night' && <SleepingZ />}
          </h1>
          <h2 className="hero-subtitle">UI/UX DESIGNER</h2>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;

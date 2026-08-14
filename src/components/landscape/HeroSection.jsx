import { useState, useEffect } from 'react';
import SleepingZ from './SleepingZ';
import Campfire from './Campfire';
import TimeSwitcher from './TimeSwitcher';
import './HeroSection.css';

const HeroSection = ({ timeState, onEnterTent }) => {
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
        <svg className="landscape-svg" width="100%" height="100%" viewBox="0 0 1002 421" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mountains */}
          <path d="M304.5 262.5L342.5 231L360.5 247.5L373.5 255L443 195L461.5 211.5L539.5 143L618.5 211.5L635.5 195L707.5 257L736 233L793.125 279.5L818.5 266.5L1001.5 419H964.5H0L273.5 241L304.5 262.5Z" fill="var(--svg-m-back-left)"/>
          <path d="M632 222.5L635.5 194.5L707.5 256.5L730.908 283.193L736 276L905.5 338.5L1001.5 419H850H674L700.929 332.032L632 222.5Z" fill="var(--svg-m-mid-right)"/>
          <path d="M437 214.5L443 195L461.5 211L473 253.5L438 226.5L437 214.5Z" fill="var(--svg-m-mid-left)"/>
          <path d="M533.5 260.5L514 201L516.5 194.5L540 143L618.5 211V256.5L569.5 205.5L552.5 292L541.5 260.5H533.5Z" fill="var(--svg-m-mid-center)"/>
          
          {/* Snowcaps */}
          <path d="M328 263.5L342 230.5L304.5 261.5L268 297.5L328 263.5Z" fill="var(--svg-snow)"/>
          <path d="M279.5 261.5L273.5 241L173 306.5L268 276L279.5 261.5Z" fill="var(--svg-snow)"/>
          <path d="M443.5 195L374 255L387 261.5L417.5 245L439 226.5L437 215L443.5 195Z" fill="var(--svg-snow)"/>
          <path d="M473 255L461 211L539.5 143L583 180.5L571.5 178V184.5H558L546.5 197.5L533.5 184.5L530 189L515.5 194.5L514 201L499.5 211L473 255Z" fill="var(--svg-snow)"/>
          <path d="M635.5 194.5L618.5 211L632.5 231H634.5L643 241.5L631.5 222.5L635.5 194.5Z" fill="var(--svg-snow)"/>
          <path d="M610 339L736 233L737.5 250.5L732.5 260L736 276L691.5 339H610Z" fill="var(--svg-snow)"/>
          
          {/* Hills / Ground */}
          <path d="M502 371H194L308.233 309.84C308.233 308.768 310.052 298.833 310.962 294L313.301 307.126L331.625 297.316L332.405 289L334.354 295.854L335.914 295.019C335.914 294.204 337.473 284 338.253 279L340.592 292.515L354.628 285L366.714 292.053C367.026 290.411 368.403 286 369.053 284L370.613 294.328L375.732 297.316C376.003 296.147 377.63 287.951 378.41 284L380.749 300.243L403.752 313.667L502 371Z" fill="var(--svg-hill-left)"/>
          <path d="M807 360H395L547.805 298.84C547.805 297.768 550.239 287.833 551.456 283L554.585 296.126L579.096 286.316L580.139 278L582.747 284.854L584.833 284.019C584.833 283.204 586.919 273 587.962 268L591.091 281.515L609.866 274L626.033 281.053C626.45 279.411 628.293 275 629.162 273L631.248 283.328L638.096 286.316C638.459 285.147 640.635 276.951 641.678 273L644.808 289.243L675.577 302.667L807 360Z" fill="var(--svg-hill-right)"/>
          <path d="M337.372 312.908L415 337.462L444.772 327.554L449.759 311.185L453.814 324.544L456.132 323.773L460.187 309.121L463.663 321.267L466.559 320.303L471.773 302.373L476.987 316.833L500.159 309.121L503.056 299.123L505.373 307.386L510.008 305.844L515.221 290.508L520.435 302.373L556.09 290.508C555.837 289.474 559.249 279.738 560.987 275L565.622 287.336L569.098 278.877L573.153 284.829L580.684 282.323L590.532 285.333L592.85 278.877L596.325 287.104L617.324 293.523L619.498 288.785L621.236 294.719L624.712 295.781L627.029 291.369V296.49L754.478 335.448L761.43 325.831V329.277L765.485 323.677L771.278 340.583L818.5 356.633L822 340.583L826.5 359.352L830 360.541C830 357.415 832.667 342.51 834 335.448L836.5 362.751L839 363.6C839.4 361.153 841.167 355.18 842 352.5L846 365.979L1002 419H0L205.868 321.092L210.503 322.862L215.716 310.754L219.192 326.18L221.839 327.191L224.985 318.938L229.62 330.162L248.737 337.462L285.813 327.191L290.448 310.754L295.662 324.462L337.372 312.908Z" fill="var(--svg-ground)"/>
          
          {/* Tent */}
          <g className="tent-group" onClick={onEnterTent}>
            {/* The Flag */}
            <path d="M616 240V235.5C616 235.5 615 234 608 235.5C601 237 600 235.5 600 235.5V240C604.5 243.5 611.592 238.821 616 240Z" fill="var(--svg-flag)"/>
            <path d="M616 245V240C616 240 613.5 239 612 239.5C610.5 240 609.583 240.205 608 240.5C606.452 240.788 606.5 241 604 241C601.5 241 600 240 600 240V245C600 245 601.5 246.5 608 245C614.5 243.5 616 245 616 245Z" fill="var(--svg-snow)"/>
            
            {/* The Tent */}
            <path d="M594.5 264H600.5L614 298.5L613 301L621.5 316L621 319L631.5 339L621 338L614 319V316C613.5 315 610.333 307.5 608.5 302.5H600.5L602 333.5L599 335L568 330.5L574 318L573 316L582 300.5L581.5 298.5L594.5 264Z" fill="var(--svg-tent-main)"/>
            <path d="M574 318L573 316H601V318H574Z" fill="var(--svg-tent-shadow)"/>
            <path d="M620.5 319L614 318.5V316H621.5L620.5 319Z" fill="var(--svg-tent-shadow)"/>
            <path d="M613 301L582 300.5V298H614L613 301Z" fill="var(--svg-tent-shadow)"/>
            <path className="tent-inside" d="M621 338L599 335L602 333.5L600.5 302.5H608.5L614 316V318.5L621 338Z" fill="var(--svg-tent-inside)"/>
            <path d="M599 335L568 330.5L569 328.5L602 333.5L599 335Z" fill="var(--svg-tent-shadow)"/>
            <path d="M630.5 337L620 335.5L621 338L631.5 339L630.5 337Z" fill="var(--svg-tent-shadow)"/>
            <path d="M614 337L600.5 302.5H608.5L614 316V319L621 338L614 337Z" fill="var(--svg-tent-dark)"/>
            <path d="M606.349 279H589L588.159 281H607L606.349 279Z" fill="var(--svg-tent-shadow)"/>
            <path d="M600.5 264H594.5L592 255L594 253.5L597 259L596.826 233H600V259L602.5 253.5L604.5 254.5L600.5 264Z" fill="var(--svg-tent-pole-main)"/>
            <path d="M593 255.5L594.5 254.5L594 253.5L592 255L594.5 264H596L593 255.5Z" fill="var(--svg-tent-pole-dark)"/>
            <path d="M595.5 234.5L597 233V258.696L596.5 257.5L595.5 234.5Z" fill="var(--svg-tent-pole-dark)"/>
          </g>

          {/* Background Trees */}
          <path d="M219 374H191L205.347 298L219 374Z" fill="var(--svg-tree)"/>
          <path d="M483 344H445L464.471 264L483 344Z" fill="var(--svg-tree)"/>
          <path d="M420.5 349.5H360L391 217L420.5 349.5Z" fill="var(--svg-tree)"/>
          
          {/* Foreground Snow Hill */}
          <path d="M0 419.45H1002C1002 419.45 932.593 373.652 800.5 347.95C700.048 328.405 558.495 326.132 411.911 331.525C299.844 335.649 174 365.494 137 375C100 384.506 0 419.45 0 419.45Z" fill="var(--svg-snow)"/>

          {/* Foreground Trees */}
          <path d="M348 420H288L318.744 288L348 420Z" fill="var(--svg-tree)"/>
          <path d="M437 420H409L423.347 353L437 420Z" fill="var(--svg-tree)"/>
          <path d="M60 421H0L30.7438 289L60 421Z" fill="var(--svg-tree)"/>
          <path d="M149 421H121L135.347 319L149 421Z" fill="var(--svg-tree)"/>
          <path d="M1002 419H927L965.43 292L1002 419Z" fill="var(--svg-tree)"/>
          <path d="M825 420H750L788.43 306L825 420Z" fill="var(--svg-tree)"/>

          {/* Logs */}
          <defs>
            <linearGradient id="logGradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="var(--svg-log-light)"/>
              <stop offset="1" stopColor="var(--svg-log-dark)"/>
            </linearGradient>
          </defs>
          <path d="M685.307 326.151L692.692 334.054L688.101 336.945L683.969 339.547L680.44 336.582L677.734 332.468L681.52 329.309L685.307 326.151Z" fill="url(#logGradient)"/>
          <path d="M671.57 331.964L675.109 328.846L678.563 328.277L681.599 331.323L678.471 333.866L674.85 336.491L671.57 331.964Z" fill="url(#logGradient)"/>
          <path d="M688.338 332.238L690.398 329.365L697.304 328.225L701.897 334.562L697.452 338.336L692.188 340.218L687.921 335.855L688.338 332.238Z" fill="url(#logGradient)"/>
          <path d="M701.002 329.136L703.138 329.797L707.324 333.667L702.905 337.943L701.643 339.165L696.226 333.978L698.614 331.557L701.002 329.136Z" fill="url(#logGradient)"/>
          <path d="M704.369 331.114L709.465 331.287L712.501 334.333L710.767 339.18L705.671 339.007L704.115 335.717L704.369 331.114Z" fill="url(#logGradient)"/>
          
          {/* Campfire overlay exactly scaled inside SVG viewBox */}
          <foreignObject x="641" y="233" width="100" height="100">
            <div className="campfire-wrapper" style={{ display: timeState.id === 'daylight' ? 'none' : 'block', width: '100%', height: '100%' }}>
              <Campfire />
            </div>
          </foreignObject>

          {/* Sleeping ZZZZ overlay at top right of the tent */}
          {timeState.id === 'night' && (
            <foreignObject x="615" y="120" width="120" height="130" style={{ pointerEvents: 'none' }}>
              <SleepingZ />
            </foreignObject>
          )}

          {/* Tent Speech Bubble (Always visible, positioned to the right) */}
          <foreignObject className="tent-bubble-container" x="630" y="240" width="160" height="100" style={{ pointerEvents: 'none', overflow: 'visible' }}>
            <div className="tent-speech-bubble">
              I'm here!!<br />come inside
            </div>
          </foreignObject>
        </svg>

        {/* Natural Wind Sweeps */}
        <div className="hero-wind-layer">
          <svg viewBox="0 0 1000 400" preserveAspectRatio="none">
             <path className="wind-swirl swirl-1" d="M -100,100 C 200,80 400,150 600,120" />
             <path className="wind-swirl swirl-2" d="M 300,250 C 500,220 700,280 1100,240" />
             <path className="wind-swirl swirl-3" d="M 500,50 C 700,40 900,100 1200,80" />
             <path className="wind-swirl swirl-4" d="M -50,300 Q 150,280 250,320" />
             <path className="wind-swirl swirl-5" d="M 100,180 C 400,120 600,200 900,160" />
          </svg>
        </div>
      </div>


      {/* =========================================
          LAYER 3: FOREGROUND UI & TEXT
          ========================================= */}
      <div className="layer-ui">
        {/* Top Right Info
        <div className="hero-location-time">
          <div>INDONESIA</div>
          <div>{timeStr}</div>
        </div>
        */}
        
        {/* Center Main Text */}
        <div className="hero-title-container">
          <h1 className="hero-title">
            AMEY
          </h1>
          <h2 className="hero-subtitle">UI/UX DESIGNER</h2>
        </div>

        {/* Scroll Indicator (Hidden)
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
        */}

        <TimeSwitcher />
      </div>

    </section>
  );
};

export default HeroSection;

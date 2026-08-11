import React from 'react';
import styled from 'styled-components';

const Play = () => {
  return (
    <PageContainer>
      <StyledWrapper>
        <div className="container">
          <button className="btn">
            <svg height={24} width={24} fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
            </svg>
            <span className="text">POPPIN SOON</span>
          </button>
        </div>
      </StyledWrapper>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  .container {
    width: 100%;
    height: 100%;
    --color: #a748f5;
    background: linear-gradient(95deg, var(--color) 25%, transparent 25%) -50px 0,
          linear-gradient(-15deg, var(--color) 25%, transparent 25%) -50px 0,
          linear-gradient(25deg, transparent 75%, var(--color) 75%) -50px 0,
          linear-gradient(-45deg, transparent 75%, var(--color) 75%) -50px 0,
          linear-gradient(-15deg, transparent 75%, var(--color) 75%) -50px 0;
    background-color: #b669fd;
    background-size: 40px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    border: none;
    width: 15em;
    height: 5em;
    border-radius: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: #1C1A1C;
    cursor: pointer;
    transition: all 450ms ease-in-out;
    font-family: 'JetBrains Mono', monospace;
  }

  .sparkle {
    fill: #AAAAAA;
    transition: all 800ms ease;
  }

  .text {
    font-weight: 600;
    color: #AAAAAA;
    font-size: medium;
  }

  .btn:hover {
    background: linear-gradient(0deg,#A47CF3,#683FEA);
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
    inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 4px rgba(255, 255, 255, 0.2),
    0px 0px 180px 0px #9917FF;
    transform: translateY(-2px);
  }

  .btn:hover .text {
    color: white;
  }

  .btn:hover .sparkle {
    fill: white;
    transform: scale(1.2);
  }
`;

export default Play;

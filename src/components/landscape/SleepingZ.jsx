import React from 'react';
import styled from 'styled-components';

const SleepingZ = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="z z-1">Z</div>
        <div className="z z-2">Z</div>
        <div className="z z-3">Z</div>
        <div className="z z-4">Z</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  .z {
    position: absolute;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Reddit Sans', sans-serif;
    color: var(--text-primary, #ffffff);
    opacity: 0;
  }
  .z-1 {
    animation: swayUpToRight 3s ease-out infinite;
  }
  .z-2 {
    animation: swayUpToRight 3s ease-out 0.75s infinite;
  }
  .z-3 {
    animation: swayUpToRight 3s ease-out 1.5s infinite;
  }
  .z-4 {
    animation: swayUpToRight 3s ease-out 2.25s infinite;
  }
  
  @keyframes swayUpToRight {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(0.5);
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(80px, -100px) rotate(30deg) scale(1.2);
      opacity: 0;
    }
  }
`;

export default SleepingZ;

import { useState, useEffect } from 'react';
import { environmentStates } from '../data/content';

export const useTimeEngine = () => {
  const [timeState, setTimeState] = useState(environmentStates.daylight);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const debugState = searchParams.get('debugState');
    let manualOverride = null;

    const getState = () => {
      if (manualOverride && environmentStates[manualOverride]) {
        return environmentStates[manualOverride];
      }
      if (debugState && environmentStates[debugState]) {
        return environmentStates[debugState];
      }
      const h = new Date().getHours();
      if (h >= 5 && h < 7) return environmentStates.fajar;
      if (h >= 7 && h < 12) return environmentStates.sunrise;
      if (h >= 12 && h < 15) return environmentStates.daylight;
      if (h >= 15 && h < 18) return environmentStates.sunset;
      if (h >= 18 && h < 22) return environmentStates.evening;
      return environmentStates.night;
    };

    const apply = () => {
      const s = getState();
      setTimeState(s);
      const root = document.documentElement;
      Object.entries(s.colors).forEach(([k, v]) => root.style.setProperty(k, v));
    };

    const handleOverride = (e) => {
      manualOverride = e.detail;
      apply();
    };

    window.addEventListener('timeOverride', handleOverride);

    apply();
    const interval = setInterval(apply, 60000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('timeOverride', handleOverride);
    };
  }, []);

  return timeState;
};

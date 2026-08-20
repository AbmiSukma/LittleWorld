import { useEffect, useRef } from 'react';

// You can replace these URLs with your actual local audio files in the future
// e.g., const WIND_SRC = '/assets/audio/wind.mp3';
const AUDIO_SOURCES = {
  wind: 'https://actions.google.com/sounds/v1/weather/wind_blowing_through_trees.ogg',
  crickets: 'https://actions.google.com/sounds/v1/insects/crickets.ogg',
  snoring: 'https://actions.google.com/sounds/v1/human_voices/snoring_heavy.ogg'
};

export const useAudioEngine = (timeState, isInsideTent, hasInteracted) => {
  // Audio Refs
  const audioRefs = useRef({
    wind: new Audio(AUDIO_SOURCES.wind),
    crickets: new Audio(AUDIO_SOURCES.crickets),
    snoring: new Audio(AUDIO_SOURCES.snoring)
  });

  // Initialize loop and volume for audio objects
  useEffect(() => {
    const { wind, crickets, snoring } = audioRefs.current;
    
    wind.loop = true;
    crickets.loop = true;
    snoring.loop = true;

    // Default volumes
    wind.volume = 0;
    crickets.volume = 0;
    snoring.volume = 0;

    return () => {
      // Cleanup on unmount
      wind.pause();
      crickets.pause();
      snoring.pause();
    };
  }, []);

  // Main Effect to orchestrate audio based on state
  useEffect(() => {
    if (!hasInteracted) return; // Browser autoplay protection

    const { wind, crickets, snoring } = audioRefs.current;
    const timeId = timeState.id;

    // Helper to safely play audio
    const safePlay = (audioObj) => {
      if (audioObj.paused) {
        audioObj.play().catch(e => console.log("Audio play blocked:", e));
      }
    };

    const fadeVolume = (audioObj, targetVolume) => {
      // simple immediate volume set for now, can be upgraded to gradual fade
      audioObj.volume = targetVolume;
    };

    // 1. WIND (Always playing, 50% outside, 10% inside)
    safePlay(wind);
    fadeVolume(wind, isInsideTent ? 0.05 : 0.5);

    // 2. CRICKETS (Playing during sunset, evening, night)
    const isCricketTime = ['sunset', 'evening', 'night'].includes(timeId);
    if (isCricketTime) {
      safePlay(crickets);
      fadeVolume(crickets, isInsideTent ? 0.05 : 0.4);
    } else {
      fadeVolume(crickets, 0);
      setTimeout(() => { if (crickets.volume === 0) crickets.pause() }, 1000);
    }

    // 3. SNORING (Playing during night)
    if (timeId === 'night') {
      safePlay(snoring);
      fadeVolume(snoring, isInsideTent ? 0.05 : 0.3);
    } else {
      fadeVolume(snoring, 0);
      setTimeout(() => { if (snoring.volume === 0) snoring.pause() }, 1000);
    }

  }, [timeState, isInsideTent, hasInteracted]);

  return {};
};

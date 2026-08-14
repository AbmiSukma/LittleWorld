import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;
const FOLDER_PATH = '/scroll-sequence/';

const currentFrame = index => (
  `${FOLDER_PATH}ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);

const ScrollSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // 1. Preload all images for zero-lag playback
  useEffect(() => {
    let imagesLoaded = 0;
    const images = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        imagesLoaded++;
        setProgress(Math.round((imagesLoaded / FRAME_COUNT) * 100));
        // Once all frames are loaded in browser cache, unblock the render
        if (imagesLoaded === FRAME_COUNT) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  // 2. Setup GSAP ScrollTrigger & Canvas render loop
  useEffect(() => {
    if (!loaded || imagesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const images = imagesRef.current;

    const render = (index) => {
      // Ensure we have an integer frame index
      const safeIndex = Math.round(index);
      if (!images[safeIndex] || !canvas) return;
      const img = images[safeIndex];
      
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      // Keep sharp on high-DPI (Retina/Mobile) displays
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      
      // Calculate object-fit: cover equivalent logic
      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.max(hRatio, vRatio); // Use Math.max for cover, Math.min for contain
      
      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;  
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(
        img, 
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    // Draw first frame immediately
    render(0);

    const animationParams = { frame: 0 };

    // Create the GSAP Scroll Timeline
    const tl = gsap.to(animationParams, {
      frame: FRAME_COUNT - 1,
      snap: 'frame', // Snap to integer frame index
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,          // Pin the canvas in place while scrubbing
        scrub: 0.5,         // 0.5s smoothing to eliminate mousewheel stutter
        start: 'top top',
        end: `+=${FRAME_COUNT * 20}`, // Scroll 20px per frame. Increase 20 to make scroll longer.
      },
      onUpdate: () => render(animationParams.frame)
    });

    // Handle responsive resize correctly
    const handleResize = () => render(animationParams.frame);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loaded]);

  return (
    <div ref={containerRef} style={styles.container}>
      {/* Graceful fallback while loading frames */}
      {!loaded && (
        <div style={styles.fallback}>
          <div style={styles.spinner} className="scroll-seq-spinner" />
          <p style={styles.loadingText}>Loading sequence... {progress}%</p>
        </div>
      )}
      
      {/* The master canvas */}
      <canvas 
        ref={canvasRef} 
        style={{ ...styles.canvas, opacity: loaded ? 1 : 0 }} 
      />
    </div>
  );
};

// Isolated inline styles for portability
const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000', // Adjust to match sequence background color
    overflow: 'hidden'
  },
  canvas: {
    width: '100%',
    height: '100%',
    display: 'block',
    transition: 'opacity 0.8s ease',
  },
  fallback: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'sans-serif',
    zIndex: 10,
    backgroundColor: '#000'
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '3px solid rgba(255,255,255,0.3)',
    borderTop: '3px solid #fff',
    borderRadius: '50%',
    marginBottom: '16px'
  },
  loadingText: {
    fontSize: '14px',
    letterSpacing: '1px'
  }
};

// Inject keyframe safely for spinner
if (typeof document !== 'undefined') {
  const styleId = 'scroll-seq-styles';
  if (!document.getElementById(styleId)) {
    const styleSheet = document.createElement("style");
    styleSheet.id = styleId;
    styleSheet.innerText = `
      .scroll-seq-spinner {
        animation: scroll-spin 1s linear infinite;
      }
      @keyframes scroll-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }
}

export default ScrollSequence;

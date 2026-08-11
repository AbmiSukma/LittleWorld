import React from 'react';

/**
 * UIN Sultan Syarif Kasim Riau logo.
 * Menggunakan gambar asli yang diunggah pengguna, dimuat di dalam SVG.
 * mix-blend-mode: multiply digunakan agar background putih pada gambar menjadi transparan (hilang).
 */
const UINSuskaLogo = () => (
  <svg 
    viewBox="0 0 100 100" 
    width="100%" 
    height="100%" 
    className="uin-logo"
    style={{ mixBlendMode: 'multiply' }}
  >
    <image 
      href="/images/uin-suska-logo.png" 
      width="100" 
      height="100" 
      preserveAspectRatio="xMidYMid meet" 
    />
  </svg>
);

export default UINSuskaLogo;

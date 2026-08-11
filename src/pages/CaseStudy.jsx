import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { slug } = useParams();

  return (
    <div className="page-container">
      <h1 style={{ fontFamily: "'Courier New', Courier, monospace", marginBottom: '20px', textTransform: 'capitalize' }}>
        {slug.replace('-', ' ')}
      </h1>
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <p>Placeholder for detailed case study documentation. To be populated via src/data/content.js later.</p>
      </div>
    </div>
  );
};

export default CaseStudy;

import React from 'react';

const Hero = ({ currentVibe, cycleVibe }) => {
  const getDisplayVibeName = () => {
    switch (currentVibe) {
      case 'cyber': return 'CYBER';
      case 'forest': return 'FOREST';
      case 'rose': return 'VELVET';
      case 'light': return 'MINIMAL';
      default: return 'SILVER';
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-grid-bg"></div>
      
      <div className="hero-main-title">
        <h1 className="hero-vibe-title">{getDisplayVibeName()}</h1>
        
        {/* Hand drawn style arrow pointing to "Change the vibes" button */}
        <div className="vibe-arrow-container">
          <svg className="vibe-arrow-svg" width="90" height="45" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 25 C30 50, 60 5, 85 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <path d="M78 8 L87 14 L80 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <button onClick={cycleVibe} className="vibe-change-badge">
            Change the vibes
          </button>
        </div>
      </div>

      <style>{`
        .hero-container {
          position: relative;
          padding: 6rem 2.5rem 4rem 2.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: border-color var(--transition-speed);
        }
        @media (max-width: 768px) {
          .hero-container {
            padding: 4rem 1.25rem 3rem 1.25rem;
          }
        }
        .hero-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(var(--accent-color), 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-main-title {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
        }
        .hero-vibe-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 10vw, 7.5rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.12em;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--text-primary);
          text-shadow: 0 0 30px var(--accent-glow);
          user-select: none;
          transition: -webkit-text-stroke var(--transition-speed), text-shadow var(--transition-speed);
        }
        .vibe-arrow-container {
          display: flex;
          align-items: center;
          position: relative;
          margin-top: 1.5rem;
          align-self: flex-end;
          margin-right: 15%;
        }
        @media (max-width: 768px) {
          .vibe-arrow-container {
            margin-right: 0;
            align-self: center;
          }
        }
        .vibe-arrow-svg {
          color: var(--text-muted);
          position: absolute;
          left: -80px;
          top: -20px;
          transform: rotate(-10deg);
          pointer-events: none;
        }
        @media (max-width: 550px) {
          .vibe-arrow-svg {
            display: none;
          }
        }
        .vibe-change-badge {
          background: none;
          border: none;
          outline: none;
          color: var(--text-muted);
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-style: italic;
          cursor: pointer;
          transition: color var(--transition-speed), transform var(--transition-speed);
        }
        .vibe-change-badge:hover {
          color: var(--accent-color);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Hero;

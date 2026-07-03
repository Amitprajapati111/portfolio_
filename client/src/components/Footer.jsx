import React from 'react';

const Footer = ({ currentVibe }) => {
  const getDisplayVibeName = () => {
    switch (currentVibe) {
      case 'cyber': return 'CYBER';
      case 'forest': return 'FOREST';
      case 'rose': return 'VELVET';
      case 'light': return 'MINIMAL';
      default: return 'SILVER';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer-section section-wrapper">
      <div className="footer-credits">
        <p>Built by <strong>Amit prajapati</strong>. Check out the source code on <a href="https://github.com/amitprajapati111" target="_blank" rel="noopener noreferrer" className="footer-repo-link">GitHub</a>.</p>
      </div>

      {/* Social links row */}
      <div className="footer-socials">
        <a href="https://twitter.com/amitPra46489018" target="_blank" rel="noopener noreferrer" title="Twitter">𝕏</a>
        <a href="https://github.com/amitprajapati111" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a>
        <a href="https://linkedin.com/in/amitprajapati111" target="_blank" rel="noopener noreferrer" title="LinkedIn">🔗</a>
        <a href="mailto:amitofficialcs@gmail.com" title="Email">📧</a>
      </div>

      {/* Back to top button */}
      <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
        ↑
      </button>

      {/* Oversized bottom text (matches bottom of Image 1) */}
      <div className="footer-huge-title">
        {getDisplayVibeName()}
      </div>

      <style>{`
        .portfolio-footer-section {
          padding-top: 4rem;
          padding-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
          position: relative;
          border-bottom: none;
        }
        .footer-credits {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer-credits strong {
          color: var(--text-primary);
        }
        .footer-repo-link {
          text-decoration: underline;
          color: var(--text-primary);
        }
        .footer-repo-link:hover {
          color: var(--accent-color);
        }
        
        .footer-socials {
          display: flex;
          gap: 1.5rem;
          font-size: 1.25rem;
        }
        .footer-socials a {
          color: var(--text-muted);
          transition: color var(--transition-speed), transform var(--transition-speed);
        }
        .footer-socials a:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }
        
        .back-to-top-btn {
          width: 32px;
          height: 32px;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          background: var(--bg-secondary);
          color: var(--text-muted);
          cursor: pointer;
          font-weight: bold;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-speed);
          position: absolute;
          right: 2.5rem;
          bottom: 2rem;
        }
        @media (max-width: 550px) {
          .back-to-top-btn {
            position: relative;
            right: auto;
            bottom: auto;
            margin-top: 1rem;
          }
        }
        .back-to-top-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background: var(--bg-tertiary);
        }
        
        .footer-huge-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 700;
          letter-spacing: 0.15em;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px var(--border-color);
          margin-top: 2rem;
          user-select: none;
          pointer-events: none;
          width: 100%;
          transition: -webkit-text-stroke var(--transition-speed);
        }
      `}</style>
    </footer>
  );
};

export default Footer;

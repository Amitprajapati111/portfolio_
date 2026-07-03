import React from 'react';

const Header = ({ currentVibe, cycleVibe }) => {
  const getVibeIcon = () => {
    switch (currentVibe) {
      case 'cyber': return '⚡';
      case 'forest': return '🌿';
      case 'rose': return '🌸';
      case 'light': return '☀️';
      default: return '❄️';
    }
  };

  return (
    <header className="portfolio-header">
      <div className="header-inner">
        {/* Grid logo */}
        <div className="header-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="10" y="2" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="18" y="2" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="2" y="10" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="18" y="10" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="2" y="18" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="10" y="18" width="4" height="4" rx="1" fill="currentColor" />
            <rect x="18" y="18" width="4" height="4" rx="1" fill="currentColor" />
          </svg>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          <a href="https://github.com/amitprajapati111" target="_blank" rel="noopener noreferrer" className="github-link" title="GitHub Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <button onClick={cycleVibe} className="theme-toggle-btn" title="Change the vibe">
            <span className="vibe-indicator-icon">{getVibeIcon()}</span>
            <span className="vibe-name-label">{currentVibe.toUpperCase()}</span>
          </button>
        </div>
      </div>

      <style>{`
        .portfolio-header {
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          background-color: rgba(var(--bg-primary), 0.7);
          backdrop-filter: blur(12px);
          z-index: 100;
          transition: background-color var(--transition-speed), border-color var(--transition-speed);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2.5rem;
          height: 64px;
        }
        @media (max-width: 768px) {
          .header-inner {
            padding: 1rem 1.25rem;
          }
        }
        .header-logo {
          color: var(--text-primary);
          display: flex;
          align-items: center;
        }
        .header-nav {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 550px) {
          .header-nav {
            gap: 1rem;
          }
          .header-nav a {
            font-size: 0.85rem;
          }
        }
        .header-nav a {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color var(--transition-speed);
        }
        .header-nav a:hover {
          color: var(--text-primary);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .github-link {
          color: var(--text-muted);
          display: flex;
          align-items: center;
        }
        .github-link:hover {
          color: var(--text-primary);
        }
        .theme-toggle-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.8rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          transition: all var(--transition-speed);
        }
        .theme-toggle-btn:hover {
          border-color: var(--text-muted);
          background: var(--bg-tertiary);
        }
        .vibe-name-label {
          color: var(--text-muted);
        }
        .theme-toggle-btn:hover .vibe-name-label {
          color: var(--text-primary);
        }
      `}</style>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [localTime, setLocalTime] = useState('');
  const [isSameTimeZone, setIsSameTimeZone] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Calculate IST (UTC + 5.30)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      let hours = istTime.getHours();
      let minutes = istTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      // Standard 24h or 12h display
      const hoursStr = String(hours).padStart(2, '0');
      const minutesStr = String(minutes).padStart(2, '0');

      setLocalTime(`${hoursStr}:${minutesStr}`);

      // Check if user's timezone matches IST (+5:30)
      const userOffsetHours = -now.getTimezoneOffset() / 60;
      setIsSameTimeZone(userOffsetHours === 5.5);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile-section section-wrapper">
      <div className="profile-header-card">
        {/* Avatar Container */}
        <div className="avatar-wrapper">
          <img src="/avatar.png" alt="Amit prajapati Avatar" className="profile-avatar" onError={(e) => {
            // fallback if avatar doesn't exist yet
            e.target.src = 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Rajat';
          }} />
        </div>

        {/* Name and Tagline */}
        <div className="name-intro-group">
          <h2 className="profile-name">Amit prajapati</h2>
          <p className="profile-tagline">Building with Code</p>
        </div>
      </div>

      {/* Info Grid (Matches layout from Image 4) */}
      <div className="info-grid">
        <div className="info-card">
          <span className="info-icon">💼</span>
          <span className="info-text">Design Engineer <strong>@Infosys Springboard</strong></span>
        </div>
        <div className="info-card">
          <span className="info-icon">🚀</span>
          <span className="info-text">Founder <strong>@Lernify</strong></span>
        </div>
        <div className="info-card">
          <span className="info-icon">📍</span>
          <span className="info-text">Greater Noida, India</span>
        </div>
        <div className="info-card">
          <span className="info-icon">📞</span>
          <span className="info-text">+91 9508019871</span>
        </div>
        <div className="info-card">
          <span className="info-icon">📧</span>
          <span className="info-text">amitofficialcs@gmail.com</span>
        </div>
        <div className="info-card">
          <span className="info-icon">🌐</span>
          <span className="info-text">lernify.tech</span>
        </div>
        <div className="info-card">
          <span className="info-icon">👤</span>
          <span className="info-text">he/him</span>
        </div>
        <div className="info-card clock-card">
          <span className="info-icon">🕒</span>
          <span className="info-text">{localTime} // {isSameTimeZone ? 'same time zone' : 'IST'}</span>
        </div>
      </div>

      {/* Social Links Cards Grid (Matches buttons from Image 4) */}
      <div className="socials-grid">
        <a href="https://x.com/AmitPra46489018" target="_blank" rel="noopener noreferrer" className="social-button">
          <span className="social-logo">𝕏</span>
          <span className="social-name">X</span>
          <span className="external-arrow">↗</span>
        </a>
        <a href="https://github.com/amitprajapati111" target="_blank" rel="noopener noreferrer" className="social-button">
          <span className="social-logo">🐙</span>
          <span className="social-name">GitHub</span>
          <span className="external-arrow">↗</span>
        </a>
        <a href="https://linkedin.com/in/amitprajapati111" target="_blank" rel="noopener noreferrer" className="social-button">
          <span className="social-logo">🔗</span>
          <span className="social-name">LinkedIn</span>
          <span className="external-arrow">↗</span>
        </a>
        <a href="https://leetcode.com/u/Amitkumar111" target="_blank" rel="noopener noreferrer" className="social-button">
          <span className="social-logo">💬</span>
          <span className="social-name">LeetCode</span>
          <span className="external-arrow">↗</span>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-button">
          <span className="social-logo">💬</span>
          <span className="social-name">Discord</span>
          <span className="external-arrow">↗</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-button">
          <span className="social-logo">📺</span>
          <span className="social-name">YouTube</span>
          <span className="external-arrow">↗</span>
        </a>
      </div>

      <style>{`
        .profile-header-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 550px) {
          .profile-header-card {
            flex-direction: column;
            text-align: center;
          }
        }
        .avatar-wrapper {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          padding: 4px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .profile-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .profile-name {
          font-family: var(--font-sans);
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .profile-tagline {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
        
        /* Info cards Grid */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 650px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background: var(--bg-secondary);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .info-icon {
          font-size: 1.1rem;
          opacity: 0.8;
        }
        .info-card strong {
          color: var(--text-primary);
        }
        .clock-card {
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
        
        /* Social cards grid */
        .socials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        @media (max-width: 768px) {
          .socials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .socials-grid {
            grid-template-columns: 1fr;
          }
        }
        .social-button {
          display: flex;
          align-items: center;
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background: var(--bg-secondary);
          transition: all var(--transition-speed);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          position: relative;
        }
        .social-button:hover {
          background: var(--bg-tertiary);
          border-color: var(--text-muted);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .social-logo {
          margin-right: 0.75rem;
          font-size: 1.1rem;
        }
        .social-name {
          color: var(--text-primary);
        }
        .external-arrow {
          position: absolute;
          right: 1rem;
          color: var(--text-muted);
          font-size: 0.8rem;
          transition: color var(--transition-speed), transform var(--transition-speed);
        }
        .social-button:hover .external-arrow {
          color: var(--accent-color);
          transform: translate(2px, -2px);
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;

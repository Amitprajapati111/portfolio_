import React from 'react';

// Custom inline SVG icons for technologies to avoid broken external links
const getTechIcon = (name) => {
  const lowercase = name.toLowerCase();

  // Custom styled CSS tags for tech icons
  switch (lowercase) {
    case 'typescript':
    case 'ts':
      return <div className="tech-monogram ts-logo">TS</div>;
    case 'javascript':
    case 'js':
      return <div className="tech-monogram js-logo">JS</div>;
    case 'python':
    case 'py':
      return <div className="tech-monogram py-logo">🐍</div>;
    case 'c':
      return <div className="tech-monogram c-logo">C</div>;
    case 'c++':
    case 'cpp':
      return <div className="tech-monogram cpp-logo">C++</div>;
    case 'java':
      return <div className="tech-monogram java-logo">☕</div>;
    case 'html5':
    case 'html':
      return <div className="tech-monogram html-logo">H5</div>;
    case 'css3':
    case 'css':
      return <div className="tech-monogram css-logo">C3</div>;
    case 'react':
      return <div className="tech-monogram react-logo">⚛️</div>;
    case 'node.js':
    case 'node':
      return <div className="tech-monogram node-logo">Node</div>;
    case 'express':
    case 'express.js':
      return <div className="tech-monogram express-logo">Ex</div>;
    case 'mongodb':
      return <div className="tech-monogram mongo-logo">🍃</div>;
    case 'tailwind':
    case 'tailwind css':
      return <div className="tech-monogram tailwind-logo">TW</div>;
    case 'bootstrap':
      return <div className="tech-monogram bootstrap-logo">BS</div>;
    case 'mysql':
      return <div className="tech-monogram mysql-logo">🐬</div>;
    case 'github':
      return <div className="tech-monogram github-skill-logo">GH</div>;
    case 'postman':
      return <div className="tech-monogram postman-logo">🚀</div>;
    case 'vs code':
    case 'vscode':
      return <div className="tech-monogram vscode-logo">VS</div>;
    case 'webrtc':
      return <div className="tech-monogram webrtc-logo">RTC</div>;
    case 'socket.io':
    case 'socketio':
      return <div className="tech-monogram socket-logo">IO</div>;
    case 'next.js':
    case 'next':
      return <div className="tech-monogram next-logo">N</div>;
    case 'django':
      return <div className="tech-monogram django-logo">Dj</div>;
    case 'git':
      return <div className="tech-monogram git-logo">⌥</div>;
    case 'figma':
      return <div className="tech-monogram figma-logo">❖</div>;
    case 'aws ec2':
    case 'ec2':
      return <div className="tech-monogram ec2-logo">EC2</div>;
    case 'aws amplify':
    case 'amplify':
      return <div className="tech-monogram amplify-logo">AMP</div>;
    case 'aws s3':
    case 's3':
      return <div className="tech-monogram s3-logo">S3</div>;
    case 'aws':
      return <div className="tech-monogram aws-logo">☁️</div>;

    default:
      return <div className="tech-monogram default-logo">{name.slice(0, 3)}</div>;
  }
};

const Stack = ({ skills, loading }) => {
  return (
    <section className="stack-section section-wrapper">
      <h3 className="section-title">Stack</h3>

      {loading ? (
        <div className="section-loading">
          <div className="spinner"></div>
          <span>Loading tech stack...</span>
        </div>
      ) : (
        <div className="stack-grid">
          {skills.map((skill) => (
            <a
              key={skill._id}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="stack-card"
              title={skill.name}
            >
              <div className="stack-icon-container">
                {getTechIcon(skill.name)}
              </div>
            </a>
          ))}
        </div>
      )}

      <style>{`
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
          gap: 0.75rem;
        }
        @media (max-width: 500px) {
          .stack-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
        .stack-card {
          aspect-ratio: 1 / 1;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-speed);
          text-decoration: none;
        }
        .stack-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .stack-icon-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Monogram logos with brand-specific styling and hover states */
        .tech-monogram {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 4px;
          transition: color var(--transition-speed);
        }
        
        /* Specific brand typography matching standard colors */
        .ts-logo { color: #3178c6; }
        .js-logo { color: #f7df1e; }
        .c-logo { color: #659ad2; }
        .cpp-logo { color: #00599c; }
        .html-logo { color: #e34c26; }
        .css-logo { color: #264de4; }
        .react-logo { color: #61dbfb; font-size: 1.3rem; }
        .node-logo { color: #3c873a; }
        .express-logo { color: var(--text-primary); }
        .tailwind-logo { color: #38bdf8; }
        .bootstrap-logo { color: #7952b3; }
        .mysql-logo { color: #00758f; font-size: 1.2rem; }
        .github-skill-logo { color: var(--text-primary); }
        .postman-logo { color: #ff6c37; font-size: 1.1rem; }
        .vscode-logo { color: #007acc; }
        .webrtc-logo { color: #34d399; }
        .socket-logo { color: var(--text-primary); }
        .next-logo { color: var(--text-primary); font-weight: 800; font-family: var(--font-sans); }
        .django-logo { color: #092e20; }
        .figma-logo { color: #f24e1e; }
        .git-logo { color: #f05032; }
        .aws-logo { font-size: 1.2rem; }
        .ec2-logo { color: #FF9900; font-family: var(--font-sans); font-size: 0.8rem; font-weight: 800; }
        .amplify-logo { color: #FF9900; font-family: var(--font-sans); font-size: 0.75rem; font-weight: 800; }
        .s3-logo { color: #E05243; font-family: var(--font-sans); font-size: 0.85rem; font-weight: 800; }
        .default-logo { color: var(--text-muted); }
      `}</style>
    </section>
  );
};

export default Stack;

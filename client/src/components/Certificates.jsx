import React from 'react';

const Certificates = ({ certificates, loading }) => {
  return (
    <section className="certificates-section section-wrapper">
      <h3 className="section-title">Certificates</h3>

      {loading ? (
        <div className="section-loading">
          <div className="spinner"></div>
          <span>Loading certificates...</span>
        </div>
      ) : (
        <div className="certificates-list">
          {certificates.map((cert) => (
            <div key={cert._id} className="certificate-card-item">
              <div className="cert-left-side">
                <span className="cert-badge-icon">🎖️</span>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>

              {cert.credentialUrl && (
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-action-btn"
                  title="View Credential"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        .certificates-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .certificate-card-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background-color: var(--bg-secondary);
          transition: all var(--transition-speed);
        }
        .certificate-card-item:hover {
          border-color: var(--text-muted);
          transform: translateX(4px);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .cert-left-side {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .cert-badge-icon {
          font-size: 1.5rem;
        }
        .cert-info {
          display: flex;
          flex-direction: column;
        }
        .cert-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .cert-issuer {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
        .cert-action-btn {
          width: 36px;
          height: 36px;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background-color: var(--bg-primary);
          transition: all var(--transition-speed);
        }
        .cert-action-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background-color: var(--bg-tertiary);
        }
      `}</style>
    </section>
  );
};

export default Certificates;

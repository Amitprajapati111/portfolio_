import React, { useState } from 'react';

const Experience = ({ experiences, loading }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="experience-section section-wrapper">
      <h3 className="section-title">
        Experience
      </h3>

      {loading ? (
        <div className="section-loading">
          <div className="spinner"></div>
          <span className="loading-text">Loading experiences...</span>
        </div>
      ) : (
        <div className="experience-list">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp._id;
            return (
              <div 
                key={exp._id} 
                className={`accordion-item ${isExpanded ? 'expanded' : ''}`}
              >
                <div 
                  className="accordion-header" 
                  onClick={() => toggleExpand(exp._id)}
                >
                  <div className="accordion-trigger-info">
                    {/* Monogram logo box */}
                    <div 
                      className="company-logo" 
                      style={{ backgroundColor: exp.logoColor || '#333' }}
                    >
                      {exp.logoText || exp.company[0]}
                    </div>
                    <div className="header-title-group">
                      <div className="company-title-row">
                        <span className="entity-name">{exp.company}</span>
                        {exp.current && <span className="active-dot-marker"></span>}
                      </div>
                      <span className="entity-subtext">{exp.role}</span>
                    </div>
                  </div>
                  <div className="meta-and-chevron">
                    <span className="meta-duration-text">
                      {exp.type} | {exp.startDate} - {exp.endDate} | {exp.duration}
                    </span>
                    <span className="accordion-chevron">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div 
                  className="accordion-content"
                  style={{
                    maxHeight: isExpanded ? `${(exp.description.length * 35) + 60}px` : '0px'
                  }}
                >
                  <ul className="accordion-bullets">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="location-footer">
                    <span>Location: {exp.location || 'Remote'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .experience-list {
          display: flex;
          flex-direction: column;
        }
        .company-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .active-dot-marker {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #3b82f6; /* bright blue dot */
          display: inline-block;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
        }
        .meta-and-chevron {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .meta-duration-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        @media (max-width: 650px) {
          .accordion-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .meta-and-chevron {
            width: 100%;
            justify-content: space-between;
            border-top: 1px solid var(--border-color);
            padding-top: 0.75rem;
          }
        }
        .location-footer {
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: right;
        }
        .section-loading {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem 0;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  );
};

export default Experience;

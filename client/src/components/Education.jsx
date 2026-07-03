import React, { useState } from 'react';

const Education = ({ education, loading }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="education" className="education-section section-wrapper">
      <h3 className="section-title">Education</h3>

      {loading ? (
        <div className="section-loading">
          <div className="spinner"></div>
          <span>Loading education...</span>
        </div>
      ) : (
        <div className="education-list">
          {education.map((edu) => {
            const isExpanded = expandedId === edu._id;
            return (
              <div 
                key={edu._id} 
                className={`accordion-item ${isExpanded ? 'expanded' : ''}`}
              >
                <div 
                  className="accordion-header" 
                  onClick={() => toggleExpand(edu._id)}
                >
                  <div className="accordion-trigger-info">
                    <div className="education-logo">
                      {edu.logoEmoji || '🎓'}
                    </div>
                    <div className="header-title-group">
                      <span className="entity-name">{edu.institution}</span>
                      <span className="entity-subtext">
                        {edu.degree} {edu.fieldOfStudy ? `- ${edu.fieldOfStudy}` : ''}
                      </span>
                    </div>
                  </div>
                  <div className="meta-and-chevron">
                    <span className="meta-duration-text">
                      {edu.location} | {edu.startDate} - {edu.endDate}
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
                    maxHeight: isExpanded ? `${(edu.description.length * 35) + 40}px` : '0px'
                  }}
                >
                  <ul className="accordion-bullets">
                    {edu.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .education-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
};

export default Education;

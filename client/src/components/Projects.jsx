import React, { useState } from 'react';

const Projects = ({ projects, loading, selectedTag, onTagChange }) => {
  const tags = ['All', 'Frontend', 'Backend', 'Fullstack', 'Design', 'AI', 'IoT'];
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="projects-section section-wrapper">
      <div className="projects-header-row">
        <h3 className="section-title">
          Projects <span className="count">({projects.length})</span>
        </h3>
        
        {/* Custom Dropdown Filter */}
        <div className="filter-dropdown-container">
          <select 
            value={selectedTag} 
            onChange={(e) => onTagChange(e.target.value)} 
            className="filter-select"
          >
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="section-loading">
          <div className="spinner"></div>
          <span>Loading projects...</span>
        </div>
      ) : (
        <div className="projects-list">
          {projects.map((project) => {
            const isExpanded = expandedId === project._id;
            return (
              <div 
                key={project._id} 
                className={`project-card-item ${isExpanded ? 'expanded' : ''}`}
              >
                {/* Main Card Header Area */}
                <div className="project-card-main" onClick={() => toggleExpand(project._id)}>
                  <div className="project-left-side">
                    <span className="project-folder-icon">📁</span>
                    <div className="project-details">
                      <h4 className="project-card-title">{project.title}</h4>
                      <p className="project-card-description">{project.description}</p>
                      {project.tags && project.tags.length > 0 && (
                        <div className="project-tags-row">
                          {project.tags.map((tag) => (
                            <span key={tag} className="project-tag-badge">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Chevron controls */}
                  <div className="project-right-controls" onClick={(e) => e.stopPropagation()}>
                    <div className="project-links-group">
                      {project.docLink && (
                        <a 
                          href={project.docLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-action-btn"
                          title="View Source Code"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        </a>
                      )}
                      {project.liveLink && project.liveLink !== '#' && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-action-btn"
                          title="Visit Live Site"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* View Details Accordion Trigger */}
                    {project.details && project.details.length > 0 && (
                      <button 
                        onClick={() => toggleExpand(project._id)} 
                        className="project-expand-btn"
                        title={isExpanded ? "Hide Details" : "View Details"}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Details Drawer Drawer */}
                {project.details && project.details.length > 0 && (
                  <div className="project-details-content">
                    <ul className="project-bullets">
                      {project.details.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .projects-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .projects-header-row .section-title {
          margin-bottom: 0;
        }
        .filter-select {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 2rem 0.5rem 1rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          cursor: pointer;
          outline: none;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1rem;
          transition: all var(--transition-speed);
        }
        .filter-select:hover {
          border-color: var(--text-muted);
          background-color: var(--bg-tertiary);
        }
        
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .project-card-item {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background-color: var(--bg-secondary);
          overflow: hidden;
          transition: all var(--transition-speed);
        }
        .project-card-item:hover {
          border-color: var(--text-muted);
          transform: translateX(4px);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .project-card-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem;
          cursor: pointer;
        }
        .project-left-side {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          flex: 1;
        }
        .project-folder-icon {
          font-size: 1.5rem;
          margin-top: 0.25rem;
        }
        .project-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .project-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .project-card-description {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .project-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }
        .project-tag-badge {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }
        
        .project-right-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .project-links-group {
          display: flex;
          gap: 0.75rem;
        }
        .project-action-btn {
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
        .project-action-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background-color: var(--bg-tertiary);
        }
        
        .project-expand-btn {
          width: 36px;
          height: 36px;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background-color: var(--bg-primary);
          cursor: pointer;
          transition: all var(--transition-speed);
        }
        .project-expand-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background-color: var(--bg-tertiary);
        }
        .project-card-item.expanded .project-expand-btn svg {
          transform: rotate(180deg);
          color: var(--text-primary);
        }
        .project-card-item.expanded .project-expand-btn {
          border-color: var(--text-muted);
        }
        
        /* Details Drawer Styling */
        .project-details-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease-out, padding 0.35s ease;
          background-color: var(--bg-primary);
        }
        .project-card-item.expanded .project-details-content {
          max-height: 500px;
          padding: 1.25rem;
          border-top: 1px solid var(--border-color);
        }
        .project-bullets {
          list-style: none;
          padding-left: 0.5rem;
        }
        .project-bullets li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .project-bullets li::before {
          content: '>';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  );
};

export default Projects;

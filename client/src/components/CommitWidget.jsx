import React, { useState, useEffect } from 'react';

const CommitWidget = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true); // Matches the failed state in Image 2 by default
  const [commits, setCommits] = useState([]);
  const [contributions, setContributions] = useState([]);

  // Generate a mock contribution matrix (7 rows x 35 columns)
  const generateMockGrid = () => {
    const grid = [];
    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    for (let r = 0; r < 7; r++) {
      const row = [];
      for (let c = 0; c < 73; c++) {
        // Distribute weight
        const rand = Math.random();
        let colorIdx = 0;
        if (rand > 0.85) colorIdx = 4;
        else if (rand > 0.7) colorIdx = 3;
        else if (rand > 0.5) colorIdx = 2;
        else if (rand > 0.3) colorIdx = 1;
        row.push(colors[colorIdx]);
      }
      grid.push(row);
    }
    return grid;
  };

  const handleRetry = async () => {
    setLoading(true);
    setError(false);

    // Simulate real fetching
    setTimeout(() => {
      // Mock some real commits data
      setCommits([
        { id: 1, msg: "feat: redesign portfolio landing grids and vibes", time: "2 hrs ago" },
        { id: 2, msg: "fix: solve IST client clock synchronization issues", time: "5 hrs ago" },
        { id: 3, msg: "docs: update credentials and certificates schemas", time: "1 day ago" },
        { id: 4, msg: "refactor: convert style systems to modular HSL variables", time: "3 days ago" }
      ]);
      setContributions(generateMockGrid());
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="commit-widget-section section-wrapper">
      <div className="commit-box">
        <div className="commit-header">
          <div className="header-github-brand">
            <span className="github-icon-small">🐙</span>
            <div className="github-user-info">
              <span className="github-title">GitHub Commits</span>
              <span className="github-handle">@amitprajapati111</span>
            </div>
          </div>
          <a href="https://github.com/amitprajapati111" target="_blank" rel="noopener noreferrer" className="github-external-link" title="Open GitHub">
            ↗
          </a>
        </div>

        {loading && (
          <div className="commit-loading">
            <div className="spinner"></div>
            <span className="loading-text">Fetching live contribution grids...</span>
          </div>
        )}

        {!loading && error && (
          <div className="commit-error-state">
            <p className="error-message-text">Error - Fetching GitHub contribution data for "amitprajapati111" failed.</p>
            <button onClick={handleRetry} className="btn retry-btn">
              🔄 Retry Connection
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="commit-success-state">
            <div className="contribution-heatmap">
              <div className="heatmap-grid">
                {contributions.map((row, rIdx) => (
                  <div key={rIdx} className="heatmap-row">
                    {row.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="heatmap-cell"
                        style={{ backgroundColor: color }}
                        title="Commits contributed"
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="heatmap-legend">
                <span>Less</span>
                <span className="legend-box" style={{ backgroundColor: '#161b22' }}></span>
                <span className="legend-box" style={{ backgroundColor: '#0e4429' }}></span>
                <span className="legend-box" style={{ backgroundColor: '#006d32' }}></span>
                <span className="legend-box" style={{ backgroundColor: '#26a641' }}></span>
                <span className="legend-box" style={{ backgroundColor: '#39d353' }}></span>
                <span>More</span>
              </div>
            </div>

            <div className="commits-list">
              <h4 className="commits-list-title">Recent Activity</h4>
              {commits.map(commit => (
                <div key={commit.id} className="commit-item">
                  <span className="commit-dot"></span>
                  <span className="commit-msg">{commit.msg}</span>
                  <span className="commit-time">{commit.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .commit-box {
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background-color: var(--bg-secondary);
          overflow: hidden;
          transition: border-color var(--transition-speed);
        }
        .commit-box:hover {
          border-color: var(--text-muted);
        }
        .commit-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }
        .header-github-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .github-icon-small {
          font-size: 1.25rem;
        }
        .github-user-info {
          display: flex;
          flex-direction: column;
        }
        .github-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .github-handle {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .github-external-link {
          color: var(--text-muted);
          transition: color var(--transition-speed);
        }
        .github-external-link:hover {
          color: var(--text-primary);
        }
        
        /* Loading */
        .commit-loading {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .spinner {
          width: 24px;
          height: 24px;
          border: 2px solid var(--border-color);
          border-top-color: var(--accent-color);
          border-radius: 50%;
          animation: spin 1s infinite linear;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loading-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* Error state (Image 2 style) */
        .commit-error-state {
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .error-message-text {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-primary);
          padding: 0.75rem;
          background-color: rgba(255, 0, 0, 0.05);
          border: 1px solid rgba(255, 0, 0, 0.15);
          border-radius: 4px;
        }
        .retry-btn {
          align-self: flex-start;
          font-size: 0.8rem;
        }

        /* Success active state */
        .commit-success-state {
          padding: 1.25rem;
        }
        .contribution-heatmap {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.25rem;
        }
        .heatmap-grid {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        .heatmap-row {
          display: flex;
          gap: 2px;
        }
        .heatmap-cell {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .heatmap-legend {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .legend-box {
          width: 8px;
          height: 8px;
          border-radius: 1px;
        }
        
        .commits-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .commits-list-title {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .commit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          padding: 0.25rem 0;
        }
        .commit-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-color);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .commit-msg {
          color: var(--text-secondary);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          flex: 1;
        }
        .commit-time {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default CommitWidget;

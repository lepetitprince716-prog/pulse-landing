export function ProductPanel() {
  return (
    <aside className="panel" aria-label="Product preview">
      <div className="panel-bar">
        <div className="panel-title">production · api-gateway</div>
        <div className="pills">
          <span className="pill on">Live</span>
          <span className="pill">24h</span>
          <span className="pill">7d</span>
        </div>
      </div>
      <div className="panel-body">
        <div className="stats">
          <div className="stat">
            <div className="stat-label">p99 latency</div>
            <div className="stat-value ok">42ms</div>
          </div>
          <div className="stat">
            <div className="stat-label">error rate</div>
            <div className="stat-value ok">0.02%</div>
          </div>
          <div className="stat">
            <div className="stat-label">heartbeat</div>
            <div className="stat-value ok">steady</div>
          </div>
        </div>
        <div className="chart">
          <div className="chart-label">heartbeat · last 60m</div>
          <svg
            viewBox="0 0 560 180"
            preserveAspectRatio="none"
            role="img"
            aria-label="Heartbeat line chart"
          >
            <defs>
              <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3DDCFF" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#3DDCFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="#23252A" strokeWidth="1">
              <line x1="0" y1="40" x2="560" y2="40" />
              <line x1="0" y1="80" x2="560" y2="80" />
              <line x1="0" y1="120" x2="560" y2="120" />
            </g>
            <path
              d="M0,100 L40,96 L80,102 L120,90 L160,94 L200,88 L240,110 L280,70 L320,92 L360,86 L400,90 L440,84 L480,88 L520,82 L560,86 L560,180 L0,180 Z"
              fill="url(#fill)"
            />
            <path
              d="M0,100 L40,96 L80,102 L120,90 L160,94 L200,88 L240,110 L280,70 L320,92 L360,86 L400,90 L440,84 L480,88 L520,82 L560,86"
              fill="none"
              stroke="#3DDCFF"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle cx="280" cy="70" r="3.5" fill="#3DDCFF" />
          </svg>
        </div>
      </div>
    </aside>
  );
}

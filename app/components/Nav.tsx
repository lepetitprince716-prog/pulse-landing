export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="logo">
          <span className="logo-mark" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h2l1.2-3 1.6 6L8 4.5 9.2 7H13"
                stroke="#3DDCFF"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Pulse
        </div>
        <div className="nav-actions">
          <a className="link-quiet" href="#">
            Docs
          </a>
          <a className="btn btn-primary" href="#">
            Start monitoring
          </a>
        </div>
      </div>
    </header>
  );
}

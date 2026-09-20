import { ProductPanel } from "./ProductPanel";

export function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="eyebrow">
          <span className="dot" /> Live service heartbeat
        </div>
        <h1>Keep every service breathing.</h1>
        <p className="lede">
          Pulse watches latency, errors, and uptime as one quiet signal — so you
          notice the skip before users do.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#">
            Start monitoring
          </a>
          <a className="btn btn-ghost" href="#">
            Read the docs
          </a>
        </div>
      </div>
      <ProductPanel />
    </section>
  );
}

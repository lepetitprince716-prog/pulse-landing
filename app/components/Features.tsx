const cards = [
  {
    n: "01",
    title: "Unified heartbeat",
    body: "Latency, errors, and uptime collapse into one rhythm you can read in a glance.",
  },
  {
    n: "02",
    title: "Quiet alerts",
    body: "Page only when the pattern breaks — not on every blip in a noisy deploy window.",
  },
  {
    n: "03",
    title: "One panel",
    body: "A single dark surface for on-call. No dashboard collage, no decorative glow.",
  },
];

export function Features() {
  return (
    <section className="features">
      <div className="features-head">
        <h2>Signal without the noise.</h2>
        <p>
          Three checks that stay out of your way until something actually skips
          a beat.
        </p>
      </div>
      <div className="grid3">
        {cards.map((c) => (
          <article className="card" key={c.n}>
            <div className="card-icon">{c.n}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

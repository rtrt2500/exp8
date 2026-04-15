import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section className="hero fade-in">
      <p className="kicker">React Router + Express + JWT</p>
      <h1>Secure routes without the boring boilerplate.</h1>
      <p className="hero-subtext">
        Create an account, sign in, and jump into a protected dashboard flow with token persistence
        and automatic auth guards already wired in.
      </p>

      <div className="hero-grid">
        <article className="stat">
          <span className="stat-label">Route guard</span>
          <span className="stat-value">Instant</span>
        </article>
        <article className="stat">
          <span className="stat-label">Auth state</span>
          <span className="stat-value">Persistent</span>
        </article>
        <article className="stat">
          <span className="stat-label">Stack</span>
          <span className="stat-value">Vite + Express</span>
        </article>
      </div>

      <div className="hero-actions">
        <Link to="/register" className="btn primary">
          Register
        </Link>
        <Link to="/dashboard" className="btn secondary">
          Open dashboard
        </Link>
      </div>
    </section>
  );
};

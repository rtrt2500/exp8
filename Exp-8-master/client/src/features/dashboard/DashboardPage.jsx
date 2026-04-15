import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const { data } = await api.get("/users/me");
        setMe(data.user);
      } catch (err) {
        setError(err.response?.data?.message || "Could not load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  return (
    <section className="card fade-in">
      <p className="kicker">Private Area</p>
      <h2>Protected dashboard</h2>
      <p className="subtle">Only authenticated sessions can access this profile data.</p>

      {loading ? <p className="subtle">Loading secure data...</p> : null}
      {!loading && error ? <p className="error">{error}</p> : null}
      {!loading && me ? (
        <div className="dashboard-grid">
          <article className="dashboard-tile">
            <h3>Account ID</h3>
            <p>{me.id}</p>
          </article>
          <article className="dashboard-tile">
            <h3>Display Name</h3>
            <p>{me.name}</p>
          </article>
          <article className="dashboard-tile">
            <h3>Email</h3>
            <p>{me.email}</p>
          </article>
        </div>
      ) : null}
    </section>
  );
};

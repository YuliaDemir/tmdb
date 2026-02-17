"use client";

import { useState } from "react";

type Item = {
  id: number;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  overview?: string;
  poster_path?: string | null;
};

export default function Home() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setItems(data.results ?? []);
    setLoading(false);
  }

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>TMDB Search</h1>

      <form onSubmit={onSearch} style={{ display: "flex", gap: 8 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Matrix, Interstellar…"
          style={{ flex: 1, padding: 8 }}
        />
        <button disabled={loading || !q.trim()} style={{ padding: "8px 12px" }}>
          {loading ? "..." : "Search"}
        </button>
      </form>

      <p style={{ marginTop: 16, opacity: 0.7 }}>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

      <ul style={{ marginTop: 16, padding: 0, listStyle: "none" }}>
        {items.map((x) => (
          <li key={x.id} style={{ padding: 12, border: "1px solid #ddd", borderRadius: 12, marginBottom: 10 }}>
            <b>{x.title ?? x.name}</b>{" "}
            <span style={{ opacity: 0.7 }}>
              {(x.release_date ?? x.first_air_date ?? "").slice(0, 4)}
            </span>
            <p style={{ marginTop: 8 }}>{x.overview}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
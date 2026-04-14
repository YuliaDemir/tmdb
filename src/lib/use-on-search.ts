import { useState } from "react";

import { Film } from "@/src/types";

export function useOnSearch() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Film[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function onSearch(q: string) {
    const query = q.trim();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      setItems(data.results ?? []);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, items, error, onSearch };
}

"use client";

import { List, Main } from "@components";
import { Header } from "@components";
import { useMemo, useState } from "react";


export default function Home() {
  const [items, setItems] = useState<Item[]>([])
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setItems(data.results ?? []);
    } finally {
      setLoading(false);
    }
  }

  const sortedItems = useMemo(() => {
  return items.toSorted(
      (a, b) =>
        (b.vote_average ?? 0) - (a.vote_average ?? 0) ||
        (b.vote_count ?? 0) - (a.vote_count ?? 0)
    );
}, [items]);

  return (
    <Main>
      <Header />

      <div className="relative mx-auto max-w-3xl px-4 pb-14 pt-8 sm:px-6">
        <form
          onSubmit={onSearch}
          className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl
                     shadow-[0_10px_35px_rgba(0,0,0,0.45)]"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                ⌕
              </span>

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Matrix, Interstellar…"
                className="w-full rounded-xl border border-white/10 bg-[#0B0B10]/70 py-3 pl-9 pr-3 text-sm text-zinc-50
                           placeholder:text-zinc-500 shadow-inner shadow-black/20
                           focus:outline-none focus:ring-2 focus:ring-[#FADD09]/60 focus:border-[#FADD09]/30"
              />
              <div className="pointer-events-none absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-[#FADD09]/30 to-transparent opacity-70" />
            </div>

            <button
              disabled={loading || !q.trim()}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold
                         text-[#07070A] transition
                         bg-gradient-to-b from-[#FADD09] to-[#E6C707]
                         shadow-[0_10px_25px_rgba(250,221,9,0.18)]
                         hover:shadow-[0_14px_35px_rgba(250,221,9,0.22)]
                         active:translate-y-[1px]
                         disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/25 border-t-black" />
                  Searching…
                </>
              ) : (
                <>
                  <span className="inline-flex items-center gap-2">
                    Search
                    <span className="opacity-70 group-hover:opacity-100">→</span>
                  </span>
                </>
              )}
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] text-zinc-400">
              Tip: try <span className="text-zinc-200">“Dune”</span>, <span className="text-zinc-200">“Fight Club”</span>, <span className="text-zinc-200">“Dark”</span>
            </p>

            <span className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-300">
              TMDB powered
            </span>
          </div>
        </form>

        <p className="mt-4 text-xs text-zinc-400">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>

       {items.length > 0 && <List items={sortedItems} />}

        {!items.length && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-zinc-300 backdrop-blur-xl">
            Try searching for something like{" "}
            <span className="text-zinc-50">“Dune”</span>,{" "}
            <span className="text-zinc-50">“Fight Club”</span>,{" "}
            <span className="text-zinc-50">“Dark”</span>.
          </div>
        )}
      </div>
    </Main>
  );
}
"use client";

import { List, Main, Form, Header } from "@components";
import { useMemo } from "react";

import { useOnSearch } from "@/src/lib/use-on-search";

export default function Home() {
  const {loading, items, error, onSearch} = useOnSearch();

  const sortedItems = useMemo(() => {
    return items.toSorted(
      (a, b) =>
        (b.vote_average ?? 0) - (a.vote_average ?? 0) ||
        (b.vote_count ?? 0) - (a.vote_count ?? 0),
    );
  }, [items]);

  return (
    <>
      <Header />
      <Main>
        <div className="relative mx-auto max-w-3xl px-4 pb-14 pt-8 sm:px-6">
          <Form onSearch={onSearch} loading={loading} />

          <p className="mt-4 text-xs text-zinc-400">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
          {(error && (
            <div className="mt-10 rounded-2xl border border-red-500 bg-red-500/10 p-6 text-sm text-red-400 backdrop-blur-xl">
              {error}
            </div>
          )) ||
            (items.length > 0 && <List items={sortedItems} />)}

          {!items.length && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-zinc-300 backdrop-blur-xl">
              Type something into e{" "}
              <span className="text-zinc-50">“Dune”</span>,{" "}
              <span className="text-zinc-50">“Fight Club”</span>,{" "}
              <span className="text-zinc-50">“Dark”</span>.
            </div>
          )}
        </div>
      </Main>
    </>
  );
}

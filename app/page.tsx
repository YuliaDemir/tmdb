"use client";

import { List, Main, Form, Header } from "@components";
import { useMemo } from "react";

import { useOnSearch } from "@/src/lib/use-on-search";
import { Film } from "@/src/types";
import { containerClass, errorPanelClass, infoPanelClass, silverText, zincText } from "@tconst";
import { cn } from "@/src/lib/utils";

const byRatingThenVotes = (a: Film, b: Film) =>
  (b.vote_average ?? 0) - (a.vote_average ?? 0) ||
  (b.vote_count ?? 0) - (a.vote_count ?? 0);

export default function Home() {
  const { loading, items, error, onSearch } = useOnSearch();

  const sortedItems = useMemo(() => {
    return items.toSorted(byRatingThenVotes);
  }, [items]);

  return (
    <>
      <Header />
      <Main>
        <div className={containerClass}>
          <Form onSearch={onSearch} loading={loading} />

          <p className={cn(silverText, "mt-4 text-xs")}>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
          {(error && (
            <div className={errorPanelClass}>
              {error}
            </div>
          )) ||
            (items.length > 0 && <List items={sortedItems} />)}

          {!items.length && (
            <div className={infoPanelClass}>
              Type something into e <span className={zincText}>“Dune”</span>
              , <span className={zincText}>“Fight Club”</span>,{" "}
              <span className={zincText}>“Dark”</span>.
            </div>
          )}
        </div>
      </Main>
    </>
  );
}

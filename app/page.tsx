"use client";

import { List, Form } from "@components";
import { useMemo } from "react";

import { useOnSearch } from "@/src/lib/use-on-search";
import { Film } from "@/src/types";
import styles from "./page.module.scss";

const byRatingThenVotes = (a: Film, b: Film) =>
  (b.vote_average ?? 0) - (a.vote_average ?? 0) ||
  (b.vote_count ?? 0) - (a.vote_count ?? 0);

export default function Home() {
  const { loading, items, error, onSearch } = useOnSearch();

  const sortedItems = useMemo(() => {
    return items.toSorted(byRatingThenVotes);
  }, [items]);

  return (
    <div className={styles.container}>
      <Form onSearch={onSearch} loading={loading} />

      <p className={styles.note}>
        This product uses the TMDB API but is not endorsed or certified by
        TMDB.
      </p>

      {error ? (
        <div className={styles.errorPanel}>{error}</div>
      ) : items.length > 0 ? (
        <List items={sortedItems} />
      ) : (
        <div className={styles.infoPanel}>
          Type something into e <span className={styles.highlight}>“Dune”</span>,{" "}
          <span className={styles.highlight}>“Fight Club”</span>,{" "}
          <span className={styles.highlight}>“Dark”</span>.
        </div>
      )}
    </div>
  );
}
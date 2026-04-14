"use client";

import { Input, Loading } from "@components";
import { useState } from "react";

import { tryFilms } from "@/src/constants";
import styles from "./form.module.scss";

export const Form = ({
  onSearch,
  loading,
}: {
  onSearch: (q: string) => void;
  loading: boolean;
}) => {
  const [q, setQ] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(q);
      }}
      className={styles.form}
    >
      <div className={styles.row}>
        <Input value={q} onChange={setQ} />

        <button
          disabled={loading || !q.trim()}
          className={styles.button}
        >
          {loading ? (
            <Loading text="Searching..." />
          ) : (
            <span className={styles.buttonContent}>
              Search
              <span className={styles.arrow}>→</span>
            </span>
          )}
        </button>
      </div>

      <div className={styles.footer}>
        <p className={styles.text}>
          Tip: try{" "}
          {tryFilms.map((film, i) => (
            <span key={i} className={styles.highlight}>
              “{film}”
              {i < tryFilms.length - 1 ? ", " : ""}
            </span>
          ))}
          .
        </p>
      </div>
    </form>
  );
};
"use client";

import { Poster, WatchListButton } from "@components";
import Link from "next/link";
import { memo } from "react";

import { Film } from "@/src/types";
import styles from "./line.module.scss";

export const Line = memo(({ item }: { item: Film }) => {
  return (
    <div className={styles.line}>
      <div className={styles.glow} />

      <Link href={`film/${item.id}`} className={styles.link}>
        <Poster
          title={item.title ?? item.name ?? "Poster"}
          posterPath={item.poster_path || ""}
        />

        <div className={styles.content}>
          <div className={styles.topRow}>
            <div className={styles.titleWrap}>
              <h2 className={styles.title}>
                {item.title ?? item.name}
              </h2>

              <p className={styles.year}>
                {(item.release_date ?? item.first_air_date ?? "").slice(0, 4) ||
                  "—"}
              </p>
            </div>

            <div className={styles.rating}>
              ⭐ {item.vote_average?.toFixed(1) ?? "—"}{" "}
              {item.vote_count ? `(${item.vote_count})` : ""}
            </div>
          </div>

          <p className={styles.overview}>
            {item.overview || "No description."}
          </p>

          <WatchListButton film={item} />
        </div>
      </Link>

      <div className={styles.divider} />
    </div>
  );
});

Line.displayName = "Line";
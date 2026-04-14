"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { List } from "@components";

import styles from "./watch-list.module.scss";

export const WatchList = () => {
  const watchList = useSelector((state: RootState) => state.watchList);

  return (
    <div className={styles.container}>
      {watchList.length > 0 ? (
        <List items={watchList} />
      ) : (
        <div className={styles.empty}>
          Your watchlist is empty. Start adding movies and series to your
          watchlist by searching for them and clicking the{" "}
          <span className={styles.highlight}>
            Add to Watchlist
          </span>{" "}
          button on their details page.
        </div>
      )}
    </div>
  );
};
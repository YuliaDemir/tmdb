"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/src/store/store";
import { addItem, removeItem } from "@/src/store/watch-list-slice";
import type { Film } from "@/src/types";
import styles from "./add-film-to-watchlist.module.scss";

type Props = {
  film: Film;
  className?: string;
};

export function WatchListButton({ film, className }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const inWatchList = useSelector((state: RootState) =>
    state.watchList.some((cur) => cur.id === film.id),
  );

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (inWatchList) {
      dispatch(removeItem(film.id));
    } else {
      dispatch(addItem(film));
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={[styles.button, className ?? ""].join(" ")}
      aria-pressed={inWatchList}
    >
      {inWatchList ? "✓ Added." : "+ Add to watchlist"}
    </button>
  );
}

"use client";

import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "@/src/store/store";

import { addItem, removeItem } from "@/src/store/watch-list-slice";

import type { Film } from "../types";

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
      className={[
        "pointer-events-auto inline-flex items-center gap-2 text-xs",
        "text-zinc-300 hover:text-zinc-50 transition",
        "rounded-md px-2 py-1 bg-white/5 hover:bg-white/10",
        "border border-white/10",
        className ?? "",
      ].join(" ")}
      aria-pressed={inWatchList}
    >
      {inWatchList ? "✓ Added." : "+ Add to watchlist"}
    </button>
  );
}

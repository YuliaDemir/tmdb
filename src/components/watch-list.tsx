"use client";
import { zincText } from "@tconst";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";
import { List } from "./list";

export const WatchList = () => {
  const watchList = useSelector((state: RootState) => state.watchList);

  return (
    <div className="relative mx-auto max-w-3xl px-1 py-2 sm:px-1  max-h-[70vh] overflow-y-auto">
      {watchList.length > 0 ? (
        <List items={watchList} />
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 text-sm text-zinc-300 backdrop-blur-xl">
          Your watchlist is empty. Start adding movies and series to your
          watchlist by searching for them and clicking the{" "}
          <span className={zincText}>Add to Watchlist</span> button on their
          details page.
        </div>
      )}
    </div>
  );
};

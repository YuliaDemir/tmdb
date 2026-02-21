import Image from "next/image";
import { memo } from "react";

import { Item } from "../types";

const TMDB_IMG = "https://image.tmdb.org/t/p/w500";

export const Line = memo(({ item }: { item: Item }) => {
  const posterPath = item.poster_path
    ? TMDB_IMG + item.poster_path
    : "/no-poster.png";
  return (
    <>
      <div
        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition
                              [filter:blur(18px)]
                              -inset-x-10 -inset-y-8
                              [background:radial-gradient(600px_circle_at_30%_0%,rgba(250,221,9,0.10),transparent_55%),radial-gradient(500px_circle_at_80%_10%,rgba(205,31,21,0.08),transparent_60%)]"
      />
      <div className="relative flex items-start gap-4">
        <Image
          src={posterPath}
          alt={item.title ?? item.name ?? "Poster"}
          width={150}
          height={225}
        />
        <div className="flex flex-col gap-4 relative w-full">
          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold tracking-tight text-zinc-50">
                {item.title ?? item.name}
              </h2>
              <p className="mt-0.5 text-xs text-zinc-400">
                {(item.release_date ?? item.first_air_date ?? "").slice(0, 4) ||
                  "—"}
              </p>
            </div>

            <div className="text-xs text-zinc-300">
              ⭐ {item.vote_average?.toFixed(1) ?? "—"}{" "}
              {item.vote_count ? `(${item.vote_count})` : ""}
            </div>
          </div>

          <p className="relative mt-3 text-sm leading-relaxed text-zinc-300 line-clamp-4">
            {item.overview || "No description."}
          </p>
        </div>
      </div>
      <div className="relative mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </>
  );
});

Line.displayName = "Line";

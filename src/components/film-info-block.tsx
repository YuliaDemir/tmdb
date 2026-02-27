import { InfoRounded } from "@components";
import { zincText, silverText } from "@tconst";

import { cn } from "../lib/utils";
import { FilmApiResponse } from "../types";
import { FilmInfoProps } from "../types/props";

export const FilmInfoBlock = ({
  film,
  meta,
}: {
  film: FilmApiResponse;
  meta: FilmInfoProps;
}) => {
  return (
    <div className="min-w-0 flex-1">
      <h1 className={cn(zincText, "text-2xl font-semibold tracking-tight")}>
        {film.title || "Untitled"}
      </h1>

      <div className={cn(silverText, "mt-2 flex flex-wrap gap-2 text-xs")}>
        <InfoRounded
          data={
            [
              meta.year,
              meta.runtime,
              meta.rating
                ? `★ ${meta.rating}` + (meta.votes ? ` · ${meta.votes}` : "")
                : null,
            ] as string[]
          }
        />
        <InfoRounded
          data={[
            <>
              Director: <span className={zincText}>{film?.director?.name}</span>
            </>,
          ]}
        />
      </div>

      {film.genres?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          <InfoRounded
            data={film.genres.slice(0, 8).map((g) => (
              <span
                key={g.id}
                className="px-2.5 py-1 text-[11px] text-zinc-300"
              >
                {g.name}
              </span>
            ))}
          />
        </div>
      ) : null}

      <p className={cn(silverText, "mt-5 leading-relaxed")}>
        {film.overview || "No overview yet."}
      </p>
    </div>
  );
};

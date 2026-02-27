import { BackButton, FilmInfoBlock, Poster } from "@components";
import {
  BG_RADIAL_GLOW,
  containerClass,
  errorPanelClass,
  panelBase,
} from "@tconst";

import { cn, getFilm, getHourMinutesFilmDuration } from "@/src/lib/utils";

import { FilmApiResponse } from "../types";

export const Film = async ({ id }: { id: string }) => {
  let data: FilmApiResponse | null = null;
  let error: string | null = null;

  try {
    data = await getFilm(id);
  } catch (e: unknown) {
    error = e instanceof Error ? e.message : "Something went wrong";
  }

  const meta = {
    year: data?.release_date?.slice(0, 4),
    runtime: getHourMinutesFilmDuration(data?.runtime),
    rating:
      typeof data?.vote_average === "number"
        ? data.vote_average.toFixed(1)
        : null,
    votes:
      typeof data?.vote_count === "number"
        ? data.vote_count.toLocaleString()
        : null,
  };

  return (
    <>
      <div className={BG_RADIAL_GLOW} />
      <div className="pointer-events-none fixed inset-0 bg-[#07070A]/70" />
      <div className={containerClass}>
        <BackButton />
        {error && <div className={cn(errorPanelClass, "mt-6")}>{error}</div>}
        {data && !error && (
          <div className={cn(panelBase, "mt-6 overflow-hidden p-0")}>
            <div className="p-6 sm:p-7">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-[0_10px_35px_rgba(0,0,0,0.45)]">
                  <Poster
                    title={data.title}
                    posterPath={data.poster_path}
                    size="md"
                  />
                </div>
                <FilmInfoBlock film={data} meta={meta} />
              </div>
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#FADD09]/25 to-transparent" />
          </div>
        )}
      </div>
    </>
  );
};

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { STORAGE_KEY, TMDB_IMG } from "../constants";
import { Credits, Film, FilmApiResponse, TmdbPosterSize } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getHourMinutesFilmDuration = (min?: number) => {
  if (!min || min <= 0) return null;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h}h ${m}m` : `${m}m`;
};

export const getAbsolutePosterPath = (
  path?: string | null,
  size: TmdbPosterSize = "w342",
): string => (path ? `${TMDB_IMG}${size}${path}` : "/no-poster.png");

export const getFilm = async (id: string): Promise<FilmApiResponse> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=credits`,
    {
      headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` },
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  );

  if (!res.ok) throw new Error(`TMDB error: ${res.status}`);
  const data = await res.json();

  const director = data?.credits?.crew?.find(
    (p: Credits["crew"][number]) => p.job === "Director",
  );
  return { ...data, director };
};

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  return "http://localhost:3000";
};

export function loadWatchList(): Film[] {
  if (typeof window === "undefined") return [];
  try {
    const watchList = localStorage.getItem(STORAGE_KEY);
    if (!watchList) return [];
    const parsed = JSON.parse(watchList);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

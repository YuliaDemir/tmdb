export type Film = {
  id: number;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  overview?: string;
  poster_path?: string | null;
  vote_average?: number;
  vote_count?: number;
};

export type Credits = {
  cast: {
    id: number;
    name: string;
    character?: string;
    profile_path?: string | null;
  }[];
  crew: { id: number; name: string; job?: string; department?: string }[];
};

export type FilmDetails = {
  id: number;
  title?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  release_date?: string;
  runtime?: number;
  vote_average?: number;
  vote_count?: number;
  genres?: { id: number; name: string }[];
  credits?: Credits;
};

export type FilmApiResponse = FilmDetails & {
  director?: { id: number; name: string; job?: string } | null;
};

export type TmdbPosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

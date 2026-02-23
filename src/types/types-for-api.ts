export type TmdbMovieDetails = {
  id: number;

  // базовое
  title: string;
  original_title?: string;
  original_language?: string;
  overview?: string | null;
  tagline?: string | null;
  status?: string; // Released / Post Production / etc
  adult?: boolean;
  video?: boolean;

  // даты/время
  release_date?: string; // "YYYY-MM-DD"
  runtime?: number | null; // minutes

  // рейтинги/популярность
  popularity?: number;
  vote_average?: number;
  vote_count?: number;

  // медиа
  poster_path?: string | null;
  backdrop_path?: string | null;

  // ссылки
  homepage?: string | null;
  imdb_id?: string | null;

  // деньги
  budget?: number;
  revenue?: number;

  // коллекции/жанры/страны/языки
  genres?: Array<{ id: number; name: string }>;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path?: string | null;
    backdrop_path?: string | null;
  } | null;

  production_companies?: Array<{
    id: number;
    name: string;
    logo_path?: string | null;
    origin_country?: string;
  }>;

  production_countries?: Array<{
    iso_3166_1: string;
    name: string;
  }>;

  spoken_languages?: Array<{
    english_name?: string;
    iso_639_1: string;
    name: string;
  }>;

  credits?: {
    cast: Array<{
      id: number;
      name: string;
      character?: string;
      profile_path?: string | null;
      order?: number;
    }>;
    crew: Array<{
      id: number;
      name: string;
      job?: string;
      department?: string;
      profile_path?: string | null;
    }>;
  };

  videos?: {
    results: Array<{
      id: string;
      key: string; // youtube key
      name: string;
      site: "YouTube" | string;
      type: string; // Trailer / Teaser / etc
      official?: boolean;
      published_at?: string;
    }>;
  };

  images?: {
    backdrops: Array<{
      file_path: string;
      width: number;
      height: number;
      aspect_ratio: number;
      vote_average: number;
      vote_count: number;
    }>;
    posters: Array<{
      file_path: string;
      width: number;
      height: number;
      aspect_ratio: number;
      vote_average: number;
      vote_count: number;
    }>;
  };

  recommendations?: {
    page: number;
    results: Array<{
      id: number;
      title?: string;
      release_date?: string;
      overview?: string;
      poster_path?: string | null;
      backdrop_path?: string | null;
      vote_average?: number;
      vote_count?: number;
      popularity?: number;
    }>;
    total_pages: number;
    total_results: number;
  };
  origin_country?: string[];
};
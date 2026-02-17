import { NextResponse } from "next/server";
import { tmdbFetch } from "@/src/lib/tmdb";

type TmdbSearchResponse = {
  page: number;
  results: Array<{
    id: number;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    overview?: string;
    poster_path?: string | null;
  }>;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  if (!q) return NextResponse.json({ page: 1, results: [] });

  const data = await tmdbFetch<TmdbSearchResponse>("/search/multi", {
    query: q,
    include_adult: false,
    language: "ru-RU",
    page: 1,
  });

  return NextResponse.json(data);
}
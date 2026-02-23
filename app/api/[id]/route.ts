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
    const id = req.url.split("/").pop();
    const data = await tmdbFetch<TmdbSearchResponse>(`/movie/${id}`, {
        include_adult: false,
        language: "en-EN",
        page: 1,
    });

    return NextResponse.json(data);
}

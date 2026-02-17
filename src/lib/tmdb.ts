const TMDB_BASE = "https://api.themoviedb.org/3";

export async function tmdbFetch<T>(
  path: string,
  params?: Record<string, string | number | boolean | undefined>
): Promise<T> {
    const token = process.env.TMDB_TOKEN;
    if (!token) throw new Error("TMDB_TOKEN is missing");

    const url = new URL(TMDB_BASE + path);

    if (params) {
        Object.entries(params).forEach(([k, v]) => v !== undefined && url.searchParams.set(k, String(v)));
    }

    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
    });

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`TMDB error ${res.status}: ${text}`);
    }
    return res.json() as Promise<T>;
}
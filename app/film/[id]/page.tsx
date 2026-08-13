import { Film } from "@components";

export const dynamicParams = true;
export const revalidate = 60 * 60 * 24 * 7;

export async function generateStaticParams() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  );

  const data = await res.json();

  return data.results.map((film: { id: number }) => ({
    id: String(film.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Film id={id} />;
}

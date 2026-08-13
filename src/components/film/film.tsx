import { BackButton, FilmInfoBlock, Poster } from "@components";

import { getFilm, getHourMinutesFilmDuration } from "@/src/lib/utils";
import { FilmApiResponse } from "@/src/types";
import styles from "./film.module.scss";

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
      <div className={styles.glow} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <BackButton />

        {error && <div className={styles.errorPanel}>{error}</div>}

        {data && !error && (
          <div className={styles.panel}>
            <div className={styles.content}>
              <div className={styles.layout}>
                <div className={styles.posterCard}>
                  <Poster
                    title={data.title}
                    posterPath={data.poster_path}
                    size="md"
                  />
                </div>

                <FilmInfoBlock film={data} meta={meta} />
              </div>
            </div>

            <div className={styles.divider} />
          </div>
        )}
      </div>
    </>
  );
};
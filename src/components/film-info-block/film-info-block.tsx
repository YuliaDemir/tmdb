import { InfoRounded } from "@components";
import styles from "./film-info-block.module.scss";

import { FilmApiResponse } from "@/src/types";
import { FilmInfoProps } from "@/src/types/props";

export const FilmInfoBlock = ({
  film,
  meta,
}: {
  film: FilmApiResponse;
  meta: FilmInfoProps;
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {film.title || "Untitled"}
      </h1>

      <div className={styles.meta}>
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
              Director:{" "}
              <span className={styles.highlight}>
                {film?.director?.name}
              </span>
            </>,
          ]}
        />
      </div>

      {film.genres?.length ? (
        <div className={styles.genres}>
          <InfoRounded
            data={film.genres.slice(0, 8).map((g) => (
              <span key={g.id} className={styles.genreItem}>
                {g.name}
              </span>
            ))}
          />
        </div>
      ) : null}

      <p className={styles.description}>
        {film.overview || "No overview yet."}
      </p>
    </div>
  );
};
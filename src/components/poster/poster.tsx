"use client";

import Image from "next/image";
import { useState } from "react";

import { getAbsolutePosterPath } from "@/src/lib/utils";
import { Modal } from "@components";
import styles from "./poster.module.scss";

export const Poster = ({
  title,
  posterPath,
  size = "sm",
}: {
  title?: string | null;
  posterPath?: string | null;
  size?: "sm" | "md";
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handlePosterClick(e: React.MouseEvent) {
    if (posterPath) {
      e.stopPropagation();
      setOpenModal(true);
    }
  }

  return (
    <>
      <Image
        src={getAbsolutePosterPath(posterPath)}
        alt={title ?? "Poster"}
        width={size === "md" ? 300 : 150}
        height={size === "md" ? 450 : 225}
        onClick={handlePosterClick}
        className={[
          styles.poster,
          posterPath ? styles.clickable : "",
        ].join(" ")}
      />

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={title || "Poster"}
      >
        <Image
          src={getAbsolutePosterPath(posterPath)}
          alt={title || "Poster"}
          width={300}
          height={450}
          className={styles.modalImage}
        />
      </Modal>
    </>
  );
};
"use client";

import Image from "next/image";
import { useState } from "react";

import { TMDB_IMG } from "../constants";
import { Modal } from "./modal";

export const Poster = ({
  title,
  posterPath,
}: {
  title: string;
  posterPath: string;
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const absolutePosterPath = posterPath
    ? TMDB_IMG + posterPath
    : "/no-poster.png";

  function handlePosterClick() {
    if (posterPath) {
      setOpenModal(true);
    }
  }

  return (
    <>
      <Image
        src={absolutePosterPath}
        alt={title ?? "Poster"}
        width={150}
        height={225}
        onClick={handlePosterClick}
        className={posterPath && "cursor-pointer"}
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} title={title}>
        <Image
          src={absolutePosterPath}
          alt={title || "Poster"}
          width={300}
          height={450}
          className="rounded-lg"
        />
      </Modal>
    </>
  );
};

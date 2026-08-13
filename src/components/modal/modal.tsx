"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "@/src/types/props";
import styles from "./modal.module.scss";

export function Modal({
  open,
  onClose,
  title,
  children,
  closeOnOverlayClick = true,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className={styles.root}
      onMouseDown={(e) => {
        if (!closeOnOverlayClick) return;
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.overlay} />
      <div className={styles.glow} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Modal"}
        className={styles.dialog}
      >
        <div className={styles.topLine} />

        <div className={styles.header}>
          <div className={styles.titleWrap}>
            {title ? <h2 className={styles.title}>{title}</h2> : <span />}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className={styles.closeButton}
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>{children}</div>

        <div className={styles.bottomGlow} />
      </div>
    </div>,
    document.body,
  );
}
"use client";

import { Modal, Login, Register } from "@components";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./header.module.scss";
import { cn } from "@/src/lib/utils";

const logoPath = "/logo1.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openedModal, setOpenedModal] = useState<"register" | "login" | null>(
    null,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={cn(
          styles.shell,
          scrolled ? styles.scrolled : styles.notScrolled,
        )}
      >
        <div className={styles.glow} />
        <div className={styles.topLine} />

        <div className={styles.container}>
          <div className={styles.inner}>
            <Image
              src={logoPath}
              alt="Popcorn Picks"
              width={60}
              height={60}
            />

            <div className={styles.actions}>
              <div
                onClick={() => setOpenedModal("login")}
                className={styles.actionButton}
              >
                log in
              </div>

              <div
                onClick={() => setOpenedModal("register")}
                className={styles.actionButton}
              >
                register
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            styles.bottomLine,
            scrolled
              ? styles.bottomLineScrolled
              : styles.bottomLineNotScrolled,
          )}
        />
      </div>

      <Modal
        open={!!openedModal}
        onClose={() => setOpenedModal(null)}
        title={openedModal === "login" ? "Log in" : "Register"}
      >
        {openedModal === "login" ? <Login /> : <Register />}
      </Modal>
    </header>
  );
};
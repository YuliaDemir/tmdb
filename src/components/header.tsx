"use client";

import { Modal, Login, Register } from "@components";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <header className="sticky top-0 z-50">
      <div
        className={[
          "relative border-b border-white/10",
          "bg-[#07070A]/55 backdrop-blur-xl",
          "transition",
          scrolled ? "shadow-[0_18px_60px_rgba(0,0,0,0.55)]" : "shadow-none",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_15%_0%,rgba(250,204,21,0.14),transparent_55%),radial-gradient(700px_circle_at_85%_25%,rgba(239,68,68,0.10),transparent_55%)]" />

        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FADD09]/35 to-transparent opacity-80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 py-1">
            <Image
              src={logoPath}
              alt={"Popcorn Picks"}
              width={60}
              height={60}
            />
            <div className="flex  gap-4">
              <div
                onClick={() => setOpenedModal("login")}
                className="hidden shrink-0 sm:inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-1.5xl text-zinc-900 cursor-pointer"
              >
                log in
              </div>
              <div
                onClick={() => setOpenedModal("register")}
                className="hidden shrink-0 sm:inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-1.5xl text-zinc-900 cursor-pointer"
              >
                register
              </div>
            </div>
          </div>
        </div>

        <div
          className={[
            "pointer-events-none absolute inset-x-3 bottom-0 h-px",
            "bg-gradient-to-r from-transparent via-white/10 to-transparent",
            "transition-opacity",
            scrolled ? "opacity-100" : "opacity-60",
          ].join(" ")}
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

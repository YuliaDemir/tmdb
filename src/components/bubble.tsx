"use client";

import { WatchList } from "@components";
import { useState } from "react";

const label = "Your Watchlist";

export function WatchlistBubble() {
  const [open, setOpen] = useState(false);

  const cornerClasses = "bottom-6 right-6";

  return (
    <>
      <div className={`fixed z-50 ${cornerClasses}`}>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          aria-label={label}
          className={[
            "group inline-flex items-center gap-3",
            "h-12 rounded-full",
            "border border-white/10 bg-white/6 backdrop-blur-xl",
            "shadow-[0_10px_35px_rgba(0,0,0,0.45)]",
            "transition-all duration-300 ease-out",
            "hover:border-white/16 hover:bg-white/8",
            "focus:outline-none focus:ring-2 focus:ring-[#FADD09]/60 focus:border-[#FADD09]/30",
            open ? "w-62 px-0" : "w-12 px-0",
          ].join(" ")}
        >
          <span className="relative grid h-12 w-12 place-items-center rounded-full">
            <span
              className={[
                "absolute inset-1 rounded-full",
                "bg-linear-to-b from-white/10 to-white/4",
                "border border-white/10",
                "shadow-inner shadow-black/20",
                "transition",
                "group-hover:border-[#FADD09]/25",
              ].join(" ")}
            />
            <span className="relative text-zinc-100">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 6h12M9 12h12M9 18h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4.5 6h.01M4.5 12h.01M4.5 18h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px bg-linear-to-r from-transparent via-[#FADD09]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
          </span>

          <div
            className={[
              "min-w-0 pr-1 text-sm font-medium text-zinc-100",
              "transition-all duration-300",
              open
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2 pointer-events-none",
            ].join(" ")}
          >
            <WatchList />
          </div>
        </div>
      </div>
    </>
  );
}

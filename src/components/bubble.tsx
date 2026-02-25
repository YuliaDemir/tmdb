"use client";

import { WatchList } from "@components";
import { useState } from "react";
import { cn } from "../lib/utils";
import {
  watchlistCorner,
  bubbleWrapper,
  bubbleBase,
  bubbleOpen,
  bubbleClosed,
  iconWrap,
  iconBg,
  iconFg,
  iconUnderline,
  panelOpen,
  panelClosed,
  panel,
} from "@tconst";

const label = "Your Watchlist";

export function WatchlistBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(bubbleWrapper, watchlistCorner)}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label={label}
        className={cn(bubbleBase, open ? bubbleOpen : bubbleClosed)}
      >
        <span className={iconWrap}>
          <span className={iconBg} />
          <span className={iconFg}>
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

          <span className={iconUnderline} />
        </span>

        <div className={cn(panel, open ? panelOpen : panelClosed)}>
          <WatchList />
        </div>
      </div>
    </div>
  );
}
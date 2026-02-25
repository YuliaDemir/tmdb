"use client";

import { WatchList, ListIcon } from "@components";
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
  zincText,
} from "@tconst";
import { useState } from "react";

import { cn } from "../lib/utils";

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
            <ListIcon width={18} height={18} className={zincText} />
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

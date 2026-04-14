"use client";

import { WatchList, ListIcon } from "@components";
import {
  bubbleBase,
  bubbleOpen,
  bubbleClosed,
} from "@tconst";
import styles from "./bubble.module.scss";
import { useState } from "react";

import { cn } from "@/src/lib/utils";

const label = "Your Watchlist";

export function WatchlistBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label={label}
        className={cn(bubbleBase, open ? bubbleOpen : bubbleClosed)}
      >
        <span className={styles.iconWrap}>
          <span className={styles.iconBg} />
          <span className={styles.iconFg}>
            <ListIcon width={18} height={18} className={styles.zincText} />
          </span>

          <span className={styles.iconUnderline} />
        </span>

        <div className={cn(styles.panel, open ? styles.panelOpen : styles.panelClosed)}>
          <WatchList />
        </div>
      </div>
    </div>
  );
}

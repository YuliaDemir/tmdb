"use client";

import { WatchList, ListIcon } from "@components";
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
        className={cn(
          styles.bubble,
          open ? styles.bubbleOpen : styles.bubbleClosed
        )}
      >
        <div className={styles.header}>
          <span className={styles.iconWrap}>
            <span className={styles.iconBg} />
            <span className={styles.iconFg}>
              <ListIcon width={18} height={18} className={styles.icon} />
            </span>
            <span className={styles.iconUnderline} />
          </span>

          {open && <span className={styles.title}>Watchlist</span>}
        </div>

        <div
          className={cn(
            styles.panel,
            open ? styles.panelOpen : styles.panelClosed
          )}
        >
          <WatchList />
        </div>
      </div>
    </div>
  );
}
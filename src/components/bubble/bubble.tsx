"use client";

import { WatchList, ListIcon } from "@components";
import styles from "./bubble.module.scss";
import { useState } from "react";

import { cn } from "@/src/lib/utils";

const label = "Your Watchlist";

export function WatchlistBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        aria-label={label}
        className={cn(
          styles.bubble,
          isOpen ? styles.bubbleOpen : styles.bubbleClosed
        )}
      >
        <span className={styles.iconWrap}>
          <span className={styles.iconBg} />
          <span className={styles.iconFg}>
            <ListIcon width={18} height={18} className={styles.zincText} />
          </span>

          <span className={styles.iconUnderline} />
        </span>

        <div className={cn(styles.panel, isOpen ? styles.panelOpen : styles.panelClosed)}>
          <WatchList />
        </div>
      </div>
    </div>
  );
}

import { Line } from "@components";
import { memo } from "react";

import { Film } from "@/src/types";
import styles from "./list.module.scss";

export const List = memo(({ items }: { items: Film[] }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <Line item={item} />
        </li>
      ))}
    </ul>
  );
});

List.displayName = "List";
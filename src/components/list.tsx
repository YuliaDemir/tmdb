import { Line } from "@components";
import { memo } from "react";

import { Film } from "../types";

export const List = memo(({ items }: { items: Film[] }) => {
  return (
    <>
      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl
             shadow-[0_10px_30px_rgba(0,0,0,0.35)]
             transition hover:-translate-y-0.5 hover:border-white/20"
          >
            <Line item={item} />
          </li>
        ))}
      </ul>
    </>
  );
});

List.displayName = "List";

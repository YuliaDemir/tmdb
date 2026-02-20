"use client";
import { Line } from "@components";
import { memo, useState } from "react";

import { Modal } from "./modal";
import { Item } from "../types";

export const List = memo(({ items }: { items: Item[] }) => {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <>
      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li
            onClick={() => setSelected(item)}
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl
             shadow-[0_10px_30px_rgba(0,0,0,0.35)]
             transition hover:-translate-y-0.5 hover:border-white/20"
          >
            <Line item={item} />
          </li>
        ))}
      </ul>
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        <Line item={selected as Item} />
      </Modal>
    </>
  );
});

List.displayName = "List";

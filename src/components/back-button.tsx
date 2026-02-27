import Link from "next/link";

import { cn } from "../lib/utils";

export const BackButton = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/"
        className={cn(
          "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs",
          "text-zinc-200 hover:border-white/16 hover:bg-white/5 transition",
        )}
      >
        <span className="opacity-70">←</span>
        Back
      </Link>
    </div>
  );
};

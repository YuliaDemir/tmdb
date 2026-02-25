import { BG_RADIAL_GLOW, zincText } from "@tconst";

import { cn } from "../lib/utils";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={cn("min-h-screen", "bg-zinc-950", zincText)}>
      <div className={BG_RADIAL_GLOW} />

      {children}
    </main>
  );
};

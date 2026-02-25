import { cn } from "../lib/utils";

export const containerClass =
    "relative mx-auto max-w-3xl px-4 pb-14 pt-8 sm:px-6";

export const panelBase =
    "mt-10 rounded-2xl border p-6 text-sm backdrop-blur-xl";

export const errorPanelClass = cn(panelBase, "border-red-500 bg-red-500/10 text-red-400");
export const infoPanelClass = cn(panelBase, "border-white/10 bg-white/3 text-zinc-300");

export const zincText = "text-zinc-200";
export const silverText = "text-zinc-400";

export const absolute = "pointer-events-none absolute";

export const BG_RADIAL_GLOW = cn(
    "pointer-events-none fixed inset-0 opacity-60",
    "[background:radial-gradient(1200px_circle_at_20%_0%,rgba(250,204,21,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(239,68,68,0.16),transparent_55%)]"
);

export const formClass = cn(infoPanelClass,
    "mt-6 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.45)]"
);

export const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0B0B10]/70 py-3 pl-9 pr-3 text-sm text-zinc-50 " +
    "placeholder:text-zinc-500 shadow-inner shadow-black/20 " +
    "focus:outline-none focus:ring-2 focus:ring-[#FADD09]/60 focus:border-[#FADD09]/30";

export const buttonBaseClass =
    "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold " +
    "text-[#07070A] transition bg-linear-to-b from-[#FADD09] to-[#E6C707] " +
    "shadow-[0_10px_25px_rgba(250,221,9,0.18)] hover:shadow-[0_14px_35px_rgba(250,221,9,0.22)] " +
    "active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none";

export const badgeClass =
    "hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-zinc-300";

export const watchlistCorner = "bottom-6 right-6";

export const bubbleWrapper = "fixed z-50";

export const bubbleBase =
  "group inline-flex items-center gap-3 " +
  "border border-white/10 bg-white/6 backdrop-blur-xl " +
  "shadow-[0_10px_35px_rgba(0,0,0,0.45)] " +
  "transition-width duration-300 ease-out " +
  "hover:border-white/16 hover:bg-white/8 " +
  "focus:outline-none focus:ring-2 focus:ring-[#FADD09]/60 focus:border-[#FADD09]/30";

export const bubbleOpen = "w-xl h-auto rounded-3xl";
export const bubbleClosed = "w-12 h-12 rounded-full";

export const iconWrap = "relative grid h-12 w-12 place-items-center rounded-full";

export const iconBg =
  "absolute inset-1 rounded-full " +
  "bg-linear-to-b from-white/10 to-white/4 " +
  "border border-white/10 " +
  "shadow-inner shadow-black/20 " +
  "transition " +
  "group-hover:border-[#FADD09]/25";

export const iconFg = "relative text-zinc-100";

export const iconUnderline =
  "pointer-events-none absolute inset-x-3 bottom-1 h-px " +
  "bg-linear-to-r from-transparent via-[#FADD09]/30 to-transparent " +
  "opacity-0 transition-opacity duration-300 group-hover:opacity-80";

export const panel =
  "min-w-0 pr-1 text-sm font-medium text-zinc-100 transition-all duration-300";

export const panelOpen = "opacity-100 translate-x-0";
export const panelClosed = "opacity-0 -translate-x-2 pointer-events-none";    
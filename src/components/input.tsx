import { absolute, inputClass, silverText } from "@tconst";

import { cn } from "../lib/utils";

export const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="relative flex-1">
      <span
        className={cn(absolute, "left-3 top-1/2 -translate-y-1/2", silverText)}
      >
        ⌕
      </span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Matrix, Interstellar…"
        className={inputClass}
      />
      <div
        className={cn(
          absolute,
          "inset-x-3 bottom-1 h-px bg-linear-to-r from-transparent via-[#FADD09]/30 to-transparent opacity-70",
        )}
      />
    </div>
  );
};

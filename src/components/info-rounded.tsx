import { ReactNode } from "react";

export const InfoRounded = ({ data }: { data: ReactNode[] }) => {
  data = data.filter(
    (el) => el !== null && el !== undefined && el.toString().trim() !== "",
  );
  return (
    <>
      {data.map((item, index) => (
        <span
          key={index}
          className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1"
        >
          {item}
        </span>
      ))}
    </>
  );
};

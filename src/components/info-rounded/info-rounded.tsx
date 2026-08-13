import { ReactNode } from "react";
import styles from "./info-rounded.module.scss";

export const InfoRounded = ({ data }: { data: ReactNode[] }) => {
  const filtered = data.filter(
    (el) => el !== null && el !== undefined && el.toString().trim() !== "",
  );

  return (
    <>
      {filtered.map((item, index) => (
        <span key={index} className={styles.item}>
          {item}
        </span>
      ))}
    </>
  );
};
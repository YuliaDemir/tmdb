import Link from "next/link";
import styles from "./back-button.module.scss";

export const BackButton = () => {
  return (
    <div className={styles.wrapper}>
      <Link
        href="/"
        className={styles.button}
      >
        <span className={styles.icon}>←</span>
        Back
      </Link>
    </div>
  );
};

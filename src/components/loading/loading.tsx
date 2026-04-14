import styles from "./loading.module.scss";

export const Loading = ({ text }: { text: string }) => {
  return (
    <span className={styles.loader}>
      <span className={styles.spinner} />
      {text}
    </span>
  );
};
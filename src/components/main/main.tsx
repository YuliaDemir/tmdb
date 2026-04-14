import styles from "./main.module.scss";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main}>
      <div className={styles.glow} />

      <div className={styles.content}>
        {children}
      </div>
    </main>
  );
};
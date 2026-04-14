import styles from "./input.module.scss";

export const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>⌕</span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Matrix, Interstellar…"
        className={styles.input}
      />

      <div className={styles.underline} />
    </div>
  );
};
import styles from "./Label.module.css";

export default function Label({ inputLabel, id }) {
  return (
    <label htmlFor={id} className={styles.label}>
      {inputLabel}
    </label>
  );
}

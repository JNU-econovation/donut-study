import styles from "./Input.module.css";

export default function Input({ inputType, id, placeholder, value, onChange }) {
  return (
    <input
      type={inputType}
      id={id}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

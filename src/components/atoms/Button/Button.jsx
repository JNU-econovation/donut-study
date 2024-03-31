import styles from "./Button.module.css";
export default function Button({ innerText }) {
  return <button className={styles.button}>{innerText}</button>;
}

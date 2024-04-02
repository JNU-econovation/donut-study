import styles from "./ContentParagraph.module.css";
export default function ContentParagraph({ contentText }) {
  return <p className={styles.contentParagraph}>{contentText}</p>;
}

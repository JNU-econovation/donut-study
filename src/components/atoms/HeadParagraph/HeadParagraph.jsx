import styles from "./HeadParagraph.module.css";

export default function HeadParagraph({ headText }) {
  return <p className={styles.headParagraph}>{headText}</p>;
}

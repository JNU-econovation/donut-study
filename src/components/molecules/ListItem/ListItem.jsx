import styles from "./ListItem.module.css";
import ContentParagraph from "../../atoms/ContentParagraph/ContentParagraph";
import HeadParagraph from "../../atoms/HeadParagraph/HeadParagraph";

export default function ListItem({ headerText, contentText }) {
  return (
    <div className={styles.listItem}>
      <HeadParagraph headText={headerText} />
      <ContentParagraph contentText={contentText} />
    </div>
  );
}

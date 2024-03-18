import styles from "./MyCard.module.css";
import { title, content, tail } from "../../constants/CardData";

export default function MyCard() {
  const cardImage = "/src/assets/images/hero.jpg";
  return (
    <div className={styles.container}>
      <img className={styles.image} src={cardImage} alt="My hero" />
      <div className={styles.content}>
        <h1 className={styles.header}>{title}</h1>
        <p>{content}</p>
        <p>{tail}</p>
      </div>
    </div>
  );
}

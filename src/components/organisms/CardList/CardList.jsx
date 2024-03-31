import styles from "./CardList.module.css";
import ListImage from "../../atoms/ListImage/ListImage";

export default function CardList({ cardName, cardNumber }) {
  return (
    <li className={styles.CardList}>
      <ListImage />
      <div>
        <p>{cardName}</p>
        <p>{cardNumber}</p>
      </div>
    </li>
  );
}

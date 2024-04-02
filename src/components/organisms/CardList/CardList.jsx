import styles from "./CardList.module.css";
import ListImage from "../../atoms/ListImage/ListImage";
import CardListContent from "../CardListContent/CardListContent";

export default function CardList({ cardName, cardNumber }) {
  return (
    <li className={styles.cardlist}>
      <ListImage />
      <CardListContent cardName={cardName} cardNumber={cardNumber} />
    </li>
  );
}

import styles from "./CardList.module.css";
import ListImage from "../../atoms/ListImage/ListImage";

export default function CardList({ cardName, cardNumber }) {
  return (
    <li className={styles.cardlist}>
      <ListImage />
      <div>
        <p>{cardName}</p>
        <p>
          카드 번호: {cardNumber.firstCardNumber} -{" "}
          {cardNumber.secondCardNumber} - **** - ****
        </p>
      </div>
    </li>
  );
}

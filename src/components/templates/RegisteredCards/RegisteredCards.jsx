import styles from "./RegisteredCards.module.css";
import CardList from "../../organisms/CardList/CardList";

export default function RegisteredCards({ registeredCards }) {
  return (
    <ul className={styles.registeredCards}>
      {registeredCards.map(({ cardName, cardNumber }, index) => (
        <CardList
          key={`${index}`}
          cardName={cardName}
          cardNumber={cardNumber}
        />
      ))}
    </ul>
  );
}

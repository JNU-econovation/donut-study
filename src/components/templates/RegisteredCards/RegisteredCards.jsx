import CardList from "../../organisms/CardList/CardList";

export default function RegisteredCards({ registeredCards }) {
  return (
    <ul>
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

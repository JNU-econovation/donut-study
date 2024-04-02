import ListItem from "../../molecules/ListItem/ListItem";

export default function CardListContent({ cardName, cardNumber }) {
  const contentText = `카드 번호: ${cardNumber.firstCardNumber} - ${cardNumber.secondCardNumber} - **** - ****`;
  return <ListItem headerText={cardName} contentText={contentText} />;
}

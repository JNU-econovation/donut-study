import CardItem from "./CardItem";

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => {
        return <CardItem key={card.id} {...card} />;
      })}
    </div>
  );
};

export default CardList;

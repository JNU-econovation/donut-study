import styles from '../css/MainPage.module.css';
import MainLayout from '../components/layout/MainLayout';
import { useState } from 'react';
import CardListModal from '../components/block/CardListModal';

const MainPage = () => {
  const [cardList, setCardList] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleButtonClick = (cardInfo) => {
    const newCard = { ...cardInfo, id: nextId };
    setCardList((prevCardList) => [...prevCardList, newCard]);
    setNextId(nextId + 1);
  };

  const handleRemoveButtonClick = (targetId) => {
    const updatedCardList = cardList.filter((card) => card.id !== targetId);
    setCardList(updatedCardList);
  };

  return (
    <div className={styles.container}>
      <MainLayout onButtonClick={handleButtonClick} />
      {cardList.map((cardInfo, index) => (
        <CardListModal
          key={index}
          info={cardInfo}
          cardList={cardList}
          setCardList={setCardList}
          onRemoveButtonClick={handleRemoveButtonClick}
        />
      ))}
    </div>
  );
};

export default MainPage;

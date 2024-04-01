import styles from '../css/MainPage.module.css';
import MainLayout from '../components/layout/MainLayout';
import { useState } from 'react';
import CardListModal from '../components/block/CardListModal';

const MainPage = () => {
  const [cardList, setCardList] = useState([]);

  console.log(cardList);

  const handleButtonClick = (cardInfo) => {
    setCardList((prevCardList) => [...prevCardList, cardInfo]);
  };

  return (
    <div className={styles.container}>
      <MainLayout onButtonClick={handleButtonClick} />
      {cardList.map((cardInfo, index) => (
        <CardListModal key={index} info={cardInfo} />
      ))}
    </div>
  );
};

export default MainPage;

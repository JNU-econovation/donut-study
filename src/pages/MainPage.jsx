import styles from '../css/MainPage.module.css';
import MainLayout from '../components/layout/MainLayout';
import { useState } from 'react';
import CardListModal from '../components/block/CardListModal';
import useRemove from '../hooks/useRemove';
import { cardNameCheck } from '../utils/validation';

const MainPage = () => {
  const [cardList, setCardList] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [cardNameValid, setCardNameValid] = useState(false);

  const removeCard = useRemove(cardList, setCardList);

  const handleButtonClick = (cardInfo) => {
    if (cardNameCheck(cardInfo.cardName)) {
      setCardNameValid(true);
      const newCard = { ...cardInfo, id: nextId };
      setCardList((prevCardList) => [...prevCardList, newCard]);
      setNextId(nextId + 1);
    } else {
      alert(
        '카드이름을 입력해주세요. 공백을 포함하지 않고, 특수문자가 없어야 합니다!'
      );
      setCardList(false);
      setCardList(cardList);
    }
  };

  const handleRemoveButtonClick = (targetId) => {
    removeCard(targetId);
  };

  return (
    <div className={styles.container}>
      <MainLayout
        onButtonClick={handleButtonClick}
        cardNameValid={cardNameValid}
      />
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

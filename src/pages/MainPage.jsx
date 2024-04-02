import styles from '../css/MainPage.module.css';
import MainLayout from '../components/layout/MainLayout';
import { useState } from 'react';
import CardListModal from '../components/block/CardListModal';
import useRemove from '../hooks/useRemove';
import {
  cardNameCheck,
  cardNumberCheck,
  cvcNumberCheck,
  dateCheck,
  passWordCheck,
} from '../utils/validation';

const MainPage = () => {
  const [cardList, setCardList] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [cardNameValid, setCardNameValid] = useState(false);
  const [cvcNumberValid, setcvcNumberValid] = useState(false);
  const [dateValid, setDateValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [cardNnumberValid, setCardNumberValid] = useState(false);

  const removeCard = useRemove(cardList, setCardList);

  const handleButtonClick = (cardInfo) => {
    const isCardNameValid = cardNameCheck(cardInfo.cardName);
    const isCvcNumberValid = cvcNumberCheck(cardInfo.cvcNumber);
    const isDateValid = dateCheck(cardInfo.expirationDate);
    const isPassWordValid = passWordCheck(cardInfo.cardPassWord);
    const isCardNumberValid = cardNumberCheck(cardInfo.cardNumber);

    if (
      isCardNameValid &&
      isCvcNumberValid &&
      isDateValid &&
      isPassWordValid &&
      isPassWordValid
    ) {
      const newCard = { ...cardInfo, id: nextId };
      setCardList((prevCardList) => [...prevCardList, newCard]);
      setNextId(nextId + 1);
    } else if (!isCardNameValid) {
      setCardNameValid(false);
    } else if (!isCvcNumberValid) {
      setcvcNumberValid(false);
    } else if (!isDateValid) {
      setDateValid(false);
    } else if (!isPassWordValid) {
      setPasswordValid(false);
    } else if (!isCardNumberValid) {
      setCardNumberValid(false);
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
        cvcNumberValid={cvcNumberValid}
        dateValid={dateValid}
        passwordValid={passwordValid}
        cardNnumberValid={cardNnumberValid}
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

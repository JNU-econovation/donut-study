import { useState } from 'react';
import styles from '../../css/MainLayout.module.css';
import CardNameInput from '../block/CardNameInput';
import CardNumberInput from '../block/CardNumberInput';
import CardPwInput from '../block/CardPwInput';
import CvcInput from '../block/CvcInput';
import ExpirationDateInput from '../block/ExpirationDateInput';
import DefaultButton from '../atom/DefaultButton';

const MainLayout = ({ onButtonClick, cardNumberValid }) => {
  const [cardInfo, setCardInfo] = useState({
    cardName: '',
    cardNumber: '',
    expirationDate: '',
    cvcNumber: '',
    cardPassWord: '',
  });

  const handleNameChange = (e) => {
    const name = e.target.value;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      cardName: name,
    }));
  };

  const handleNumberChange = (number) => {
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      cardNumber: number,
    }));
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      expirationDate: date,
    }));
  };

  const handleCvcChange = (e) => {
    const cvc = e.target.value;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      cvcNumber: cvc,
    }));
  };

  const handleCardPwChange = (e) => {
    const passWord = e.target.value;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      cardPassWord: passWord,
    }));
  };

  const handleButtonClick = () => {
    onButtonClick(cardInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.noticeBox}>
        <p>카드 정보를 입력해주세요</p>
      </div>
      <CardNameInput onChange={handleNameChange} />
      <CardNumberInput
        onChange={handleNumberChange}
        cardNumberValid={cardNumberValid}
      />
      <div className={styles.flexBox}>
        <ExpirationDateInput onChange={handleDateChange} />
        <CvcInput onChange={handleCvcChange} />
      </div>
      <CardPwInput onChange={handleCardPwChange} />
      <DefaultButton onClick={handleButtonClick} buttonText='등록하기' />
    </div>
  );
};

export default MainLayout;

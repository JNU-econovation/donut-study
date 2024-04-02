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
import { ToastContainer, toast } from 'react-toastify';

const MainPage = () => {
  const [cardList, setCardList] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [cardNameValid, setCardNameValid] = useState(false);
  const [cvcNumberValid, setcvcNumberValid] = useState(false);
  const [dateValid, setDateValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [cardNnumberValid, setCardNumberValid] = useState(false);

  const removeCard = useRemove(cardList, setCardList);

  const notify = () => {
    toast('');
  };

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
      toast.success('카드를 성공적으로 등록하셨습니다!');
    } else if (!isCardNameValid) {
      setCardNameValid(false);
      toast.error('카드 이름을 올바르게 입력해주세요');
    } else if (!isCvcNumberValid) {
      setcvcNumberValid(false);
      toast.error('CVC 번호를 올바르게 입력해주세요');
    } else if (!isDateValid) {
      setDateValid(false);
      toast.error('유효 기간을 올바르게 입력해주세요!');
    } else if (!isPassWordValid) {
      setPasswordValid(false);
      toast.error('비밀번호를 올바르게 입력해주세요!');
    } else if (!isCardNumberValid) {
      setCardNumberValid(false);
      toast.error('카드번호를 올바르게 입력해주세요!');
    }
  };

  const handleRemoveButtonClick = (targetId) => {
    removeCard(targetId);
    toast.success('카드를 삭제하셨습니다.');
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <MainLayout
        onButtonClick={handleButtonClick}
        cardNameValid={cardNameValid}
        cvcNumberValid={cvcNumberValid}
        dateValid={dateValid}
        passwordValid={passwordValid}
        cardNnumberValid={cardNnumberValid}
        notify={notify}
      />
      <div className={styles.cardList}>
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
    </div>
  );
};

export default MainPage;

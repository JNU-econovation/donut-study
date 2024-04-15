import styles from '../../css/CardListModal.module.css';
import cardImage from '../../assets/Image/CardImage.png';
import CardButton from '../atom/CardButton';

const CardListModal = ({ info, onRemoveButtonClick }) => {
  const { id, cardName, cardNumber } = info;
  const numbers = info.cardNumber.split('-');

  const formattedCardNumber = `${numbers[0]} - ${numbers[1]} - **** - ****`;

  const handleButtonClick = () => {
    onRemoveButtonClick(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={cardImage} alt='카드 이미지입니다' />
      </div>
      <div className={styles.contentBox}>
        <h4>카드명 : {cardName}</h4>
        <p>CardNumber : {formattedCardNumber}</p>
      </div>
      <CardButton buttonText='삭제' onClick={handleButtonClick} />
    </div>
  );
};

export default CardListModal;

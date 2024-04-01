import styles from '../../css/CardListModal.module.css';
import cardImage from '../../assets/Image/CardImage.png';

const CardListModal = ({ info }) => {
  console.log(info);
  const cardInfo = info;

  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={cardImage} alt='카드 이미지입니다' />
      </div>
      <div className={styles.contentBox}>
        <h4>카드명 : {cardInfo.cardName}</h4>
        <p>CardNumber : {cardInfo.cardNumber}</p>
      </div>
    </div>
  );
};

export default CardListModal;

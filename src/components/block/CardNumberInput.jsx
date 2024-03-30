import styles from '../../css/CardNumberInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardNumberInput = () => {
  return (
    <div className={styles.container}>
      <p>카드 번호</p>
      <div className={styles.inputContainer}>
        <DefaultInput placeholder={'0 0 0 0'} />
        <span>-</span>
        <DefaultInput placeholder={'0 0 0 0'} />
        <span>-</span>
        <DefaultInput placeholder={'0 0 0 0'} />
        <span>-</span>
        <DefaultInput placeholder={'0 0 0 0'} />
      </div>
    </div>
  );
};

export default CardNumberInput;

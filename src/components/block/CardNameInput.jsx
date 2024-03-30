import styles from '../../css/CardNameInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardNameInput = () => {
  return (
    <div className={styles.container}>
      <p>카드 이름</p>
      <DefaultInput placeholder={'카드 이름을 입력해주세요'} />
    </div>
  );
};

export default CardNameInput;

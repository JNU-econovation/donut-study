import styles from '../../css/CvcInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CvcInput = () => {
  return (
    <div className={styles.container}>
      <p>CVC</p>
      <DefaultInput placeholder={'카드 뒷면 3자리 숫자'} />
    </div>
  );
};

export default CvcInput;

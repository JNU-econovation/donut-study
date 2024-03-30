import styles from '../../css/ExpirationDateInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const ExpirationDateInput = () => {
  return (
    <div className={styles.container}>
      <p>유효 기간</p>
      <DefaultInput placeholder={'MMYY'} />
    </div>
  );
};

export default ExpirationDateInput;

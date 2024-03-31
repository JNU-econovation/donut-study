import styles from '../../css/ExpirationDateInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const ExpirationDateInput = ({ onChange, value }) => {
  return (
    <div className={styles.container}>
      <p>유효 기간</p>
      <DefaultInput
        placeholder={'MMYY'}
        onChange={onChange}
        value={value}
        type='text'
        maxLength='4'
      />
    </div>
  );
};

export default ExpirationDateInput;

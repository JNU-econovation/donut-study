import styles from '../../css/CvcInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CvcInput = ({ onChange, value }) => {
  return (
    <div className={styles.container}>
      <p>CVC</p>
      <DefaultInput
        placeholder={'카드 뒷면 3자리 숫자'}
        onChange={onChange}
        value={value}
        type='text'
        maxLength='3'
      />
    </div>
  );
};

export default CvcInput;

import styles from '../../css/CardPwInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardPwInput = ({ onChange, value }) => {
  return (
    <div className={styles.container}>
      <p>카드 비밀번호</p>
      <DefaultInput
        placeholder={'카드 앞면 2자리 숫자'}
        onChange={onChange}
        value={value}
        type='text'
        maxLength='2'
      />
    </div>
  );
};

export default CardPwInput;

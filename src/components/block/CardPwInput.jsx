import { useState } from 'react';
import styles from '../../css/CardNameInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardPwInput = () => {
  const [cardPw, setCardPw] = useState('');

  const handleChange = (e) => {
    setCardPw(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p>카드 비밀번호</p>
      <DefaultInput
        placeholder={'카드 앞면 2자리 숫자'}
        onChange={handleChange}
        value={cardPw}
        type='text'
        maxLength='2'
      />
    </div>
  );
};

export default CardPwInput;

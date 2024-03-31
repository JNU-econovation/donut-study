import { useState } from 'react';
import styles from '../../css/CardNameInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardNameInput = () => {
  const [cardName, setCardName] = useState('');

  const handleChange = (e) => {
    setCardName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p>카드 이름</p>
      <DefaultInput
        placeholder={'카드 이름을 입력해주세요'}
        onChange={handleChange}
        value={cardName}
        type='text'
      />
    </div>
  );
};

export default CardNameInput;

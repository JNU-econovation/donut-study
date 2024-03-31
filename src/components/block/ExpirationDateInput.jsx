import { useState } from 'react';
import styles from '../../css/ExpirationDateInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const ExpirationDateInput = () => {
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p>유효 기간</p>
      <DefaultInput
        placeholder={'MMYY'}
        onChange={handleChange}
        value={date}
        type='text'
        maxLength='4'
      />
    </div>
  );
};

export default ExpirationDateInput;

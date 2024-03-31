import { useState } from 'react';
import styles from '../../css/CvcInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CvcInput = () => {
  const [cvcNumb, setCvcNumb] = useState('');

  const handleChange = (e) => {
    setCvcNumb(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p>CVC</p>
      <DefaultInput
        placeholder={'카드 뒷면 3자리 숫자'}
        onChange={handleChange}
        value={cvcNumb}
        type='text'
        maxLength='3'
      />
    </div>
  );
};

export default CvcInput;

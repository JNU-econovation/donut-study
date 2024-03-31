import { useEffect, useState } from 'react';
import styles from '../../css/CardNumberInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardNumberInput = () => {
  const [eachNumber, setEachNumber] = useState({
    firstNumb: '',
    secondNumb: '',
    thirdNumb: '',
    fourthNumb: '',
  });

  const [cardNumber, setCardNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEachNumber((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(e.target.value);
  };

  const combinedCardNumber = Object.values(eachNumber).join(' ');

  useEffect(() => {
    setCardNumber(combinedCardNumber);
  }, [eachNumber]);

  return (
    <div className={styles.container}>
      <p>카드 번호</p>
      <div className={styles.inputContainer}>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={handleChange}
          value={setEachNumber.firstNumb}
          type='text'
          maxLength='4'
        />
        <span>-</span>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={handleChange}
          value={setEachNumber.secondNumb}
          type='text'
          maxLength='4'
        />
        <span>-</span>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={handleChange}
          value={setEachNumber.thirdNumb}
          type='text'
          maxLength='4'
        />
        <span>-</span>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={handleChange}
          value={setEachNumber.fourthNumb}
          type='text'
          maxLength='4'
        />
      </div>
    </div>
  );
};

export default CardNumberInput;

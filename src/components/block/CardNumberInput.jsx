import { useEffect, useState } from 'react';
import styles from '../../css/CardNumberInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardNumberInput = ({ onChange, value }) => {
  const [eachNumber, setEachNumber] = useState({
    firstNumb: '',
    secondNumb: '',
    thirdNumb: '',
    fourthNumb: '',
  });

  const numberCahnge = () => {
    const cardNumber =
      eachNumber.firstNumb +
      '-' +
      eachNumber.secondNumb +
      '-' +
      eachNumber.thirdNumb +
      '-' +
      eachNumber.fourthNumb;
    onChange(cardNumber);
  };

  const firstNumberChange = (e) => {
    const first = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      firstNumb: first,
    }));
    numberCahnge();
  };

  const secondNumberChange = (e) => {
    const second = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      secondNumb: second,
    }));
    numberCahnge();
  };

  const thirdNumberChange = (e) => {
    const third = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      thirdNumb: third,
    }));
    numberCahnge();
  };

  const fourthNumberChange = (e) => {
    const fourth = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      fourthNumb: fourth,
    }));
    numberCahnge();
  };

  return (
    <div className={styles.container}>
      <p>카드 번호</p>
      <div className={styles.inputContainer}>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={firstNumberChange}
          value={value}
          type='text'
          maxLength='4'
        />
        <span>-</span>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={secondNumberChange}
          value={value}
          type='text'
          maxLength='4'
        />
        <span>-</span>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={thirdNumberChange}
          value={value}
          type='text'
          maxLength='4'
        />
        <span>-</span>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={fourthNumberChange}
          value={value}
          type='text'
          maxLength='4'
        />
      </div>
    </div>
  );
};

export default CardNumberInput;

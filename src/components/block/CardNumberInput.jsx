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

  const numberChange = ({
    first = eachNumber.firstNumb,
    second = eachNumber.secondNumb,
    third = eachNumber.thirdNumb,
    fourth = eachNumber.fourthNumb,
  }) => {
    const cardNumber = first + '-' + second + '-' + '****' + '-' + '****';
    onChange(cardNumber);
  };

  const firstNumberChange = (e) => {
    const first = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      firstNumb: first,
    }));
    numberChange({ first }); // 비동기적으로 실행되므로 setEachNumber가 그래서 numberChange가 먼저 실행 완료가 되어서 그럼
  };

  const secondNumberChange = (e) => {
    const second = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      secondNumb: second,
    }));
    numberChange({ second });
  };

  const thirdNumberChange = (e) => {
    const third = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      thirdNumb: third,
    }));
    numberChange({ third });
  };

  const fourthNumberChange = (e) => {
    const fourth = e.target.value;
    setEachNumber((prevNumber) => ({
      ...prevNumber,
      fourthNumb: fourth,
    }));
    numberChange({ fourth });
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
          type='password'
          maxLength='4'
        />
        <span>-</span>
        <DefaultInput
          placeholder={'0 0 0 0'}
          onChange={fourthNumberChange}
          value={value}
          type='password'
          maxLength='4'
        />
      </div>
    </div>
  );
};

export default CardNumberInput;

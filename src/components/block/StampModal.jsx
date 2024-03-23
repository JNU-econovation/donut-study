import styles from '@css/StampModal.module.css';
import DefaultButton from '../atom/DefaultButton';
import Stamp from '../atom/Stamp';
import { useState } from 'react';

const StampModal = () => {
  const [stampNum, setStampNum] = useState(0);
  const handleSaveStamp = () => {
    setStampNum(stampNum + 1);
    console.log(stampNum);
    if (stampNum == 10) {
      console.log('쿠폰이 발급되었습니다!');
      alert('쿠폰이 발급되었습니다!');
      setStampNum(0);
    }
  };

  const renderStamp = () => {
    const stamp = [];
    for (let i = 0; i < stampNum; i++) {
      stamp.push(<Stamp />);
    }
    return stamp;
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.buttonBox}>
          <DefaultButton buttonText={'적립하기'} onClick={handleSaveStamp} />
        </div>
        <div className={styles.contentBox}>{renderStamp()}</div>
      </div>
    </div>
  );
};

export default StampModal;

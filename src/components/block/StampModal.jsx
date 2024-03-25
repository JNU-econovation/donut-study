import styles from '@css/StampModal.module.css';
import DefaultButton from '../atom/DefaultButton';
import Stamp from '../atom/Stamp';

const StampModal = ({ buttonClick, stampNum }) => {
  const saveStamp = () => {
    buttonClick();
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
          <DefaultButton buttonText={'적립하기'} onClick={saveStamp} />
        </div>
        <div className={styles.contentBox}>{renderStamp()}</div>
      </div>
    </div>
  );
};

export default StampModal;

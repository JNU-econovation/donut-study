import styles from '@css/StampModal.module.css';
import DefaultButton from '../atom/DefaultButton';
import Stamp from '../atom/Stamp';

const StampModal = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.buttonBox}>
          <DefaultButton />
        </div>
        <div className={styles.contentBox}>
          <Stamp />
          <Stamp />
          <Stamp />
          <Stamp />
          <Stamp />
          <Stamp />
          <Stamp />
          <Stamp />
          <Stamp />
          <Stamp />
        </div>
      </div>
    </div>
  );
};

export default StampModal;

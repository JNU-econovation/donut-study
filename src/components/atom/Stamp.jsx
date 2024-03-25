import styles from '@css/Stamp.module.css';
import StampImage from '@image/StampImage.png';

const Stamp = () => {
  return (
    <div>
      <div className={styles.container}>
        <img src={StampImage} alt='stamp image' />
        <p>STAMP</p>
      </div>
    </div>
  );
};

export default Stamp;

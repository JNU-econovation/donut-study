import styles from '@css/CouponModal.module.css';
import DefaultButton from '../atom/DefaultButton';
import Coupon from '../atom/Coupon';

const CouponModal = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.buttonBox}>
          <DefaultButton buttonText={'사용하기'} />
        </div>
        <div className={styles.contentBox}>
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
          <Coupon />
        </div>
      </div>
    </div>
  );
};

export default CouponModal;

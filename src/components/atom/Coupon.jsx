import styles from '@css/Coupon.module.css';
import CouponImage from '@image/CouponImage.png';

const Coupon = () => {
  return (
    <div>
      <div className={styles.container}>
        <img src={CouponImage} alt='coupon image' />
        <p>Coupon</p>
      </div>
    </div>
  );
};

export default Coupon;

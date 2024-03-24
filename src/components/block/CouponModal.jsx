import styles from '@css/CouponModal.module.css';
import DefaultButton from '../atom/DefaultButton';
import Coupon from '../atom/Coupon';

const CouponModal = ({ buttonClick, couponNum }) => {
  const useCoupon = () => {
    buttonClick();
  };

  const renderCoupon = () => {
    const coupon = [];
    for (let i = 0; i < couponNum; i++) {
      coupon.push(<Coupon />);
    }
    return coupon;
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.buttonBox}>
          <DefaultButton buttonText={'사용하기'} onClick={useCoupon} />
        </div>
        <div className={styles.contentBox}>{renderCoupon()}</div>
      </div>
    </div>
  );
};

export default CouponModal;

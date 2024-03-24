import styles from '@css/MainPage.module.css';
import StampModal from '../components/block/StampModal';
import ProfileModal from '../components/block/ProfileModal';
import CouponModal from '../components/block/CouponModal';
import TabButton from '../components/atom/TabButton';
import ProfileTabImg from '../assets/Images/ProfileTabImage.png';
import StampTabImg from '../assets/Images/StampTabImage.png';
import CouponTabImg from '../assets/Images/CouponTabImage.png';
import { useEffect, useState } from 'react';
import ToastMessage from '../components/atom/ToastMessage';

const MainPage = () => {
  const USER_NAME = '이규민';
  const [activeModal, setActiveModal] = useState('profile');
  const [stampNum, setStampNum] = useState(0);
  const [couponNum, setCouponNum] = useState(0);
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
        setMessage('');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleTabButtonClick = (modalType) => {
    setActiveModal(modalType);
    console.log(activeModal);
  };

  const handleSaveStamp = () => {
    setStampNum(stampNum + 1);
    console.log(stampNum);
    if (stampNum === 10) {
      setToast(true);
      setMessage('쿠폰이 발급되었습니다!');
      setCouponNum(couponNum + 1);
      setStampNum(0);
    }
  };

  const handleUseCoupon = () => {
    if (couponNum > 0) {
      setCouponNum(couponNum - 1);
      setToast(true);
      setMessage('쿠폰이 사용되었습니다!');
    } else {
      setToast(true);
      setMessage('사용가능한 쿠폰이 없습니다!');
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.toastBox}>
          {toast === true ? <ToastMessage message={message} /> : null}
        </div>
        <div className={styles.userBox}>
          <p>
            안녕하세요 <span className={styles.userName}>{USER_NAME}</span>님
          </p>
        </div>
        <div className={styles.buttonBox}>
          <TabButton
            buttonText={'프로필'}
            buttonImage={ProfileTabImg}
            buttonInfo={'profile tab image'}
            onClick={() => handleTabButtonClick('profile')}
          />
          <TabButton
            buttonText={'스탬프'}
            buttonImage={StampTabImg}
            buttonInfo={'stamp tab image'}
            onClick={() => handleTabButtonClick('stamp')}
          />
          <TabButton
            buttonText={'쿠폰'}
            buttonImage={CouponTabImg}
            buttonInfo={'coupon tab image'}
            onClick={() => handleTabButtonClick('coupon')}
          />
        </div>
        <div className={styles.modalBox}>
          {activeModal === 'profile' && <ProfileModal />}
          {activeModal === 'stamp' && (
            <StampModal buttonClick={handleSaveStamp} stampNum={stampNum} />
          )}
          {activeModal === 'coupon' && (
            <CouponModal buttonClick={handleUseCoupon} couponNum={couponNum} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

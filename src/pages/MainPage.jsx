import styles from '@css/MainPage.module.css';
import StampModal from '../components/block/StampModal';
import ProfileModal from '../components/block/ProfileModal';
import CouponModal from '../components/block/CouponModal';
import TabButton from '../components/atom/TabButton';
import ProfileTabImg from '../assets/Images/ProfileTabImage.png';
import StampTabImg from '../assets/Images/StampTabImage.png';
import CouponTabImg from '../assets/Images/CouponTabImage.png';
import { useState } from 'react';

const MainPage = () => {
  const USER_NAME = '이규민';
  const [activeModal, setActiveModal] = useState('profile');

  const handleTabButtonClick = (modalType) => {
    setActiveModal(modalType);
    console.log(activeModal);
  };

  const [stampNum, setStampNum] = useState(0);

  const handleSaveStamp = () => {
    setStampNum(stampNum + 1);
    console.log(stampNum);
    if (stampNum === 10) {
      console.log('쿠폰이 발급되었습니다!');
      alert('쿠폰이 발급되었습니다!');
      setStampNum(0);
    }
  };

  return (
    <div>
      <div className={styles.container}>
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
          {activeModal === 'coupon' && <CouponModal />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

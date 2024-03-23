import styles from '@css/MainPage.module.css';
import StampModal from '../components/block/StampModal';
import TabButton from '../components/atom/TabButton';
import ProfileTabImg from '../assets/Images/ProfileTabImage.png';
import StampTabImg from '../assets/Images/StampTabImage.png';
import CouponTabImg from '../assets/Images/CouponTabImage.png';

const MainPage = () => {
  const USER_NAME = '이규민';

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
          />
          <TabButton
            buttonText={'스탬프'}
            buttonImage={StampTabImg}
            buttonInfo={'stamp tab image'}
          />
          <TabButton
            buttonText={'쿠폰'}
            buttonImage={CouponTabImg}
            buttonInfo={'coupon tab image'}
          />
        </div>
        <div className={styles.modalBox}>
          {/* <ProfileModal /> */}
          <StampModal />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

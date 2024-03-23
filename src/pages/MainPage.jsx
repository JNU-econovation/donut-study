import styles from '@css/MainPage.module.css';
import ProfileModal from '../components/block/ProfileModal';
import StampModal from '../components/block/StampModal';
import TabButton from '../components/atom/TabButton';

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
          <TabButton />
          <TabButton />
          <TabButton />
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

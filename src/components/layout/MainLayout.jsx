import styles from '../../css/MainLayout.module.css';
import CardNameInput from '../block/CardNameInput';
import CardNumberInput from '../block/CardNumberInput';
import CardPwInput from '../block/CardPwInput';
import CvcInput from '../block/CvcInput';
import ExpirationDateInput from '../block/ExpirationDateInput';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.noticeBox}>
        <p>카드 정보를 입력해주세요</p>
      </div>
      <CardNameInput />
      <CardNumberInput />
      <div className={styles.flexBox}>
        <ExpirationDateInput />
        <CvcInput />
      </div>
      <CardPwInput />
    </div>
  );
};

export default MainLayout;

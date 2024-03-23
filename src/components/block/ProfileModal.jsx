import styles from '@css/ProfileModal.module.css';
import ProfileImage from '@image/ProfileImage.png';
import DefaultButton from '../atom/DefaultButton';

const ProfileModal = () => {
  const CARD_CONTENTS = [
    'Econovation : 23th',
    '제 카드를 보러 와주신 멘토님 환영하고 감사합니다!',
    '스터디 참여 누구보다 열심히 하겠습니다!',
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <img src={ProfileImage} alt='Profile Image' />
        </div>
        <div className={styles.titleBox}>
          <h1>Kyumin Lee</h1>
        </div>
        <div className={styles.contentBox}>
          {CARD_CONTENTS.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
        <div className={styles.buttonBox}>
          <DefaultButton />
          <DefaultButton />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

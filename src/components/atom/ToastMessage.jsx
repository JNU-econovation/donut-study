import styles from '@css/ToastMessage.module.css';

const ToastMessage = () => {
  return (
    <div>
      <div className={styles.container}>
        <p>토스트 메시지입니다!</p>
      </div>
    </div>
  );
};

export default ToastMessage;

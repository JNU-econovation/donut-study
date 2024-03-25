import styles from '@css/ToastMessage.module.css';

const ToastMessage = ({ message }) => {
  return (
    <div>
      <div className={styles.container}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ToastMessage;

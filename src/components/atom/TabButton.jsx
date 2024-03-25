import styles from '@css/TabButton.module.css';

const TabButton = ({ buttonText, buttonImage, buttonInfo, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={buttonImage} alt={buttonInfo} />
      {buttonText}
    </button>
  );
};

export default TabButton;

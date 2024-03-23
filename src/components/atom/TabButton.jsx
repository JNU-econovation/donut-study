import styles from '@css/TabButton.module.css';

const TabButton = ({ buttonText, buttonImage, buttonInfo }) => {
  return (
    <button className={styles.button}>
      <img src={buttonImage} alt={buttonInfo} />
      {buttonText}
    </button>
  );
};

export default TabButton;

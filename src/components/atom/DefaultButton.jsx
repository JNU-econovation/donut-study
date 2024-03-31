import styles from '../../css/DefaultButton.module.css';

const DefaultButton = ({ onClick, buttonText }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default DefaultButton;

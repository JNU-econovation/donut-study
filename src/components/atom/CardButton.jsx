import styles from '../../css/CardButton.module.css';

const CardButton = ({ onClick, buttonText }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default CardButton;

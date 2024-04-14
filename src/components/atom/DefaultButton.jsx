import styles from '../../css/DefaultButton.module.css';

function DefaultButton({ buttonText, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default DefaultButton;

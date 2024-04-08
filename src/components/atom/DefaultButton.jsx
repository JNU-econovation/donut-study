import styles from '../../css/DefaultButton.module.css';

function DefaultButton({ buttonText }) {
  return <button className={styles.button}>{buttonText}</button>;
}

export default DefaultButton;

import styles from '../../css/TabButton.module.css';

function TabButton({ buttonText }) {
  return <button className={styles.button}>{buttonText}</button>;
}

export default TabButton;

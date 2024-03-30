import styles from '../../css/DefaultInput.module.css';

const DefaultInput = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder}></input>;
};

export default DefaultInput;

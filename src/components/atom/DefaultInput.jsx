import styles from '../../css/DefaultInput.module.css';

const DefaultInput = ({ placeholder, type, value, onChange, maxLength }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    ></input>
  );
};

export default DefaultInput;

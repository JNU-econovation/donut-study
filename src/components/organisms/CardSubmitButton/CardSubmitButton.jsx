import styles from "./CardSubmitButton.module.css";
import Button from "../../atoms/Button/Button";

export default function CardSubmitButton() {
  return (
    <div className={styles.CardSubmitButton}>
      <Button innerText="카드 등록하기" />
    </div>
  );
}

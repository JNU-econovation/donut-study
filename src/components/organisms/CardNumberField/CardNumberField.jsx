import styles from "./CardNumberField.module.css";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";

export default function CardNumberField({
  cardNumberChangeHandler,
  cardNumber,
}) {
  return (
    <div className={styles.CardNumberField}>
      <Label id="CardNumber" inputLabel="카드 번호" />
      <div className={styles.fieldDivition}>
        <Input
          id="CardNumber"
          inputType="number"
          placeholder="0000"
          value={cardNumber.firstCardNumber}
          onChange={(e) => {
            cardNumberChangeHandler(e.target.value, "firstCardNumber");
          }}
        />
        _
        <Input
          id="CardNumber"
          inputType="number"
          placeholder="0000"
          value={cardNumber.secondCardNumber}
          onChange={(e) => {
            cardNumberChangeHandler(e.target.value, "secondCardNumber");
          }}
        />
        _
        <Input
          id="CardNumber"
          inputType="password"
          placeholder="****"
          value={cardNumber.thirdCardNumber}
          onChange={(e) => {
            cardNumberChangeHandler(e.target.value, "thirdCardNumber");
          }}
        />
        _
        <Input
          id="CardNumber"
          inputType="password"
          placeholder="****"
          value={cardNumber.fourthCardNumber}
          onChange={(e) => {
            cardNumberChangeHandler(e.target.value, "fourthCardNumber");
          }}
        />
      </div>
    </div>
  );
}

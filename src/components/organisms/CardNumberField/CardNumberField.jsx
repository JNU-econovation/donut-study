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
          id="CardNumber1"
          inputType="number"
          placeholder="0000"
          value={cardNumber.firstCardNumber}
          onChange={(number) => {
            cardNumberChangeHandler(number, "firstCardNumber");
          }}
        />
        _
        <Input
          id="CardNumber2"
          inputType="number"
          placeholder="0000"
          value={cardNumber.secondCardNumber}
          onChange={(number) => {
            cardNumberChangeHandler(number, "secondCardNumber");
          }}
        />
        _
        <Input
          id="CardNumber3"
          inputType="password"
          placeholder="****"
          value={cardNumber.thirdCardNumber}
          onChange={(number) => {
            cardNumberChangeHandler(number, "thirdCardNumber");
          }}
        />
        _
        <Input
          id="CardNumber4"
          inputType="password"
          placeholder="****"
          value={cardNumber.fourthCardNumber}
          onChange={(number) => {
            cardNumberChangeHandler(number, "fourthCardNumber");
          }}
        />
      </div>
    </div>
  );
}

import styles from "./CardAddForm.module.css";
import CardNameInputField from "../../organisms/CardInputField/CardNameInputField";
import CardMMYYField from "../../organisms/CardMMYYField/CardMMYYField";
import CardCVCField from "../../organisms/CardCVCField/CardCVCField";
import CardPasswordField from "../../organisms/CardPasswordField/CardPasswordField";
import CardNumberField from "../../organisms/CardNumberField/CardNumberField";
import CardSubmitButton from "../../organisms/CardSubmitButton/CardSubmitButton";

export default function CardAddForm({
  cardFormData,
  cardNameChangeHandler,
  cardNumberChangeHandler,
  cardMMYYChangeHandler,
  cardCVCChangeHandler,
  cardPasswordChangeHandler,
  addCard,
}) {
  console.log("cardNumber : " + JSON.stringify(cardFormData.cardNumber));
  return (
    <form className={styles.CardForm} onSubmit={addCard}>
      <div className={styles.formHeader}>카드 정보를 입력해주세요</div>
      <CardNameInputField
        cardNameChangeHandler={cardNameChangeHandler}
        cardName={cardFormData.cardName}
      />
      <CardNumberField
        cardNumber={cardFormData.cardNumber}
        cardNumberChangeHandler={cardNumberChangeHandler}
      />
      <div className={styles.formDivition}>
        <CardMMYYField
          cardMMYYChangeHandler={cardMMYYChangeHandler}
          cardMMYY={cardFormData.cardMMYY}
        />
        <CardCVCField
          cardCVCChangeHandler={cardCVCChangeHandler}
          cardCVC={cardFormData.cardCVC}
        />
      </div>
      <CardPasswordField
        cardPasswordChangeHandler={cardPasswordChangeHandler}
        cardPassword={cardFormData.cardPassword}
      />
      <CardSubmitButton />
    </form>
  );
}

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
  const { cardName, cardCVC, cardMMYY, cardNumber, cardPassword } =
    cardFormData;
  return (
    <form className={styles.CardForm} onSubmit={addCard}>
      <div className={styles.formHeader}>카드 정보를 입력해주세요</div>
      <CardNameInputField
        cardNameChangeHandler={cardNameChangeHandler}
        cardName={cardName}
      />
      <CardNumberField
        cardNumber={cardNumber}
        cardNumberChangeHandler={cardNumberChangeHandler}
      />
      <div className={styles.formDivition}>
        <CardMMYYField
          cardMMYYChangeHandler={cardMMYYChangeHandler}
          cardMMYY={cardMMYY}
        />
        <CardCVCField
          cardCVCChangeHandler={cardCVCChangeHandler}
          cardCVC={cardCVC}
        />
      </div>
      <CardPasswordField
        cardPasswordChangeHandler={cardPasswordChangeHandler}
        cardPassword={cardPassword}
      />
      <CardSubmitButton />
    </form>
  );
}

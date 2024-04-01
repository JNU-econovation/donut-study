import styles from "./AddCardPage.module.css";
import CardAddForm from "../components/templates/CardAddForm/CardAddForm";
import RegisteredCards from "../components/templates/RegisteredCards/RegisteredCards";
import { useState } from "react";

const defaultCard = {
  cardName: "",
  cardNumber: {
    firstCardNumber: "",
    secondCardNumber: "",
    thirdCardNumber: "",
    fourthCardNumber: "",
  },
  cardMMYY: "",
  cardCVC: "",
  cardPassword: "",
};

export default function AddCardPage() {
  const [cardformData, setCardformData] = useState(defaultCard);
  const [registeredCards, setRegisteredCards] = useState([]);

  const addCard = (event) => {
    event.preventDefault();
    setRegisteredCards([...registeredCards, cardformData]);
    setCardformData(defaultCard);
  };

  const changeCardFormData = (key, value) => {
    setCardformData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <main className={styles.main}>
      <CardAddForm
        cardFormData={cardformData}
        cardCVCChangeHandler={(value) => changeCardFormData("cardCVC", value)}
        cardMMYYChangeHandler={(value) => changeCardFormData("cardMMYY", value)}
        cardNameChangeHandler={(value) => changeCardFormData("cardName", value)}
        cardPasswordChangeHandler={(value) =>
          changeCardFormData("cardPassword", value)
        }
        cardNumberChangeHandler={(cardNthNumber, nthNumber) => {
          setCardformData((prev) => ({
            ...prev,
            cardNumber: {
              ...cardformData.cardNumber,
              [nthNumber]: cardNthNumber,
            },
          }));
        }}
        addCard={addCard}
      />
      <RegisteredCards registeredCards={registeredCards} />
    </main>
  );
}

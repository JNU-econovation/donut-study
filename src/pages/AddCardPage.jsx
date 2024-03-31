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

  return (
    <main className={styles.main}>
      <CardAddForm
        cardFormData={cardformData}
        cardCVCChangeHandler={(cardCVC) => {
          setCardformData((prev) => ({
            ...prev,
            cardCVC,
          }));
        }}
        cardMMYYChangeHandler={(cardMMYY) => {
          setCardformData((prev) => ({
            ...prev,
            cardMMYY,
          }));
        }}
        cardNameChangeHandler={(cardName) => {
          setCardformData((prev) => ({
            ...prev,
            cardName,
          }));
        }}
        cardNumberChangeHandler={(cardNthNumber, nthNumber) => {
          setCardformData((prev) => ({
            ...prev,
            cardNumber: {
              ...cardformData.cardNumber,
              [nthNumber]: cardNthNumber,
            },
          }));
        }}
        cardPasswordChangeHandler={(cardPassword) => {
          setCardformData((prev) => ({
            ...prev,
            cardPassword,
          }));
        }}
        addCard={addCard}
      />
      <RegisteredCards registeredCards={registeredCards} />
    </main>
  );
}

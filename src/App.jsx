import "./App.css";
import { useRef, useState } from "react";
import CardList from "./components/CardList";
import CardEditor from "./components/CardEditor";
import styled from "styled-components";

function App() {
  const [cards, setCards] = useState([]);
  const cardsRef = useRef(0);

  const cardRegister = (name, number, expirationDate, cvc, password) => {
    const newCard = {
      id: cardsRef.current++,
      name: name,
      number: number,
      expirationDate: expirationDate,
      cvc: cvc,
      password: password,
    };
    setCards([newCard, ...cards]);
  };

  return <></>;
}

export default App;

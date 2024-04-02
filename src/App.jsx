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

  return (
    <>
      <CardFrame>
        <Title>카드 정보를 입력해주세요.</Title>
        <CardEditor cardRegister={cardRegister} />
        <CardList cards={cards} />
      </CardFrame>
    </>
  );
}

export default App;

const CardFrame = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    border: none;
  }
`;

const Title = styled.div`
  color: #fff;
  background-color: rgb(137, 145, 160);
  height: 3rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

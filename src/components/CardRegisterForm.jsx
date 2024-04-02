import DataInput from "./DataInput";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import CardNumberInputs from "./CardNumberInputs";

const CardRegisterForm = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [submittedCardNumbers, setSubmittedCardNumbers] = useState([]);

  const handleInputChange = (index) => (e) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = e.target.value;
    setCardNumbers(newCardNumbers);
  };

  const handleSubmit = () => {
    const cardNumber = cardNumbers.join("");
    setSubmittedCardNumbers((prev) => [...prev, cardNumber]);
  };

  return (
    <div>
      <FormTitle>카드 정보를 입력해주세요</FormTitle>
      <DataInput
        InputData={"카드 이름"}
        placeholder={"카드 이름을 입력해주세요"}
      />
      <CardNumberInputs
        cardNumbers={cardNumbers}
        handleInputChange={handleInputChange}
      />
      <DataInput type={"text"} InputData={"유효기간"} placeholder={"MM/YY"} />
      <DataInput
        type={"password"}
        InputData={"CVC"}
        placeholder={"카드 뒷면 3자리 숫자"}
      />
      <DataInput
        type={"password"}
        InputData={"카드 비밀번호"}
        placeholder={"카드 앞면 2자리 숫자"}
      />
      <CompleteButton onClick={handleSubmit}>완료</CompleteButton>
      {submittedCardNumbers.map((number, index) => (
        <Card key={index} cardNumber={number} />
      ))}
    </div>
  );
};

export default CardRegisterForm;

const CompleteButton = styled.button`
  margin-top: 0.625rem;
  padding: 1.25rem 21.5625rem;
  background-color: white;
  border-radius: 0px 0px 0.3125rem 0.3125rem;
  border: none;
`;

const FormTitle = styled.div`
  background-color: #8991a0;
  color: white;
  font-size: 0.875rem;
  padding: 0.9375rem;
  border-radius: 0.3125rem 0.3125rem 0px 0px;
  margin-top: 3.125rem;
`;

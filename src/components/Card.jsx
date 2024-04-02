import React from "react";
import styled from "styled-components";

const Card = ({ cardNumber }) => {
  return (
    <CardList>
      <CardImage />
      <CardNumber>카드 번호: {cardNumber}</CardNumber>
    </CardList>
  );
};

export default Card;

const CardImage = styled.div`
  width: 9.375rem;
  height: 5rem;
  background-color: white;
  border-radius: 0.3125rem;
`;

const CardList = styled.div`
  display: flex;
  padding: 0.625rem 0.625rem 0.625rem 0rem;
`;

const CardNumber = styled.div`
  padding: 0.625rem;
`;

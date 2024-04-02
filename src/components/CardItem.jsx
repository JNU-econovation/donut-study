import styled from "styled-components";

const CardItem = ({ name, number }) => {
  const formatCardNumber = (number) => {
    const parts = [];
    for (let i = 0; i < number.length; i += 4) {
      parts.push(number.substring(i, i + 4)); //
    }
    return parts.join("-");
  };

  return (
    <CardItemBox>
      <CardImage></CardImage>
      <CardContent>
        <div>{name}</div>
        <div>카드번호: {formatCardNumber(number)}</div>
      </CardContent>
    </CardItemBox>
  );
};

export default CardItem;

const CardItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  padding: 1.5rem;
  border: none;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
  width: 10rem;
  height: 5rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  margin-right: 10px;
`;

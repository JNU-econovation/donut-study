import styled from "styled-components";
const Button = ({ text, onClick }) => {
  return (
    <>
      <ClickBtn onClick={onClick}>{text}</ClickBtn>
    </>
  );
};

export default Button;

const ClickBtn = styled.button``;

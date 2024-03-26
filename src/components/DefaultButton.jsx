import styled from "styled-components";

const DefaultButton = ({ children, disabled, onClick }) => {
  return (
    <OrderButton onClick={onClick} disabled={disabled}>
      {children}
    </OrderButton>
  );
};

export default DefaultButton;

const OrderButton = styled.button`
  background-color: #4888ff;
  border-radius: 5px;
  border: none;
  color: white;
  margin: 30px 10px 30px 10px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  &:hover {
    background-color: #366fc9;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

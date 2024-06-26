import styled from "styled-components";

const buttonColor = {
  primary: {
    textColor: "#20c997",
    borderColor: "#20c997",
  },
  default: {
    textColor: "#8a8a8a",
    borderColor: "#8a8a8a",
  },
};

export default function StyledBtn({
  buttonText,
  onClickHander,
  color = "default",
}) {
  return (
    <StyledButton $color={color} onClick={onClickHander}>
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  color: ${({ $color }) =>
    buttonColor[$color]?.textColor || buttonColor.default.textColor};
  background-color: white;
  border: 1px solid
    ${({ $color }) =>
      buttonColor[$color]?.borderColor || buttonColor.default.borderColor};
  border-radius: 100px;
  cursor: pointer;
`;

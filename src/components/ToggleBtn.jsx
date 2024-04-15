import styled from "styled-components";

export default function ToggleBtn({ buttonText, buttonHandler }) {
  return <StyledBtn onClick={buttonHandler}>{buttonText}</StyledBtn>;
}

const StyledBtn = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1.25rem;
  margin-right: 5rem;
  align-self: flex-end;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

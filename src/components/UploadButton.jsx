import styled from "styled-components";

const UploadButton = ({ onClick }) => {
  return (
    <>
      <StyledAddButton onClick={onClick}>새 글 작성</StyledAddButton>
    </>
  );
};
export default UploadButton;

const StyledAddButton = styled.button`
  margin-top: 1rem;
  padding: 0.7rem 8.9rem;
  background-color: #ecb074;
  border: none;
  border-radius: 0.3rem;
`;

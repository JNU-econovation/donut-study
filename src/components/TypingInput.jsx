import styled from "styled-components";
const TypingInput = ({ content }) => {
  return (
    <>
      <TypingInputLayout>
        <input value={content} />
      </TypingInputLayout>
    </>
  );
};

export default TypingInput;

const TypingInputLayout = styled.div`
  display: flex;
  justify-content: center;
`;

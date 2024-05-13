import styled from "styled-components";
import { useState } from "react";

const TypingInput = ({}) => {
  const [content, setContent] = useState("");

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

import styled from "styled-components";
import { useState } from "react";

const TypingInput = ({ wordList, setWordList }) => {
  const [contents, setContents] = useState("");

  const onSubmit = () => {
    let found = false;
    const updateWords = wordList.filter((content) => {
      if (!found && content === contents) {
        found = true;
        return false;
      }
      return true;
    });

    setWordList(updateWords);
    setContents("");
  };

  return (
    <>
      <TypingInputLayout>
        <input
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
        />
      </TypingInputLayout>
    </>
  );
};

export default TypingInput;

const TypingInputLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

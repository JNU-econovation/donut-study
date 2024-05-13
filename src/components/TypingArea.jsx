import { useEffect, useState } from "react";
import styled from "styled-components";
import TypingInput from "./TypingInput";
import words from "../data/words.json";
const TypingArea = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <TypingLayout></TypingLayout>
      <TypingInput content={content}></TypingInput>
    </>
  );
};

export default TypingArea;

const TypingLayout = styled.div`
  width: auto;
  height: 25rem;
  background-color: #e1e1f3;
`;

import { useEffect, useState } from "react";
import styled from "styled-components";
import TypingInput from "./TypingInput";
import words from "../data/words.json";
const TypingArea = () => {
  const word = words.words;
  const [wordList, setWordList] = useState([]);
  const callBackWordList = () => {
    setWordList((prevWordList) => {
      if (prevWordList.length < 10) {
        return [...prevWordList, word[Math.floor(Math.random() * word.length)]];
      } else {
        alert("game over");
        return [...prevWordList];
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(callBackWordList, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <TypingLayout>
        <WordsLayout>
          {wordList.map((word, index) => (
            <div key={index}>{word}</div>
          ))}
        </WordsLayout>
      </TypingLayout>
      <TypingInput></TypingInput>
    </>
  );
};

export default TypingArea;

const TypingLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 20rem;
  background-color: #e1e1f3;
`;

const WordsLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

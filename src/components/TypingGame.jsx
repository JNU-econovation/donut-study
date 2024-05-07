import { useEffect, useState } from "react";
import UserInputForm from "./UserInputForm";
import words from "../data/words.json";
import { addShownWords, checkIsOver } from "../utils/gameUtils";
import styled from "styled-components";

export default function TypingGame({ flush }) {
  const [wordList, setWordList] = useState([]);
  const { words: wordDatas, words_length } = words;

  useEffect(() => {
    checkIsOver(wordList, setWordList);
    addShownWords(setWordList, words_length, wordDatas);
  }, [flush]);

  return (
    <>
      <ProblemSection>
        {wordList.map((word, index) => (
          <div key={`${word}-${index}`}>{word}</div>
        ))}
      </ProblemSection>
      <UserInputForm wordList={wordList} setWordList={setWordList} />
    </>
  );
}

const ProblemSection = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 50vh;
  background-color: aliceblue;
`;

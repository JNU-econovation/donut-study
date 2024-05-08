import { useEffect, useState } from "react";
import UserInputForm from "./UserInputForm";
import words from "../data/words.json";
import { addShownWords, checkIsOver } from "../utils/gameUtils";
import styled from "styled-components";
import GAME_CONSTANTS from "../constants/gameConstants";

export default function TypingGame() {
  const [wordList, setWordList] = useState([]);
  const { words: wordDatas, words_length } = words;

  useEffect(() => {
    const interval = setInterval(() => {
      checkIsOver(wordList, setWordList); //9개 이상이면 게임 종료
      addShownWords(setWordList, words_length, wordDatas); //단어 추가
    }, GAME_CONSTANTS.INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [wordList]);

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

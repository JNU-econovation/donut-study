import { useEffect, useState } from "react";
import UserInputForm from "./UserInputForm";
import words from "../data/words.json";
import { addShownWords, checkIsOver } from "../utils/gameUtils";

export default function TypingGame({ flush }) {
  const [wordList, setWordList] = useState([]);
  const { words: wordDatas, words_length } = words;

  useEffect(() => {
    checkIsOver(wordList, setWordList);
    addShownWords(setWordList, words_length, wordDatas);
  }, [flush]);

  return (
    <>
      <div>
        {wordList.map((word, index) => (
          <div key={`${word}-${index}`}>{word}</div>
        ))}
      </div>
      <UserInputForm wordList={wordList} setWordList={setWordList} />
    </>
  );
}

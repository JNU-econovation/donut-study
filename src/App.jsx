import { useState, useEffect } from "react";
import WordInput from "./components/WordInput";
import WordArea from "./components/WordArea";

const fruits = [
  "apple",
  "banana",
  "cherry",
  "avocado",
  "blueberry",
  "coconut",
  "grape",
  "lime",
  "kiwi",
  "lemon",
  "mango",
  "peach",
  "pear",
  "strawberry",
  "watermelon",
  "tomato",
  "melon",
];

const App = () => {
  const [words, setWords] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (isGameOver) return;

    const wordAdder = setInterval(() => {
      if (words.length < 10) {
        const newWord = fruits[Math.floor(Math.random() * fruits.length)];
        setWords((prevWords) => [...prevWords, newWord]);
      } else {
        setIsGameOver(true);
        alert("게임 종료!");
        clearInterval(wordAdder);
      }
    }, 2000);

    return () => clearInterval(wordAdder);
  }, [words, isGameOver]);

  const handleWordSubmit = (inputWord) => {
    setWords(words.filter((word) => word !== inputWord));
  };

  const resetGame = () => {
    setWords([]);
    setIsGameOver(false);
  };

  useEffect(() => {
    if (isGameOver) {
      resetGame();
    }
  }, [isGameOver]);

  return (
    <div className="center-container">
      <WordArea words={words} />
      <WordInput onWordSubmit={handleWordSubmit} />
    </div>
  );
};

export default App;

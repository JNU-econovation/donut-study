// utils/wordTimer.js
import GAME_CONSTANTS from "../constants/gameConstants";

export const addShownWords = (setWordList, maxIndex, wordDatas) => {
  const randomIndex = getRandomInt(maxIndex);
  setWordList((prevList) => [...prevList, wordDatas[randomIndex]]);
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const checkIsOver = (wordList, setWordList) => {
  if (wordList.length > GAME_CONSTANTS.MAX_WORD) {
    setWordList([]);
    alert("Game Over");
    window.location.reload();
  }
};

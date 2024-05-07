// components/WordArea.js
const WordArea = ({ words }) => {
  return (
    <div className="word-area">
      {words.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </div>
  );
};

export default WordArea;

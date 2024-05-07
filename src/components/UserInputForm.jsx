import { useState } from "react";

export default function UserInputForm({ wordList, setWordList }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWordList = wordList.filter((word) => word !== text);
    setWordList(newWordList);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </form>
  );
}

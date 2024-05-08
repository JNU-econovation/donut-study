import { useState } from "react";
import styled from "styled-components";

export default function UserInputForm({ wordList, setWordList }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWordList = wordList.filter((word) => word !== text.trim());
    setWordList(newWordList);
    setText("");
  };

  return (
    <UserInputFormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </UserInputFormStyled>
  );
}

const UserInputFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 4rem;
  input {
    width: 36rem;
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid black;
  }
`;

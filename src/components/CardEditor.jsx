import { useState } from "react";
import styled from "styled-components";

const inputFields = [
  { title: "카드이름", name: "name", placeholder: "카드 이름을 입력하세요" },
  { title: "카드 번호", name: "number", placeholder: "0000-0000-0000-0000" },
  {
    title: "유효기간",
    name: "expirationDate",
    placeholder: "만료 날짜를 입력하세요",
  },
  { title: "CVC", name: "cvc", placeholder: "CVC를 입력하세요" },
  {
    title: "카드 비밀번호",
    name: "password",
    placeholder: "비밀번호를 입력하세요",
  },
];

const CardEditor = ({ cardRegister }) => {
  const [input, setInput] = useState({
    name: "",
    number: "",
    expirationDate: "",
    cvc: "",
    password: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {" "}
      {inputFields.map((field, index) => (
        <EditorBox key={index}>
          <>
            {field.title === "카드 비밀번호" ? (
              <>
                <div>{field.title}</div>
                <input
                  type="password"
                  key={index}
                  name={field.name}
                  value={input[field.name]}
                  placeholder={field.placeholder}
                  onChange={onChange}
                />
              </>
            ) : (
              <>
                <div>{field.title}</div>
                <input
                  key={index}
                  name={field.name}
                  value={input[field.name]}
                  placeholder={field.placeholder}
                  onChange={onChange}
                />
              </>
            )}
          </>
        </EditorBox>
      ))}
    </>
  );
};

export default CardEditor;

const EditorBox = styled.div`
  div {
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  margin-left: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border-bottom: 1px solid gainsboro;
`;

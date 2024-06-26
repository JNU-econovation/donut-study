import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { supabase } from "../../supabase";
import styled from "styled-components";
import Modal from "react-modal";
import "./CreatePostCss.css";

const CreatePost = ({ isOpen, onRequestClose, getPostData }) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = async () => {
    const { data } = await supabase.from("page").insert([{ title, tag, body }]);
    setTitle(data);
    getPostData();
    onRequestClose();
    setTitle("");
    setTag("");
    setBody("");
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="CreatePostCss"
        overlayClassName="overlay"
      >
        <CloseButton onClick={onRequestClose}>
          <IoClose size="1.2rem" />
        </CloseButton>
        <InputField
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <InputField
          placeholder="태그를 입력하세요"
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
        <InputField
          placeholder="메모를 입력하세요"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <SaveButton onClick={onSubmit}>저장</SaveButton>
      </Modal>
    </>
  );
};

export default CreatePost;

const InputField = styled.input`
  width: calc(100% - 3rem);
  padding: 0.75rem;
  margin: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d1d1;
  font-size: 0.875rem;
  color: #333;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffeeba;
    box-shadow: 0 0 0 3px #ffeeba(139, 0, 139, 0.2);
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const SaveButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: white;
  border: 0.2rem solid #ffeeba;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffeeba;
    color: black;
  }
`;

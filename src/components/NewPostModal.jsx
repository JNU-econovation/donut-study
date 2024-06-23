import styled from "styled-components";
import { useState } from "react";

const NewPostModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    await onSubmit({ title, tag, body });
    onClose();
    window.location.reload();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay onClick={handleOverlayClick}>
      <StyledModal>
        <StyledModalHeader>
          <StyledCloseButton onClick={onClose}>×</StyledCloseButton>
        </StyledModalHeader>
        <StyledModalContent>
          <StyledTitle>새 글 작성</StyledTitle>
          <StyledDivider />
          <StyledInput
            type="text"
            placeholder="글 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="태그"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <StyledTextarea
            placeholder="내용"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <StyledButton onClick={handleSubmit}>작성</StyledButton>
        </StyledModalContent>
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default NewPostModal;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModal = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 50rem;
  height: 30rem;
  max-width: 100%;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledModalContent = styled.div`
  text-align: center;
  padding: 1rem;
`;

const StyledTitle = styled.h2`
  margin-top: 0;
  font-size: 2rem;
`;

const StyledDivider = styled.hr`
  border: 0;
  border-top: 2px solid brown;
  margin: 1rem 0;
`;

const StyledInput = styled.input`
  width: calc(100% - 2rem);
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

const StyledTextarea = styled.textarea`
  width: calc(100% - 2rem);
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  height: 8rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 13rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #ecb074;
  cursor: pointer;
  margin-top: 1rem;
`;

import styled from "styled-components";

const ViewModal = ({ title, tag, body, onClose }) => {
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
          <StyledTitle>{title}</StyledTitle>
          <StyledDivider />
          <StyledTag>{tag}</StyledTag>
          <StyledBody>{body}</StyledBody>
        </StyledModalContent>
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default ViewModal;

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

const StyledTag = styled.div`
  background-color: #ddc19d;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

const StyledBody = styled.div`
  white-space: pre-wrap;
`;

import styled from "styled-components";

const Post = ({ title, tag, onClick }) => {
  return (
    <StyledPost onClick={onClick}>
      <StyledTitle>{title}</StyledTitle>
      <StyledTag>{tag}</StyledTag>
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled.div`
  width: 16.5rem;
  height: 14.6rem;
  border: 0.1rem solid #acacac;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ededed;
  }
`;

const StyledTitle = styled.div`
  margin: 1.5rem 1.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const StyledTag = styled.div`
  margin-left: 1.5rem;
  background-color: #ddc19d;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  display: inline-block;
`;

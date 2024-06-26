import styled from "styled-components";

const PostItem = ({ id, title, tag, body, created_at, handlePostClick }) => {
  return (
    <>
      <PostCard onClick={() => handlePostClick(id, title, tag, body)}>
        <TitleWrapper>{title}</TitleWrapper>
        <TagWrapper>{tag}</TagWrapper>
        <DateWrapper>{created_at.split("T")[0]}</DateWrapper>
      </PostCard>
    </>
  );
};

export default PostItem;

const PostCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 14rem;
  border: none;
  background-color: #fff;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 0.1875rem #758d32;
  padding: 2rem;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 1.1rem;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  }
`;

const TitleWrapper = styled.div`
  font-size: 1.2rem;
  color: #ff6b6b;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
`;

const TagWrapper = styled.div`
  font-size: 0.9rem;
  background-color: #ffeeba;
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  text-align: center;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
`;

const DateWrapper = styled.div`
  font-size: 0.8rem;
  color: #9e9e9e;
  text-align: center;
  text-shadow: 0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.1);
`;

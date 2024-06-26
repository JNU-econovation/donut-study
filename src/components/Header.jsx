import { useState } from "react";
import styled from "styled-components";
import CreatePost from "./Modal/CreatePost";

const Header = ({ getPostData }) => {
  const [createPostIsOpen, setCreatePostIsOpen] = useState(false);
  const handlePostClick = () => {
    setCreatePostIsOpen(true);
  };
  return (
    <>
      <HeaderFrame>
        <TitleWrapper>
          <Title>Dount Blog</Title>
        </TitleWrapper>
        <ButtonWrapper>
          <PostButton onClick={handlePostClick}>
            <ButtonText>글 쓰기</ButtonText>
          </PostButton>
        </ButtonWrapper>
        <CreatePost
          isOpen={createPostIsOpen}
          getPostData={getPostData}
          onRequestClose={() => setCreatePostIsOpen(false)}
        />
      </HeaderFrame>
    </>
  );
};

export default Header;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const HeaderFrame = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const PostButton = styled.button`
  color: black;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 1.25rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0rem 0.25rem 0.5rem rgba(21, 19, 14, 0.2);
`;

const ButtonText = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

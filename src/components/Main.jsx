import styled from "styled-components";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Main = ({ getPostData, postData, handlePostClick }) => {
  return (
    <>
      <MainFrame>
        <Header getPostData={getPostData} />
        <PostList postData={postData} handlePostClick={handlePostClick} />
      </MainFrame>
    </>
  );
};

export default Main;

const MainFrame = styled.div`
  width: 50%;
  height: 100vh;
`;

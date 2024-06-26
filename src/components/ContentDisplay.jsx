import styled from "styled-components";
import donutImg from "../assets/donutImg.jpg";
import { supabase } from "../supabase";

const ContentDisplay = ({ id, title, tag, body, getPostData }) => {
  const deletePost = async () => {
    const { error } = await supabase.from("page").delete().eq("id", id);
    if (error) {
      console.error("Error deleting post:", error);
    } else {
      getPostData();
    }
  };

  return (
    <ContentFrame>
      <ImageWrapper>
        <Image src={donutImg} />
        <DeleteButton onClick={deletePost}>
          <DeleteButtonIcon />
        </DeleteButton>
        <TitleWrapper>{title}</TitleWrapper>
        <TagWrapper>{tag}</TagWrapper>
        <BodyWrapper>{body}</BodyWrapper>
      </ImageWrapper>
    </ContentFrame>
  );
};

export default ContentDisplay;

const ContentFrame = styled.div`
  margin: 1rem;
  border-radius: 3rem;
  width: 50%;
  height: 96.5vh;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 96vh;
  border-radius: 3rem;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  object-fit: cover;
  opacity: 0.7;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5rem;
  right: 5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff6b6b;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' fill='%23fff'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #ff6b6b;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TagWrapper = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  font-size: 18px;
  background-color: #ffeeba;
  padding: 10px 20px;
  border-radius: 20px;
`;

const BodyWrapper = styled.div`
  position: absolute;
  top: 15rem;
  height: 62vh;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  font-size: 16px;
  width: 80%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px 20px;
  border-radius: 20px;
`;

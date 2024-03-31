import image1 from "../assets/Image.jpg";
import "./image.css";
import styled from "styled-components";

const CardIntro = () => {
  return (
    <IntroductionCard>
      <img className="image" src={image1} />
      <div>
        <h1>Econovation 26th 강하은</h1>
        안녕하세요 저는 이번에 같이 리액트 스터디 하게 된 강하은입니다.
        <br />
        스터디 열심히 참여하면서 많이 배우고 같이 성장해 나가고 싶습니다! <br />
        한 학기 잘 해보아요~
      </div>
    </IntroductionCard>
  );
};

export default CardIntro;

const IntroductionCard = styled.div`
  display: flex;
  flex-direction: row;
  div {
    justify-content: center;
  }
  h1 {
    font-size: 2.3rem;
  }
`;

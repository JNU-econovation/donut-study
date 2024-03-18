import styled from "styled-components";

const Card = () => {
  return (
    <div>
      <CardBox>
        <Image src="/IMG_5696.JPG" alt="profile image"></Image>
        <TextArea>
          <NameArea>에코노베이션 26기 곽민준</NameArea>
          <IntroduceArea>
            안녕하세요! 리액트 스터디에 뒤늦게 참여하게 된 곽민준이라고 합니다.
            리액트를 배워보기는 했지만 깊게 파고들어보지는 못했는데 좋은 기회
            주셔서 감사합니다.
            <br />
            <br />
            이번 스터디를 통해 많은 것을 얻어가고 추후에는 제가 누군가에게 도움
            될 수 있도록 노력하겠습니다. 잘 부탁드립니다!
          </IntroduceArea>
        </TextArea>
      </CardBox>
    </div>
  );
};

export default Card;

const CardBox = styled.div`
  width: 50rem;
  height: 18rem;
  box-shadow: 0 0.2rem 4rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-top: 11rem;
  display: flex;
`;

const Image = styled.img`
  margin-left: 2rem;
  margin-top: 4rem;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const NameArea = styled.div`
  margin-left: 2rem;
  margin-top: 4rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const IntroduceArea = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 1rem;
  font-weight: 300;
  width: 28rem;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from "styled-components";

export default function Intro() {
  return (
    <IntroContainer>
      <h1>ECNV</h1>
      <div>
        <p>Welcome to ECNV, the best place to buy your favorite items.</p>
        <p>Here is a list of items you can buy:</p>
      </div>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  background-color: rgb(248, 250, 252);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: url("https://cdn.pixabay.com/photo/2016/04/03/11/36/berlin-1304370_1280.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 8rem;
    color: rgb(2, 6, 23);
    background-color: white;
    --tw-bg-opacity: 0.35;
    opacity: 35%;
    padding-inline: 4rem;
  }
  div {
    margin-top: 5rem;
    background-color: #ffffff;
  }
`;

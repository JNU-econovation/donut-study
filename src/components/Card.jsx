import CardIntro from "./CardIntro";
import styled from "styled-components";
const Card = () => {
  return (
    <CardFrame>
      <CardIntro />
    </CardFrame>
  );
};

export default Card;

const CardFrame = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebeaec;
  box-shadow: 0px 2px 7px rgb(0, 0, 0, 0.3);
  width: 46rem;
  height: 13rem;
  margin: 0 auto;
  border-radius: 0.3125rem;
  text-align: center;
  padding: 1rem;
`;

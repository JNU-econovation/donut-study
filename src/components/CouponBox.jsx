import styled from "styled-components";
import Button from "./Button";
const CouponBox = ({ couponCount }) => {
  const couponStamp = [];

  for (let i = 0; i < couponCount; i++) {
    couponStamp.push(
      <Button fontColor={"#9a3138"} color={"white"} text={`${i + 1}`} />
    );
  }
  return (
    <>
      <CouponBlock>
        <ButtonContainer>{couponStamp}</ButtonContainer>
      </CouponBlock>
    </>
  );
};

export default CouponBox;

const CouponBlock = styled.div`
  width: 23.5rem;
  height: 7rem;
  border: 1px solid black;
  background-color: #9a3138;
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

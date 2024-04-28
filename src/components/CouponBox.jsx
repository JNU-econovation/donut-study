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
      <CouponBlock>{couponStamp}</CouponBlock>
    </>
  );
};

export default CouponBox;

const CouponBlock = styled.div`
  width: 23.5rem;
  height: 7rem;
  background-color: #9a3138;
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; //컨테이너 안의 모든 아이템들이 교차 축 방향으로 중앙에 위치한다. 이 속성은 다양한 크기를 가진 아이템들을 정렬할 때 유용하다.
`;

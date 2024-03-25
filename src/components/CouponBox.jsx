import styled from "styled-components";
import Button from "./Button";
const CouponBox = ({ couponCount }) => {
  const couponStamp = [];

  for (let i = 0; i < couponCount; i++) {
    couponStamp.push(<Button text={`${i + 1}`} />);
  }
  return (
    <>
      <CouponBlock>
        {couponStamp}
        <div> ☆ 10번 주문하시면 원하시는 커피를 제공해드립니다 ☆ </div>
      </CouponBlock>
    </>
  );
};

export default CouponBox;

const CouponBlock = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  h4 {
    text-align: center;
  }
`;

import { useState } from "react";
import styled from "styled-components";
import DefaultButton from "./components/DefaultButton.jsx";

function App() {
  const [couponNum, setCouponNum] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const initialOpacity = new Array(10).fill(0.4);
  const [opacityList, setOpacityList] = useState(initialOpacity);

  const handleOrderClick = () => {
    const newCouponNum = couponNum + 1;
    setCouponNum(newCouponNum);

    const newOpacityList = opacityList.map((opacity, index) => {
      return index < newCouponNum ? 1 : 0.4;
    });
    setOpacityList(newOpacityList);

    if (newCouponNum >= 10) {
      setIsDisabled(true);
    }
  };

  const handleSubmitCoupon = () => {
    alert("커피 무료 쿠폰이 발급되었습니다! 🎉");
    setCouponNum(0);
    setOpacityList(initialOpacity);
    setIsDisabled(false);
  };

  return (
    <Section>
      <h1>쿠폰함</h1>
      <p>
        쿠폰을 받아보세요! 주문할 때마다 쿠폰을 받을 수 있어요! 10개를 모으면
        무려 1개가 공짜??
      </p>
      <DefaultButton onClick={handleOrderClick} disabled={isDisabled}>
        주문하기
      </DefaultButton>
      <Line />
      <IconsContainer>
        {opacityList.map((opacity, index) => (
          <CoffeeIcon
            key={index}
            src="CoffeeIcon.png"
            alt="커피 아이콘"
            style={{ opacity }}
          />
        ))}
      </IconsContainer>
      <DefaultButton onClick={handleSubmitCoupon} disabled={!isDisabled}>
        쿠폰 제출하기 💫
      </DefaultButton>
    </Section>
  );
}

export default App;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  text-align: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 30px 0 50px 0;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const CoffeeIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 5px;
`;

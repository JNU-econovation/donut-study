import styled from "styled-components";
import CouponBox from "./components/CouponBox";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(0);

  const handleOrderButtonClick = () => {
    if (order < 10) {
      setOrder(order + 1);
    } else {
      alert("쿠폰을 먼저 제출해주세요");
    }
  };

  const couponSubmit = (order) => {
    if (order < 10) {
      return;
    }
    alert("쿠폰 10장을 커피로 교환합니다.");
    setOrder(0);
  };

  return (
    <CouponContainer>
      <h2>커피 쿠폰함</h2>
      <div> ☆ 10번 주문하시면 원하시는 커피를 제공해드립니다 ☆ </div>
      <button onClick={handleOrderButtonClick}>커피 주문하기 </button>
      <CouponBox couponCount={order} />
      <button disabled={order < 10} onClick={couponSubmit}>
        쿠폰 제출
      </button>
    </CouponContainer>
  );
}

export default App;

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 2rem;
  background-color: #fff;

  h2 {
    margin-bottom: 1.5rem;
    color: #9a3138;
    font-size: 1.5rem;
    font-weight: bold;
  }

  div {
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.2rem;
  }

  button {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    background-color: #ae3941;
    border: none;
    border-radius: 999999px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #7b242d;
    }

    &:disabled {
      background-color: #ccc;
    }
  }
`;

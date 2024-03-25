import "./App.css";
import styled from "styled-components";
import Button from "./components/Button";
import CouponBox from "./components/CouponBox";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(0);

  const handleOrderButtonClick = () => {
    if (order < 10) {
      setOrder(order + 1);
    } else {
      console.log("더이상 카운트가 되지않습니다.");
    }
  };

  const couponSubmit = () => {
    alert("쿠폰 10장을 커피로 교환합니다.");
    setOrder(0);
  };

  return (
    <>
      <h2>커피 쿠폰함</h2>
      <Button onClick={handleOrderButtonClick} text={"커피 주문하기"} />
      <CouponBox couponCount={order} />
      {order >= 10 ? (
        <button disabled={false} onClick={couponSubmit}>
          쿠폰 제출
        </button>
      ) : (
        <button disabled={true}>쿠폰 제출</button>
      )}
    </>
  );
}

export default App;

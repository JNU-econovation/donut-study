import { useState } from "react";
import OrderBtn from "./components/OrderBtn";
import SubmitBtn from "./components/SubmitBtn";
import StampPaper from "./components/StampPaper";
import { MAX_ORDER_COUNT } from "./constants/order";

export default function App() {
  const [orderCount, setOrderCount] = useState(0);

  const submitCupon = () => {
    if (orderCount < MAX_ORDER_COUNT) return;
    alert("와우! 하나가 공짜?????");
    setOrderCount(0);
  };

  const orderCoffee = () => setOrderCount((prev) => prev + 1);

  return (
    <div className="text-center">
      <h1 className="text-3xl text-center font-bold mt-20">쿠폰함</h1>
      <p className="mt-12 ">
        쿠폰을 받아보세요! 주문할 때마다 쿠폰을 받을 수 있어요! 10개를 모으면
        무려 1개가 공짜??
      </p>
      <OrderBtn orderCount={orderCount} increaseOrderCount={orderCoffee} />
      <StampPaper orderCount={orderCount} />
      <SubmitBtn submitCupon={submitCupon} orderCount={orderCount} />
    </div>
  );
}

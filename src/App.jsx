import { useState } from "react";
import OrderBtn from "./components/OrderBtn";
import SubmitBtn from "./components/SubmitBtn";
import StampPaper from "./components/StampPaper";
import StampHeader from "./components/StampHeader";
import { MAX_ORDER_COUNT } from "./constants/order";

export default function App() {
  const [order, setOrder] = useState(0);

  const submitCupon = () => {
    if (order < MAX_ORDER_COUNT) return;
    alert("와우! 하나가 공짜?????");
    setOrder(0);
  };

  const orderCoffee = () => setOrder((prev) => ++prev);

  return (
    <div className="text-center">
      <StampHeader />
      <OrderBtn orderCount={order} handler={orderCoffee} />
      <StampPaper order={order} />
      <SubmitBtn handler={submitCupon} orderCount={order} />
    </div>
  );
}

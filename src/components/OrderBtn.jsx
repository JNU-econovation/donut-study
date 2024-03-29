import { MAX_ORDER_COUNT } from "../constants/order";
import StyledButton from "./common/StyledButton";

export default function OrderBtn({ increaseOrderCount, orderCount }) {
  const isOrderCountOver = orderCount >= MAX_ORDER_COUNT;

  const order = () => {
    if (isOrderCountOver) return;
    increaseOrderCount();
  };

  return <StyledButton handler={order} text="주문하기" />;
}

import { MAX_ORDER_COUNT } from "../constants/order";
import StyledButton from "./common/StyledButton";

export default function OrderBtn({ handler, orderCount }) {
  const isOrderCountOver = orderCount >= MAX_ORDER_COUNT;

  const order = () => {
    if (isOrderCountOver) return;
    handler();
  };

  return <StyledButton handler={order} text="주문하기" />;
}

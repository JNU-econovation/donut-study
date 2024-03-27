import { MAX_ORDER_COUNT } from "../constants/order";
import StyledButton from "./common/StyledButton";

export default function SubmitBtn({ handler, orderCount }) {
  const isDisableToSubmit = orderCount < MAX_ORDER_COUNT;
  return (
    <StyledButton
      disabled={isDisableToSubmit}
      handler={handler}
      text="쿠폰 제출하기 💥💥"
    />
  );
}

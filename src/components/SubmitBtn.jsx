import { MAX_ORDER_COUNT } from "../constants/order";
import StyledButton from "./common/StyledButton";

export default function SubmitBtn({ submitCupon, orderCount }) {
  const isDisableToSubmit = orderCount < MAX_ORDER_COUNT;
  return (
    <StyledButton
      disabled={isDisableToSubmit}
      handler={submitCupon}
      text="쿠폰 제출하기 💥💥"
    />
  );
}

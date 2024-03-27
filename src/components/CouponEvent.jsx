import { useCoupon } from "../hooks/useCoupon";
import { TextSmall, TextMedium, TextLarge } from "../common/Text";
import { Button } from "../common/Button";
import "./CouponEvent.style.scss";

export const CouponEvent = () => {
	const { coupon, isCouponFull, getCoupon, orderByCoupon } = useCoupon();
	return (
		<div className="coupon-event-container">
			<TextLarge className="coupon-event-title">쿠폰 이벤트</TextLarge>
			<TextMedium className="coupon-event-subtitle">쿠폰을 받아보세요! 10개를 모으면 커피를 드립니다.</TextMedium>
			<TextSmall className="coupon-event-subtitle">현재 쿠폰 개수: {coupon}</TextSmall>
			<Button className="order-button" onClick={getCoupon}>
				쿠폰 받기
			</Button>
			<Button className="coupon-submit-button" onClick={orderByCoupon} disabled={!isCouponFull}>
				쿠폰 제출하기
			</Button>
		</div>
	);
};

//상태가 많으면 안되는 이유

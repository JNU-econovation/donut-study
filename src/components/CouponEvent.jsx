import { useCoupon } from "../hooks/useCoupon";
import { Button } from "../common/Button";
import "./style/CouponEvent.style.scss";

export const CouponEvent = () => {
	const { coupon, isCouponFull, getCoupon, orderByCoupon } = useCoupon();
	return (
		<div className="coupon-event-container">
			<p className="coupon-event-title">쿠폰 이벤트</p>
			<p className="coupon-event-subtitle">쿠폰을 받아보세요! 10개를 모으면 커피를 드립니다.</p>
			<p className="coupon-event-subtitle">현재 쿠폰 개수: {coupon}</p>
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

import { useCoupon } from "../hooks/useCoupon";

export const CouponEvent = () => {
  const { coupon, isCouponFull, getCoupon, orderByCoupon } = useCoupon();
  return (
    <div className="coupon-event-container">
      <p className="coupon-event-title">쿠폰함</p>
      <p className="coupon-event-subtitle">쿠폰을 받아보세요! 10개를 모으면 커피를 드립니다.</p>
      <p className="coupon-event-subtitle">현재 쿠폰 개수: {coupon}</p>
      <button className="order-button" onClick={getCoupon}>
        쿠폰 받기
      </button>
      <button className="coupon-submit-button" onClick={orderByCoupon} disabled={!isCouponFull}>
        쿠폰 제출하기
      </button>
    </div>
  );
};

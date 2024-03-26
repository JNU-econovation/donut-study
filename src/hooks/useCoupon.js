import { useState } from "react";

export const useCoupon = () => {
  const [coupon, setCoupon] = useState(0);
  const isCouponFull = () => {
    return coupon === 10;
  };

  const getCoupon = () => {
    setCoupon(coupon + 1);
  };

  const orderByCoupon = () => {
    if (isCouponFull()) {
      alert("쿠폰 10개를 모아 커피를 받으세요!");
      setCoupon(0);
      return;
    }
    alert("쿠폰이 부족합니다.");
  };

  return { coupon, isCouponFull, getCoupon, orderByCoupon };
};

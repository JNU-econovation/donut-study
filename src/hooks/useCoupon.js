import { useState } from "react";

export const useCoupon = () => {
	const [coupon, setCoupon] = useState(0);
	const isCouponFull = () => {
		return coupon === 10;
	};

	const isCouponOver = () => {
		return coupon > 10;
	};

	const isCouponLack = () => {
		return coupon < 10;
	};

	const getCoupon = () => {
		setCoupon(coupon + 1);
	};

	const orderByCoupon = () => {
		switch (true) {
			case isCouponFull():
				alert("쿠폰 10개를 모두 모으셨습니다. 커피를 드립니다.");
				setCoupon(0);
				break;
			case isCouponOver():
				alert("쿠폰 10개를 모두 모았습니다. 커피를 드립니다.");
				setCoupon(coupon - 10);
				break;
			case isCouponLack():
				alert("쿠폰이 부족합니다.");
				break;
			default:
				break;
		}
	};
	return { coupon, isCouponFull, getCoupon, orderByCoupon };
};

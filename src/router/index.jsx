import { Routes, Route } from "react-router-dom";
import { MyCardPage } from "../pages/MyCard.page";
import { CouponEventPage } from "../pages/CouponEvent.page";
import { CreditCardPage } from "../pages/CreditCard.page";

export function Router() {
	return (
		<Routes>
			<Route path="/mission1" element={<MyCardPage />} />
			<Route path="/mission2" element={<CouponEventPage />} />
			<Route path="/mission3" element={<CreditCardPage />} />
		</Routes>
	);
}

import { Routes, Route } from "react-router-dom";
import { NameCardPage } from "../pages/NameCard.page";
import { CouponEventPage } from "../pages/CouponEvent.page";
import { CreditCardPage } from "../pages/CreditCard.page";

export function Router() {
	return (
		<Routes>
			<Route path="/mission1" element={<NameCardPage />} />
			<Route path="/mission2" element={<CouponEventPage />} />
			<Route path="/mission3" element={<CreditCardPage />} />
		</Routes>
	);
}

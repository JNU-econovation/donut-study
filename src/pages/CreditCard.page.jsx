import { CreditCard } from "../components/CreditCard";
import { Layout } from "../common/Layout";
import { Suspense } from "react";

export const CreditCardPage = () => {
	return (
		<Layout>
			<Suspense fallback={<div>Loading...</div>}>
				<div className="card-component-container">
					<CreditCard />
				</div>
			</Suspense>
		</Layout>
	);
};

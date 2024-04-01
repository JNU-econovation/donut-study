import { Layout } from "../common/Layout";
import { MyCard } from "../components/MyCard";

export const MyCardPage = () => {
	return (
		<Layout>
			<div className="card-component-container">
				<MyCard />
			</div>
		</Layout>
	);
};

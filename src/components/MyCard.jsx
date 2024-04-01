import { getImgUrlBy } from "../hooks/util";
export const MyCard = () => {
	const cardImg = "cardImg.jpg";
	const CARD_TITLE = "25기 김동완";
	const CARD_CONTENTS = [
		"에코노베이션 25기 프론트엔드로 활동 중인 김동완입니다.",
		"리액트에 대해서 처음부터 다시 배운다는 마음가짐으로 열심히 참여하겠습니다.",
		"리뷰어로 참여해주시는 모든 OB분들과 CM분들께 정말 감사드립니다.",
		"스터디가 에코노베이션의 새로운 프론트엔드 커뮤니티가 될 수 있도록 기반을 잘 다져보겠습니다.",
	];

	return (
		<div className="card-container">
			<div className="card-img-container">
				<img className="card-img" src={getImgUrlBy(cardImg)} alt="nameCardImg" />
			</div>
			<div className="card-text-container">
				<div className="card-title-container">
					<h1 className="card-title">{CARD_TITLE}</h1>
				</div>
				<div className="card-content-container">
					{CARD_CONTENTS.map((content, index) => (
						<p key={index} className="card-content">
							{content}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

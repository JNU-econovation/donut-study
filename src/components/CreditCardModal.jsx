import "./style/CreditCard.style.scss";

export const CreditCardModal = ({ cardOwner, cardNumber }) => {
	return (
		<div className="card-modal-container">
			<hr />
			<div className="payer-detail-container">
				<div className="card-img-wrapper">
					<img src="../src/img/creditCard.png" alt="credit-card" />
				</div>
				<div className="payer-wrapper">
					<p className="payer-name">결제자: {cardOwner}</p>
					<p className="payer-card-number">카드 번호: {cardNumber}</p>
				</div>
			</div>
		</div>
	);
};

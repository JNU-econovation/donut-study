import { CreditCardInput } from "./CreditCardInput";
import { Button } from "../common/Button";
import { useCardForm } from "../hooks/useCardForm";
import { CreditCardModal } from "./CreditCardModal";
import "./style/CreditCard.style.scss";

export const CreditCard = () => {
	const { state, modalState, submitCardForm, setCardOwner, setCardNumber, setCardDate, setCardCvc, setCardPassword } =
		useCardForm();
	const payerDetail = modalState.payerDetail;
	const payerName = payerDetail.cardOwner;
	const payerCardNumber = payerDetail.cardNumber;
	const splitCardNumber = payerCardNumber
		.replace(/-/g, "")
		.replace(/(\d{4})/g, "$1-")
		.slice(0, -1);

	return (
		<div className="card-container">
			<div className="card-notice">
				<p>결제 카드 정보를 입력해주세요.</p>
			</div>
			<div className="card-data-form" value={state}>
				<div className="card-owner-wrapper">
					<CreditCardInput
						className={"card-owner-input"}
						labelText={"성명"}
						type="text"
						inputValue={state.cardOwner}
						onChange={(e) => setCardOwner(e.target.value)}
						placeholder="이름을 입력해주세요"
					/>
				</div>
				<div className="card-number-wrapper">
					<CreditCardInput
						className={"card-number-input"}
						labelText={"카드 번호"}
						inputValue={state.cardNumber}
						onChange={(e) => setCardNumber(e.target.value)}
						type="text"
						placeholder="카드 번호를 입력해주세요"
					/>
				</div>
				<div className="card-date-cvc-wrapper">
					<CreditCardInput
						className={"card-date-input"}
						labelText={"유효 기간"}
						type="text"
						inputValue={state.cardDate}
						onChange={(e) => setCardDate(e.target.value)}
						placeholder="MM/YY"
					/>
					<CreditCardInput
						className={"card-cvc-input"}
						labelText={"CVC"}
						inputValue={state.cardCvc}
						onChange={(e) => setCardCvc(e.target.value)}
						type="text"
						placeholder="카드 뒷면 3자리 숫자"
					/>
				</div>
				<div className="card-password-wrapper">
					<CreditCardInput
						className={"card-password-input"}
						labelText={"비밀번호"}
						inputValue={state.cardPassword}
						onChange={(e) => setCardPassword(e.target.value)}
						type="password"
						placeholder="카드 비밀번호 앞 2자리"
					/>
				</div>
				<Button className="card-submit-button" onClick={submitCardForm}>
					결제하기
				</Button>
			</div>
			{modalState.isModalOpen && <CreditCardModal cardOwner={payerName} cardNumber={splitCardNumber} />}
		</div>
	);
};

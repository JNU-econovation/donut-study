import { useState } from "react";
import { validateCardForm } from "../functions/validator";

export const useCardForm = () => {
	const [cardOwner, setCardOwner] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardDate, setCardDate] = useState("");
	const [cardCvc, setCardCvc] = useState("");
	const [cardPassword, setCardPassword] = useState("");
	const state = { cardOwner, cardNumber, cardDate, cardCvc, cardPassword };

	const submitCardForm = () => {
		const isValid = validateCardForm(state);
		if (!isValid) {
			return;
		}
		noticeSubmitSuccess();
		resetCardForm();
	};

	const noticeSubmitSuccess = () => {
		alert("결제가 완료되었습니다.");
	};

	const resetCardForm = () => {
		setCardOwner("");
		setCardNumber("");
		setCardDate("");
		setCardCvc("");
		setCardPassword("");
	};

	return { state, submitCardForm, setCardOwner, setCardNumber, setCardDate, setCardCvc, setCardPassword };
};

import { useState } from "react";

export const useCardForm = () => {
	const [cardOwner, setCardOwner] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardDate, setCardDate] = useState("");
	const [cardCvc, setCardCvc] = useState("");
	const [cardPassword, setCardPassword] = useState("");
	const state = { cardOwner, cardNumber, cardDate, cardCvc, cardPassword };
	const submitCardForm = () => {
		noticeSubmitSuccess();
		resetCardForm();
	};

	const noticeSubmitSuccess = () => {
		printCardFormResult();
		alert("결제가 완료되었습니다.");
	};

	const resetCardForm = () => {
		setCardOwner("");
		setCardNumber("");
		setCardDate("");
		setCardCvc("");
		setCardPassword("");
	};

	const printCardFormResult = () => {
		console.log(state);
	};

	return { state, submitCardForm, setCardOwner, setCardNumber, setCardDate, setCardCvc, setCardPassword };
};

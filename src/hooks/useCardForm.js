import { useState } from "react";
import { validateCardForm } from "../functions/validator";

export const useCardForm = () => {
	const [payerDetail, setPayerDetail] = useState({
		cardOwner: "",
		cardNumber: "",
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [cardOwner, setCardOwner] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardDate, setCardDate] = useState("");
	const [cardCvc, setCardCvc] = useState("");
	const [cardPassword, setCardPassword] = useState("");
	const state = { cardOwner, cardNumber, cardDate, cardCvc, cardPassword };
	const modalState = { payerDetail, isModalOpen };

	const submitCardForm = () => {
		const isValid = validateCardForm(state);
		if (!isValid) {
			return;
		}
		noticeSubmitSuccess();
		getPayDetail(cardOwner, cardNumber);
		openModal();
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

	const openModal = () => {
		setIsModalOpen(true);
	};

	const getPayDetail = (cardOwner, cardNumber) => {
		setPayerDetail({ cardOwner, cardNumber });
	};

	return {
		state,
		modalState,
		submitCardForm,
		getPayDetail,
		setPayerDetail,
		setCardOwner,
		setCardNumber,
		setCardDate,
		setCardCvc,
		setCardPassword,
	};
};

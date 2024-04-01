const isCardOwner = (cardOwner) => /^[가-힣]{2,4}$/.test(cardOwner);
const isCardNumber = (cardNumber) => /^[0-9]{16}$/.test(cardNumber);
const isCardDate = (cardDate) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDate);
const isCardCvc = (cardCvc) => /^[0-9]{3}$/.test(cardCvc);
const isCardPassword = (cardPassword) => /^[0-9]{2}$/.test(cardPassword);

export const validateCardForm = (state) => {
	const { cardOwner, cardNumber, cardDate, cardCvc, cardPassword } = state;
	const isValidCardOwner = isCardOwner(cardOwner);
	const isValidCardNumber = isCardNumber(cardNumber);
	const isValidCardDate = isCardDate(cardDate);
	const isValidCardCvc = isCardCvc(cardCvc);
	const isValidCardPassword = isCardPassword(cardPassword);
	if (!isValidCardOwner) {
		alert("성명을 다시 확인해주세요.");
		return false;
	}
	if (!isValidCardNumber) {
		alert("카드 번호를 다시 확인해주세요.");
		return false;
	}
	if (!isValidCardDate) {
		alert("유효 기간을 다시 확인해주세요.");
		return false;
	}
	if (!isValidCardCvc) {
		alert("CVC를 다시 확인해주세요.");
		return false;
	}
	if (!isValidCardPassword) {
		alert("비밀번호를 다시 확인해주세요.");
		return false;
	}
	return true;
};

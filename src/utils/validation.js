export const cardNameCheck = (cardName) => {
  const checkName = /^[a-zA-Z0-9가-힣]+$/;

  if (cardName.length > 10) {
    // alert('이름은 10자 이하로 입력해주세요!');
    return false;
  }

  if (cardName.trim() === '') {
    // alert('카드 이름을 입력해주세요!');
    return false;
  }

  if (!checkName.test(cardName)) {
    // alert('카드 이름에 특수문자를 포함할 수 없습니다!');
    return false;
  }

  return true;
};

export const cvcNumberCheck = (cvcNumber) => {
  const checkCvc = /^\d{3}$/;

  if (cvcNumber.length > 3) {
    // alert('cvc입력오류')
    return false
  }

  if (cvcNumber.trim() === '') {
    // alert('cvc입력오류')
    return false
  }

  if (!checkCvc.test(cvcNumber)) {
    // alert('cvc입력오류')
    return false
  }

  return true
}
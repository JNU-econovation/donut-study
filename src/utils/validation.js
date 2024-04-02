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

export const dateCheck = (expirationDate) => {
  const checkDate = /^\d{4}$/;
  const month = parseInt(expirationDate.slice(0, 2));
  const year = parseInt(expirationDate.slice(2, 4));


  if (expirationDate.length > 4) {
    return false
  }

  if (expirationDate.trim() === '') {
    // alert('공백금지!');
    return false;
  }

  if (month > 12) {
    // alert('달 확인 부탁');
    return false
  }

  if (year < 24) {
    // alert('년 확인 부탁');
    return false
  }

  if (!checkDate.test(expirationDate)) {
    return false
  }

  return true
}

export const passWordCheck = (passWord) => {
  const checkPw = /^\d{2}$/;

  if (passWord.length > 2) {
    return false
  }

  if (passWord.trim() === '') {
    return false
  }

  if (!checkPw.test(passWord)) {
    return false
  }

  return true
}

export const cardNumberCheck = (cardNumber) => {
  const numbers = cardNumber.split('-');
  const checkCardNumber = /^\d{4}$/;

  for (const number of numbers) {
    if (number.length > 4) {
      alert('4글자 이상')
      return false
    }

    if (number.trim() === '') {
      alert('공백')
      return false
    }

    if (!checkCardNumber.test(number)) {
      alert('카드넘버 오류')
      return false
    }
  }
  return true
}
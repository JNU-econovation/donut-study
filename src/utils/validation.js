export const cardNameCheck = (cardName) => {
  const checkName = /^[a-zA-Z0-9가-힣]+$/;
  return checkName.test(cardName);
};
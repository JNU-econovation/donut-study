export const cardNameCheck = (cardName) => {
  const checkName = /^[a-zA-Z0-9]+$/;
  return checkName.test(cardName);
};
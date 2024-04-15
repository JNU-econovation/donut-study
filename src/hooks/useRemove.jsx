const useRemove = (cardList, setCardList) => {
  const removeCard = (targetId) => {
    const updatedCardList = cardList.filter((card) => card.id !== targetId);
    setCardList(updatedCardList);
  };

  return removeCard;
};

export default useRemove;

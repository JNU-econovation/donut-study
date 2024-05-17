import styled from "styled-components";

const TimeSlot = ({ time, onSelectTime, isActive }) => {
  const isHour = time.endsWith(":00");
  const isEnd = time === "20:00";

  return (
    <StyledTimeSlot onClick={() => onSelectTime(time)}>
      {isHour && <StyledTimeLabel>{time}</StyledTimeLabel>}{" "}
      {!isEnd && (
        <>
          <StyledEmptyArea></StyledEmptyArea>
          <StyledColorArea $isActive={isActive}></StyledColorArea>
        </>
      )}
    </StyledTimeSlot>
  );
};

export default TimeSlot;

const StyledTimeSlot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 1px solid #b9b9b9;
  border-top: none;
  align-items: center;
`;

const StyledEmptyArea = styled.div`
  width: 4rem;
  height: 1rem;
  box-sizing: border-box;
`;

const StyledColorArea = styled.div`
  width: 4rem;
  background-color: ${({ $isActive }) => ($isActive ? "#007bff" : "#f0f0f0")};
  height: 2rem;
  border-bottom: 1px solid #b9b9b9;
  cursor: pointer;
`;

const StyledTimeLabel = styled.div`
  position: absolute;
  top: -1.5rem;
  left: -1rem;
  font-size: 0.8rem;
  color: #555;
`;

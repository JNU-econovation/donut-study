import styled from "styled-components";
import TimeSlot from "./components/TimeSlot";
import generateTimes from "./utils/generateTimes";
import formatReservationTime from "./utils/formatReservationTime";
import useSelectedTimes from "./hooks/useSelectedTimes";

const App = () => {
  const times = generateTimes(9, 20);
  const { selectedTimes, handleSelectTime } = useSelectedTimes();

  const handleReservation = () => {
    if (selectedTimes.length === 0) {
      alert("예약할 시간을 선택해주세요.");
      return;
    }

    const sortedTimes = [...selectedTimes].sort((a, b) => {
      return new Date(`1970/01/01 ${a}`) - new Date(`1970/01/01 ${b}`);
    });

    const reservationTimes = sortedTimes.map(formatReservationTime);

    alert(
      `예약이 완료되었습니다.\n\n[예약 시간]\n${reservationTimes.join(",\n")}`
    );
  };

  return (
    <div>
      <StyledLayout>
        <h1>스터디룸 예약 서비스</h1>
        <StyledTimeTable>
          {times.map((time, index) => (
            <TimeSlot
              key={index}
              time={time}
              onSelectTime={handleSelectTime}
              isActive={selectedTimes.includes(time)}
            />
          ))}
        </StyledTimeTable>
        <StyledButton onClick={handleReservation}>예약하기</StyledButton>
      </StyledLayout>
    </div>
  );
};

export default App;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;
  gap: 10rem;
`;

const StyledButton = styled.button`
  padding: 1rem 4rem;
  border: none;
  font-size: 1.1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: #e2e8f0;
`;

const StyledTimeTable = styled.div`
  display: flex;
  justify-content: center;
`;

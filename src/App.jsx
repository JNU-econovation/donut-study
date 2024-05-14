import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const times = [];
  for (let hour = 9; hour <= 19; hour++) {
    times.push(`${hour}:00`);
    if (hour !== 20) {
      times.push(`${hour}:30`);
    }
  }

  // 선택된 시간대를 저장하는 상태를 추가합니다.
  const [selectedTimes, setSelectedTimes] = useState([]);

  // 시간대 선택 상태를 업데이트하는 함수입니다.
  const handleSelectTime = (time) => {
    setSelectedTimes((prevSelected) =>
      prevSelected.includes(time)
        ? prevSelected.filter((t) => t !== time)
        : [...prevSelected, time]
    );
  };

  // 예약하기 버튼 클릭 처리 함수
  const handleReservation = () => {
    if (selectedTimes.length === 0) {
      alert("예약할 시간을 선택해주세요.");
      return;
    }

    // 시간대 정렬
    const sortedTimes = [...selectedTimes].sort((a, b) => {
      return new Date(`1970/01/01 ${a}`) - new Date(`1970/01/01 ${b}`);
    });

    // 각 시간대에 대해 "시작 시간부터 시작 시간 + 30분" 형식으로 변환
    const reservationTimes = sortedTimes.map((time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const endTime = new Date(1970, 0, 1, hours, minutes + 30);
      const formattedEndTime = `${endTime.getHours()}:${
        endTime.getMinutes() === 0 ? "00" : endTime.getMinutes()
      }`;

      return `${time} ~ ${formattedEndTime}`;
    });

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

const TimeSlot = ({ time, onSelectTime, isActive }) => {
  return (
    <StyledTimeSlot onClick={() => onSelectTime(time)}>
      <StyledEmptyArea></StyledEmptyArea>
      <StyledColorArea isActive={isActive}></StyledColorArea>
    </StyledTimeSlot>
  );
};

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

const StyledTimeSlot = styled.div`
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #b9b9b9;
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
  background-color: ${({ isActive }) => (isActive ? "#007bff" : "#f0f0f0")};
  height: 2rem;
  border: 1px solid #b9b9b9;
  cursor: pointer;
`;

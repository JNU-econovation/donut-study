import styled from "styled-components";

const App = () => {
  const times = [];
  for (let hour = 9; hour <= 20; hour++) {
    times.push(`${hour}:00`);
    if (hour !== 20) {
      times.push(`${hour}:30`);
    }
  }
  return (
    <div>
      <StyledLayout>
        <h1>스터디룸 예약 서비스</h1>
        <StyledTimeTable>
          {times.map((time, index) => (
            <StyledTimeSlot key={index}>
              <StyledEmptyArea></StyledEmptyArea>
              <StyledColorArea></StyledColorArea>
            </StyledTimeSlot>
          ))}
        </StyledTimeTable>
        <StyledButton>예약하기</StyledButton>
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
  background-color: #f0f0f0;
  height: 2rem;
  border: 1px solid #b9b9b9;
  cursor: pointer;
  &:hover {
    background-color: #e2e8f0;
  }
`;

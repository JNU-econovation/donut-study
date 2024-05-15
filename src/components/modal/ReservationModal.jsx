import { useState } from "react";
import { useSelectedTime } from "../../context/ReservationContext";

const dutation = [
  { id: 1, time: "30분" },
  { id: 2, time: "1시간" },
  { id: 3, time: "1시간 30분" },
  { id: 4, time: "2시간" },
];

// eslint-disable-next-line react/prop-types
export default function ReservationModal({ close }) {
  const [reservationDuration, setReservationDuration] = useState(0);
  const [userInput, setUserInput] = useState({
    studentId: "",
    name: "",
  });
  const {
    selectedTime: { time: selectedTime, day: selectedDay, date: selectedDate },
  } = useSelectedTime();

  const reserve = () => {
    const reservationData = {
      time: selectedTime,
      duration: dutation.find(({ id }) => id === reservationDuration).time,
    };
    const { studentId, name } = userInput;
    const resetvatedTime = selectedTime;
    const resetvatedDay = selectedDay;

    if (!studentId || !name) {
      alert("학번과 이름을 입력해주세요.");
      return;
    }
    if (!reservationDuration) {
      alert("예약 시간을 선택해주세요.");
      return;
    }

    const alertMessage = `예약이 완료되었습니다. 
${name}(${studentId})
${selectedDate}일 (${resetvatedDay}) ${resetvatedTime}_${reservationData.duration} 동안`;
    alert(alertMessage);
    close();
  };

  return (
    <>
      <section
        className="fixed top-0 left-0 bg-slate-400 w-[100%] h-[100%] opacity-80"
        onClick={close}
      />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-xl flex flex-col gap-2 p-4">
        <div className="flex justify-between">
          <h3 className="text-xl text-center w-full border-b-2">예약하기</h3>
          <button type="button" onClick={close}>
            X
          </button>
        </div>
        <p>
          일시 : {selectedDate}일 ({selectedDay}요일) {selectedTime}
        </p>

        {/* input field */}
        <div className="flex gap-4 py-4">
          <input
            type="text"
            onChange={(e) =>
              setUserInput({ ...userInput, studentId: e.target.value })
            }
            placeholder="학번"
            className="p-2 rounded-full w-full bg-slate-100"
          />
          <input
            type="text"
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
            placeholder="이름"
            className="p-2 rounded-full w-full bg-slate-100"
          />
        </div>

        {/* button */}
        <div className="grid grid-cols-2 grow">
          {dutation.map(({ id, time }) => (
            <button
              key={id}
              className={`h-16 rounded-xl ${
                reservationDuration == id ? "bg-green-500" : ""
              }`}
              onClick={() => setReservationDuration(id)}
            >
              {time}
            </button>
          ))}
        </div>

        <button
          className="bg-green-900 text-gray-200 rounded-lg py-2"
          onClick={reserve}
        >
          예약하기
        </button>
      </div>
    </>
  );
}

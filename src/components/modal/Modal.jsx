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
  const {
    selectedTime: { time: selectedTime, day: selectedDay },
  } = useSelectedTime();

  const reserve = () => {
    const reservationData = {
      time: selectedTime,
      duration: dutation.find(({ id }) => id === reservationDuration).time,
    };
    const resetvatedTime = selectedTime;
    const resetvatedDay = selectedDay;

    const alertMessage = `예약이 완료되었습니다. 
    ${resetvatedDay} ${resetvatedTime} ${reservationData.duration} 예약되었습니다.`;

    alert(alertMessage);
  };
  return (
    <>
      <section
        className="absolute top-0 left-0 bg-slate-400 w-screen h-screen opacity-80"
        onClick={close}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-72 bg-amber-600">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3>예약하기</h3>
            <p>
              {selectedTime}({selectedDay})
            </p>
            <button type="button" onClick={close}>
              닫기
            </button>
          </div>

          {/* input field */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="학번"
              className="p-2 rounded-full w-full"
            />
            <input
              type="text"
              placeholder="이름"
              className="p-2 rounded-full w-full"
            />
          </div>

          {/* button */}
          <div className="grid grid-cols-2">
            {dutation.map(({ id, time }) => (
              <button
                key={id}
                className={`${reservationDuration == id ? "bg-green-500" : ""}`}
                onClick={() => setReservationDuration(id)}
              >
                {time}
              </button>
            ))}
          </div>

          <button onClick={reserve}>예약하기</button>
        </div>
      </div>
    </>
  );
}

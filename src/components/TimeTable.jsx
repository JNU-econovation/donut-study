import { useState } from "react";
import ModalCreator from "./modal/ModalCreator";
import { useSelectedTime } from "../context/ReservationContext";

const defaultTimes = [
  { id: 0, time: "9:00" },
  { id: 1, time: "9:30" },
  { id: 2, time: "10:00" },
  { id: 3, time: "10:30" },
  { id: 4, time: "11:00" },
  { id: 5, time: "11:30" },
  { id: 6, time: "12:00" },
  { id: 7, time: "12:30" },
  { id: 8, time: "13:00" },
  { id: 9, time: "13:30" },
  { id: 10, time: "14:00" },
  { id: 11, time: "14:30" },
  { id: 12, time: "15:00" },
  { id: 13, time: "15:30" },
  { id: 14, time: "16:00" },
  { id: 15, time: "16:30" },
  { id: 16, time: "17:00" },
  { id: 17, time: "17:30" },
  { id: 18, time: "18:00" },
  { id: 19, time: "18:30" },
  { id: 20, time: "19:00" },
  { id: 21, time: "19:30" },
];

// eslint-disable-next-line react/prop-types
export default function TimeTable({ day, date }) {
  const [modalOn, setModalOn] = useState(false);
  const { setSelectedTime } = useSelectedTime();

  return (
    <div>
      <h2 className="text-center">
        <p>{day}</p>
        <p className="bg-green-700 text-gray-50 rounded-full">{date}</p>
      </h2>
      <ul>
        {defaultTimes.map(({ id, time }) => (
          <li key={`${id}-${day}-${time}`} className="truncate">
            <button
              type="button"
              className="border-b-2 p-2 text-green-700"
              onClick={() => {
                setSelectedTime({ time, day, date });
                setModalOn(true);
              }}
            >
              예약 가능
            </button>
          </li>
        ))}
      </ul>
      {modalOn && <ModalCreator close={() => setModalOn(false)} />}
    </div>
  );
}

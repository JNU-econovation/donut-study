import { useState } from "react";
import ModalCreator from "./modal/ModalCreator";
import { useSelectedTime } from "../context/ReservationContext";

const defaultTimes = [
  { id: 0, time: "9:00", isSet: false, isHalf: false, Deadline: "9:30" },
  { id: 1, time: "9:30", isSet: false, isHalf: true, Deadline: "10:00" },
  { id: 2, time: "10:00", isSet: false, isHalf: false, Deadline: "10:30" },
  { id: 3, time: "10:30", isSet: false, isHalf: true, Deadline: "11:00" },
  { id: 4, time: "11:00", isSet: false, isHalf: false, Deadline: "11:30" },
  { id: 5, time: "11:30", isSet: false, isHalf: true, Deadline: "12:00" },
  { id: 6, time: "12:00", isSet: false, isHalf: false, Deadline: "12:30" },
  { id: 7, time: "12:30", isSet: false, isHalf: true, Deadline: "13:00" },
  { id: 8, time: "13:00", isSet: false, isHalf: false, Deadline: "13:30" },
  { id: 9, time: "13:30", isSet: false, isHalf: true, Deadline: "14:00" },
  { id: 10, time: "14:00", isSet: false, isHalf: false, Deadline: "14:30" },
  { id: 11, time: "14:30", isSet: false, isHalf: true, Deadline: "15:00" },
  { id: 12, time: "15:00", isSet: false, isHalf: false, Deadline: "15:30" },
  { id: 13, time: "15:30", isSet: false, isHalf: true, Deadline: "16:00" },
  { id: 14, time: "16:00", isSet: false, isHalf: false, Deadline: "16:30" },
  { id: 15, time: "16:30", isSet: false, isHalf: true, Deadline: "17:00" },
  { id: 16, time: "17:00", isSet: false, isHalf: false, Deadline: "17:30" },
  { id: 17, time: "17:30", isSet: false, isHalf: true, Deadline: "18:00" },
  { id: 18, time: "18:00", isSet: false, isHalf: false, Deadline: "18:30" },
  { id: 19, time: "18:30", isSet: false, isHalf: true, Deadline: "19:00" },
  { id: 20, time: "19:00", isSet: false, isHalf: false, Deadline: "19:30" },
  { id: 21, time: "19:30", isSet: false, isHalf: true, Deadline: "20:00" },
];

// eslint-disable-next-line react/prop-types
export default function TimeTable({ day }) {
  const [modalOn, setModalOn] = useState(false);
  const { setSelectedTime } = useSelectedTime();

  return (
    <div>
      <h2 className="text-center">{day}</h2>
      <ul>
        {defaultTimes.map(({ id, time }) => (
          <li key={`${id}-${day}-${time}`} className="truncate">
            <button
              type="button"
              className="border-b-2 p-2 text-green-700"
              onClick={() => {
                setSelectedTime({ time, day });
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

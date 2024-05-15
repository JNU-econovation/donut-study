import { useState } from "react";
import ModalCreator from "./modal/ModalCreator";
import { useSelectedTime } from "../context/ReservationContext";
import { timeline } from "../constants/date";

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
        {timeline.map(({ id, time }) => (
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

import { useEffect, useState } from "react";
import TimeTable from "./components/TimeTable";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const timeline = [
  { id: 1, time: "9:00" },
  { id: 2, time: "9:30" },
  { id: 3, time: "10:00" },
  { id: 4, time: "10:30" },
  { id: 5, time: "11:00" },
  { id: 6, time: "11:30" },
  { id: 7, time: "12:00" },
  { id: 8, time: "12:30" },
  { id: 9, time: "13:00" },
  { id: 10, time: "13:30" },
  { id: 11, time: "14:00" },
  { id: 12, time: "14:30" },
  { id: 13, time: "15:00" },
  { id: 14, time: "15:30" },
  { id: 15, time: "16:00" },
  { id: 16, time: "16:30" },
  { id: 17, time: "17:00" },
  { id: 18, time: "17:30" },
  { id: 19, time: "18:00" },
  { id: 20, time: "18:30" },
  { id: 21, time: "19:00" },
  { id: 22, time: "19:30" },
];

function App() {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      fetch("api/time", { signal })
        .then((res) => res.json())
        .then((data) => setTimeData(data));
    } catch (error) {
      console.error(error);
    }

    return () => controller.abort();
  }, []);

  return (
    <section>
      <header className="text-lg">그룹 스터디룸 6인 (최소 3인)</header>
      <nav className="flex gap-8">
        <ul>
          <h2 className="text-center">요일</h2>
          {timeline.map(({ id, time }) => (
            <li
              key={id}
              className="border-b-2 border-solid border-gray-400 p-2 text-center"
            >
              {time}
            </li>
          ))}
        </ul>
        <ul className="flex gap-8">
          {daysOfWeek.map((day, index) => (
            <TimeTable key={`${day}-${index}`} timeData={timeData} day={day} />
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default App;

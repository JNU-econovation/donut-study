import TimeTable from "./components/TimeTable";
import { daysOfWeek, timeline } from "./constants/date";
import weekDaysInfo from "./utils/date";

function App() {
  return (
    <section className="p-4">
      <header className="text-3xl text-center mb-2 border-b-2">
        그룹 스터디룸 6인 (최소 3인)
      </header>
      <nav className="flex gap-8">
        <ul className="pt-12">
          {timeline.map(({ id, time }) => (
            <li
              key={id}
              className={`border-b-2 border-solid border-gray-400 p-2 text-center`}
            >
              <p>{time}</p>
            </li>
          ))}
        </ul>
        <ul className="flex gap-8">
          {daysOfWeek.map((day, index) => (
            <TimeTable
              key={`${day}-${index}`}
              day={day}
              date={weekDaysInfo[index].date}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default App;

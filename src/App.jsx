const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

function App() {
  return (
    <section>
      <h1 className="text-lg">그룹 스터디룸 6인 (최소 3인)</h1>
      <nav className="bg-slate-950">
        <ul>
          {daysOfWeek.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default App;

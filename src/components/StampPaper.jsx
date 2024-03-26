import Stamp from "./Stamp";

export default function StampPaper({ order }) {
  return (
    <div className="text-start mx-auto bg-slate-50 w-[690px]">
      {Array.from({ length: order }).map((_, index) => (
        <Stamp key={index} isChecked={false} />
      ))}
      {Array.from({ length: 10 - order }).map((_, index) => (
        <Stamp key={index} isChecked={true} />
      ))}
    </div>
  );
}

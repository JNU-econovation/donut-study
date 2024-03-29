import Stamp from "./Stamp";

export default function StampPaper({ orderCount }) {
  return (
    <div className="text-start mx-auto border-r border-t w-[690px] overflow-hidden">
      {Array.from({ length: orderCount }).map((_, index) => (
        <Stamp key={index} isChecked={false} />
      ))}
      {Array.from({ length: 10 - orderCount }).map((_, index) => (
        <Stamp key={index} isChecked={true} />
      ))}
    </div>
  );
}

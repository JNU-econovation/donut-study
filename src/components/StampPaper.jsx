import { MAX_ORDER_COUNT } from "../constants/order";
import Stamp from "./Stamp";

export default function StampPaper({ orderCount }) {
  return (
    <div className="text-start mx-auto border-r border-t w-[690px] overflow-hidden">
      {Array.from({ length: MAX_ORDER_COUNT }).map((_, index) => (
        <Stamp key={index} isChecked={index >= orderCount} />
      ))}
    </div>
  );
}

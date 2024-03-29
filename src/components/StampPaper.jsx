import { v4 as uuidv4 } from "uuid";
import { MAX_ORDER_COUNT } from "../constants/order";
import Stamp from "./Stamp";

export default function StampPaper({ orderCount }) {
  return (
    <div className="text-start mx-auto border-r border-t w-[690px] overflow-hidden">
      {Array.from({ length: MAX_ORDER_COUNT }).map((_, index) => (
        <Stamp key={uuidv4()} isChecked={index >= orderCount} />
      ))}
    </div>
  );
}

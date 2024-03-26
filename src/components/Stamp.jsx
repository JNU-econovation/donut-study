import stamp from "/src/assets/stamp.png";
import checkedStamp from "/src/assets/complete-stamp.png";

export default function Stamp({ isChecked }) {
  return (
    <div className="inline-block p-10 border-l border-b">
      {isChecked ? (
        <img src={stamp} className="w-14 h-14" />
      ) : (
        <img src={checkedStamp} className="w-14 h-14" />
      )}
    </div>
  );
}

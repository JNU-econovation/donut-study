export default function Stamp({ isChecked }) {
  return (
    <div className={`inline-block p-10`}>
      {isChecked ? (
        <img src="/src/assets/stamp.png" className="w-14 h-14" />
      ) : (
        <img src="/src/assets/complete-stamp.png" className="w-14 h-14" />
      )}
    </div>
  );
}

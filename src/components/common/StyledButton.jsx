export default function StyledButton({ handler, text, disabled }) {
  return (
    <button
      className={`my-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg
        ${disabled ? "opacity-50" : "hover:bg-blue-700"}
      `}
      disabled={disabled}
      onClick={handler}
    >
      {text}
    </button>
  );
}

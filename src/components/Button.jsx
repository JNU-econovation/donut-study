import styled from "styled-components";
const Button = ({ text, onClick, color, fontColor }) => {
  return (
    <>
      <button
        style={{ backgroundColor: color, color: fontColor }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

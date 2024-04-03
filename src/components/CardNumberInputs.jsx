// CardNumberInputs 컴포넌트
import React from "react";
import DataInput from "./DataInput";

const CardNumberInputs = ({ cardNumbers, handleInputChange }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {cardNumbers.map((number, index) => (
        <DataInput
          key={index}
          placeholder={"0000"}
          value={number}
          onChange={handleInputChange(index)}
        />
      ))}
    </div>
  );
};

export default CardNumberInputs;

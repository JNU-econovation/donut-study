// CardNumberInputs 컴포넌트
import React from "react";
import DataInput from "./DataInput"; // DataInput 컴포넌트를 임포트합니다.

const CardNumberInputs = ({ cardNumbers, handleInputChange }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>카드번호</div>
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

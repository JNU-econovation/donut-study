import React from "react";
import styled from "styled-components";

function DataInput({ type, placeholder, InputData, value, onChange }) {
  return (
    <InputForm>
      <label>{InputData} </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputForm>
  );
}

export default DataInput;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  background-color: white;
  border-bottom: 0.0625rem solid #d9d9d9;
  input {
    border: none;
  }

  label {
    text-align: left;
  }
`;

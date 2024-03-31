import InputField from "../../molecules/InputFIeld/InputField";

export default function CardMMYYField({ cardMMYYChangeHandler, cardMMYY }) {
  return (
    <InputField
      inputLabel="만료일"
      inputType="text"
      placeholder="MM / YY"
      id="mmyy"
      onChange={cardMMYYChangeHandler}
      value={cardMMYY}
    />
  );
}

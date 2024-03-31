import InputField from "../../molecules/InputFIeld/InputField";

export default function CardCVCField({ cardCVCChangeHandler }) {
  return (
    <InputField
      inputLabel="CVC"
      inputType="number"
      placeholder="카드 뒷면 3자리 숫자"
      id="cvc"
      onChange={cardCVCChangeHandler}
    />
  );
}

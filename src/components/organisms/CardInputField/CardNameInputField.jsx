import { useId } from "react";
import InputField from "../../molecules/InputFIeld/InputField";

export default function CardNameInputField({
  cardNameChangeHandler,
  cardName,
}) {
  return (
    <InputField
      inputLabel="카드 이름"
      inputType="text"
      placeholder="카드 이름을 입력해주세요"
      onChange={cardNameChangeHandler}
      value={cardName}
    />
  );
}

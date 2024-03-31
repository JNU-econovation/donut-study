import InputField from "../../molecules/InputFIeld/InputField";

export default function CardPasswordField({
  cardPasswordChangeHandler,
  cardPassword,
}) {
  return (
    <InputField
      inputLabel="비밀번호"
      inputType="password"
      placeholder="카드 비밀번호 앞 2자리"
      id="password"
      onChange={cardPasswordChangeHandler}
      value={cardPassword}
    />
  );
}

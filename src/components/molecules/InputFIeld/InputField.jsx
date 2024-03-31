import styles from "./InputField.module.css";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";

export default function InputField({
  inputLabel,
  inputType,
  placeholder,
  id,
  value,
  onChange,
}) {
  return (
    <div className={styles.InputField}>
      <Label inputLabel={inputLabel} id={id} />
      <Input
        inputType={inputType}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

import styles from "./InputField.module.css";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import { useId } from "react";

export default function InputField({
  inputLabel,
  inputType,
  placeholder,
  value,
  onChange,
}) {
  const id = useId();
  const inputProps = {
    inputLabel,
    inputType,
    placeholder,
    id,
    value,
    onChange,
  };
  const inputLabelProps = {
    inputLabel,
    id,
  };
  return (
    <div className={styles.InputField}>
      <Label {...inputLabelProps} />
      <Input {...inputProps} />
    </div>
  );
}

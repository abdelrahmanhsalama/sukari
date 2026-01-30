import { useFormManager } from "@/hooks/useFormManager";
import { useState } from "react";
import EntrySubCard from "./EntrySubCard";
import EntryInput from "./EntryInput";
import EntrySelect from "./EntrySelect";
import EntryTime from "./EntryTime";
import EntryMessage from "./EntryMessage";
import EntryButton from "./EntryButton";

const options = [
  { id: "i-01", label: "🔵 Apidra" },
  { id: "i-02", label: "🟣 Lantus" },
];

const FormInsulin = () => {
  const {
    time,
    setTime,
    fieldsDisabled,
    successMessage,
    errorMessage,
    runSequence,
    valueInvalid,
  } = useFormManager();

  const [insulinValue, setInsulinValue] = useState<string>("");
  const [insulinType, setInsulinType] = useState<string>("none");

  const handleSubmit = () => {
    if (valueInvalid(insulinValue)) {
      runSequence("error", "Invalid Value", setInsulinValue, setInsulinType);
      return;
    } else {
      runSequence("success", "Saved!", setInsulinValue, setInsulinType);
      console.log({
        insulinValue: insulinValue,
        insulinType: insulinType,
        insulinTime: time,
      });
    }
  };

  return (
    <EntrySubCard>
      <EntryInput
        value={insulinValue}
        setValue={setInsulinValue}
        type="insulin"
        fieldsState={fieldsDisabled}
      />
      <EntrySelect
        value={insulinType}
        setValue={setInsulinType}
        type="insulin"
        options={options}
      />
      <EntryTime value={time} setValue={setTime} />
      {successMessage && (
        <EntryMessage message={successMessage} type="success" />
      )}
      {errorMessage && <EntryMessage message={errorMessage} type="error" />}
      <EntryButton onSubmit={handleSubmit} value={insulinValue} />
    </EntrySubCard>
  );
};

export default FormInsulin;

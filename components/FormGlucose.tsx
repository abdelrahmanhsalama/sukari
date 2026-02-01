import { useFormManager } from "@/hooks/useFormManager";
import { useState } from "react";
import EntrySubCard from "./EntrySubCard";
import EntryInput from "./EntryInput";
import EntrySelect from "./EntrySelect";
import EntryTime from "./EntryTime";
import EntryMessage from "./EntryMessage";
import EntryButton from "./EntryButton";
import EntryCard from "./EntryCard";

const options = [
  { id: "f-00", label: "None Selected" },
  { id: "f-01", label: "💪🏻 Before Workout" },
  { id: "f-02", label: "💦 After Workout" },
];

const FormGlucose = () => {
  const {
    time,
    setTime,
    fieldsDisabled,
    successMessage,
    errorMessage,
    runSequence,
    valueInvalid,
  } = useFormManager();

  const [glucoseValue, setGlucoseValue] = useState<string>("");
  const [glucoseFlag, setGlucoseFlag] = useState<string>("");

  const handleSubmit = () => {
    if (valueInvalid(glucoseValue)) {
      runSequence("error", "Invalid Value", setGlucoseValue, setGlucoseFlag);
      return;
    } else {
      runSequence("success", "Saved!", setGlucoseValue, setGlucoseFlag);
      console.log({
        glucoseValue: glucoseValue,
        glucoseFlag: glucoseFlag,
        glucoseTime: time,
      });
    }
  };

  return (
    <EntryCard title="Add Glucose Reading">
      <EntrySubCard>
        <EntryInput
          value={glucoseValue}
          setValue={setGlucoseValue}
          type="glucose"
          fieldsState={fieldsDisabled}
        />
        <EntrySelect
          value={glucoseFlag}
          setValue={setGlucoseFlag}
          type="glucose"
          options={options}
        />
        <EntryTime value={time} setValue={setTime} />
        {successMessage && (
          <EntryMessage message={successMessage} type="success" />
        )}
        {errorMessage && <EntryMessage message={errorMessage} type="error" />}
        <EntryButton onSubmit={handleSubmit} value={glucoseValue} />
      </EntrySubCard>
    </EntryCard>
  );
};

export default FormGlucose;

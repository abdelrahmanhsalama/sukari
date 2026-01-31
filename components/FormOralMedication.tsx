import { useFormManager } from "@/hooks/useFormManager";
import { useState } from "react";
import EntryInput from "./EntryInput";
import EntrySelect from "./EntrySelect";
import EntryTime from "./EntryTime";
import EntryMessage from "./EntryMessage";
import EntryButton from "./EntryButton";
import EntrySubCard from "./EntrySubCard";

const options = [
  { id: "m-01", label: "🔵 Medication 01" },
  { id: "m-02", label: "🟣 Medication 02" },
];

const FormOralMedication = () => {
  const {
    time,
    setTime,
    fieldsDisabled,
    successMessage,
    errorMessage,
    runSequence,
    valueInvalid,
  } = useFormManager();

  const [medicationValue, setMedicationValue] = useState<string>("");
  const [medicationType, setMedicationType] = useState<string>("");

  const handleSubmit = () => {
    if (valueInvalid(medicationValue)) {
      runSequence(
        "error",
        "Invalid Value",
        setMedicationValue,
        setMedicationType,
      );
      return;
    } else {
      runSequence("success", "Saved!", setMedicationValue, setMedicationType);
      console.log({
        medicationValue: medicationValue,
        medicationType: medicationType,
        medicationTime: time,
      });
    }
  };

  return (
    <EntrySubCard>
      <EntryInput
        value={medicationValue}
        setValue={setMedicationValue}
        type="medication"
        fieldsState={fieldsDisabled}
      />
      <EntrySelect
        value={medicationType}
        setValue={setMedicationType}
        type="medication"
        options={options}
      />
      <EntryTime value={time} setValue={setTime} />
      {successMessage && (
        <EntryMessage message={successMessage} type="success" />
      )}
      {errorMessage && <EntryMessage message={errorMessage} type="error" />}
      <EntryButton onSubmit={handleSubmit} value={medicationValue} />
    </EntrySubCard>
  );
};

export default FormOralMedication;

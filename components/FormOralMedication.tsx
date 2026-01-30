import { useFormManager } from "@/hooks/useFormManager";
import { useState } from "react";

const FormOralMedication = () => {
  const {
    time,
    setTime,
    fieldsDisabled,
    success,
    error,
    runSequence,
    valueInvalid,
  } = useFormManager();

  const [medicationValue, setMedicationValue] = useState<string>("");
  const [medicationType, setMedicationType] = useState<string>("none");

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
    <div className="w-full space-y-2 flex flex-col items-center">
      <div className="relative w-full">
        <p className="absolute top-1/2 -translate-y-1/2 right-2 text-sm">
          pills
        </p>
        <input
          type="number"
          className="border rounded w-full p-2"
          value={medicationValue || ""}
          onChange={(e) => setMedicationValue(e.target.value)}
          disabled={fieldsDisabled}
        ></input>
      </div>
      <select
        className="border rounded w-full p-2 text-sm"
        value={medicationType}
        onChange={(e) => setMedicationType(e.target.value)}
      >
        <option value="none" disabled>
          Select Medication Type
        </option>
        <option value="m-01">🔵 Medication 01</option>
        <option value="m-02">🟣 Medication 02</option>
      </select>
      <input
        type="datetime-local"
        className="border rounded w-full p-2 text-sm"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      {success ? (
        <p className="text-green-500 text-center text-sm">{success}</p>
      ) : null}
      {error ? (
        <p className="text-red-500 text-center text-sm">{error}</p>
      ) : null}
      <button
        className="bg-black text-white p-2 rounded text-sm cursor-pointer disabled:bg-zinc-200"
        onClick={handleSubmit}
        disabled={!medicationValue.trim()}
      >
        Submit
      </button>
    </div>
  );
};

export default FormOralMedication;

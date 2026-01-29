import { useState } from "react";

const FormOralMedication = () => {
  const [medicationValue, setMedicationValue] = useState<string>("");
  const [medicationType, setMedicationType] = useState<string>("");
  const [medicationTime, setMedicationTime] = useState<string>(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  });
  const [fieldsDisabled, setFieldsDisabled] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const errorSequence = (errorMsg: string) => {
    setError(errorMsg);
    setMedicationValue("");
    setMedicationType("");
    setMedicationTime("");
    setFieldsDisabled(true);
    setTimeout(() => {
      setError("");
      setFieldsDisabled(false);
    }, 1000);
  };

  const successSequence = () => {
    setMedicationValue("");
    setMedicationType("");
    setMedicationTime("");
    setSuccess("Saved!");
    setFieldsDisabled(true);
    setTimeout(() => {
      setSuccess("");
      setFieldsDisabled(false);
    }, 1000);
    console.log({
      medicationValue: medicationValue,
      medicationType: medicationType,
      medicationTime: medicationTime,
    });
  };

  const handleSubmit = () => {
    if (Number(medicationValue) <= 0) {
      errorSequence("Glucose reading can't be zero or in negative!");
      return;
    }
    successSequence();
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
      <select className="border rounded w-full p-2 text-sm" defaultValue="none">
        <option value="none" disabled>
          Select Medication Type
        </option>
        <option value="m-01">🔵 Medication 01</option>
        <option value="m-02">🟣 Medication 02</option>
      </select>
      <input
        type="datetime-local"
        className="border rounded w-full p-2 text-sm"
        value={medicationTime}
        onChange={(e) => setMedicationTime(e.target.value)}
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

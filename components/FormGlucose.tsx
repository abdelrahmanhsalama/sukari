import React, { useState } from "react";

const FormGlucose = () => {
  const [glucoseValue, setGlucoseValue] = useState<string>("");
  const [glucoseFlag, setGlucoseFlag] = useState<string>("");
  const [glucoseTime, setGlucoseTime] = useState<string>(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  });
  const [fieldsDisabled, setFieldsDisabled] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const errorSequence = (errorMsg: string) => {
    setError(errorMsg);
    setGlucoseValue("");
    setGlucoseFlag("");
    setFieldsDisabled(true);
    setTimeout(() => {
      setError("");
      setFieldsDisabled(false);
    }, 1000);
  };

  const successSequence = () => {
    setGlucoseValue("");
    setGlucoseFlag("");
    setSuccess("Saved!");
    setFieldsDisabled(true);
    setTimeout(() => {
      setSuccess("");
      setFieldsDisabled(false);
    }, 1000);
    console.log({ glucoseValue: glucoseValue, glucoseFlag: glucoseFlag });
  };

  const handleSubmit = () => {
    if (Number(glucoseValue) <= 0) {
      errorSequence("Glucose reading can't be zero or in negative!");
      return;
    }
    successSequence();
  };

  return (
    <div className="w-full space-y-2 flex flex-col items-center">
      <h2>Add Glucose Reading</h2>
      <div className="relative w-full">
        <p className="absolute top-1/2 -translate-y-1/2 right-2 text-sm">
          mg/dL
        </p>
        <input
          type="number"
          className="border rounded w-full p-2"
          value={glucoseValue || ""}
          onChange={(e) => setGlucoseValue(e.target.value)}
          disabled={fieldsDisabled}
        ></input>
      </div>
      <select className="border rounded w-full p-2 text-sm" defaultValue="none">
        <option value="none" disabled>
          Select Flag
        </option>
        <option value="g-01">Fasting</option>
        <option value="g-02">After Breakfast</option>
        <option value="g-03">Before Lunch</option>
        <option value="g-04">After Lunch</option>
        <option value="g-05">Before Dinner</option>
        <option value="g-06">After Dinner</option>
        <option value="g-07">Before Workout</option>
        <option value="g-08">After Workout</option>
      </select>
      <input
        type="datetime-local"
        className="border rounded w-full p-2 text-sm"
        value={glucoseTime}
        onChange={(e) => setGlucoseTime(e.target.value)}
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
        disabled={!glucoseValue.trim()}
      >
        Submit
      </button>
    </div>
  );
};

export default FormGlucose;

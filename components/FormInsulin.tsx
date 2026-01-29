import { useState } from "react";

const FormInsulin = () => {
  const calculateCurrentTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  const [insulinValue, setInsulinValue] = useState<string>("");
  const [insulinType, setInsulinType] = useState<string>("none");
  const [insulinTime, setInsulinTime] = useState<string>(calculateCurrentTime);
  const [fieldsDisabled, setFieldsDisabled] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const errorSequence = (errorMsg: string) => {
    setError(errorMsg);
    setInsulinValue("");
    setInsulinType("none");
    setInsulinTime(calculateCurrentTime);
    setFieldsDisabled(true);
    setTimeout(() => {
      setError("");
      setFieldsDisabled(false);
    }, 1000);
  };

  const successSequence = () => {
    setInsulinValue("");
    setInsulinType("none");
    setInsulinTime(calculateCurrentTime);
    setSuccess("Saved!");
    setFieldsDisabled(true);
    setTimeout(() => {
      setSuccess("");
      setFieldsDisabled(false);
    }, 1000);
    console.log({
      insulinValue: insulinValue,
      insulinType: insulinType,
      insulinTime: insulinTime,
    });
  };

  const handleSubmit = () => {
    if (Number(insulinValue) <= 0) {
      errorSequence("Glucose reading can't be zero or in negative!");
      return;
    }
    successSequence();
  };

  return (
    <div className="w-full space-y-2 flex flex-col items-center">
      <div className="relative w-full">
        <p className="absolute top-1/2 -translate-y-1/2 right-2 text-sm">
          units
        </p>
        <input
          type="number"
          className="border rounded w-full p-2"
          value={insulinValue || ""}
          onChange={(e) => setInsulinValue(e.target.value)}
          disabled={fieldsDisabled}
        ></input>
      </div>
      <select
        className="border rounded w-full p-2 text-sm"
        value={insulinType}
        onChange={(e) => setInsulinType(e.target.value)}
      >
        <option value="none" disabled>
          Select Insulin Type
        </option>
        <option value="i-01">🔵 Apidra</option>
        <option value="i-02">🟣 Lantus</option>
      </select>
      <input
        type="datetime-local"
        className="border rounded w-full p-2 text-sm"
        value={insulinTime}
        onChange={(e) => setInsulinTime(e.target.value)}
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
        disabled={!insulinValue.trim()}
      >
        Submit
      </button>
    </div>
  );
};

export default FormInsulin;

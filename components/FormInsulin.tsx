import { useFormManager } from "@/hooks/useFormManager";
import { useState } from "react";

const FormInsulin = () => {
  const {
    time,
    setTime,
    fieldsDisabled,
    success,
    error,
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
        disabled={!insulinValue.trim()}
      >
        Submit
      </button>
    </div>
  );
};

export default FormInsulin;

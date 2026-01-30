type EntryInputTypes = {
  value: string;
  setValue: (arg0: string) => void;
  type: string;
  fieldsState: boolean;
};

const EntryInput = ({
  value,
  setValue,
  type,
  fieldsState,
}: EntryInputTypes) => {
  return (
    <div className="relative w-full">
      <p className="absolute top-1/2 -translate-y-1/2 right-2 text-sm">
        {type === "glucose" ? "mg/dL" : type === "insulin" ? "units" : "pills"}
      </p>
      <input
        type="number"
        className="border rounded w-full p-2"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        disabled={fieldsState}
      ></input>
    </div>
  );
};

export default EntryInput;

type OptionType = {
  id: string;
  label: string;
};

type EntrySelectTypes = {
  value: string;
  setValue: (arg0: string) => void;
  type: string;
  options: OptionType[];
};

const EntrySelect = ({ value, setValue, type, options }: EntrySelectTypes) => {
  return (
    <select
      className="border rounded w-full p-2 text-sm"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="none" disabled>
        {type === "glucose"
          ? "Select Flag"
          : type === "insulin"
            ? "Select Insulin Type"
            : "Select Medication Type"}
      </option>
      {options.map((option) => (
        <option value={option.id} key={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default EntrySelect;

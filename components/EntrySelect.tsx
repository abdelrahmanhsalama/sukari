import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
  console.log(options.length);
  return (
    <FormControl fullWidth>
      <InputLabel>
        {type === "glucose"
          ? "Select Flag"
          : type === "insulin"
            ? "Select Insulin Type"
            : "Select Medication Type"}
      </InputLabel>
      <Select
        value={value}
        label={
          type === "glucose"
            ? "Select Flag"
            : type === "insulin"
              ? "Select Insulin Type"
              : "Select Medication Type"
        }
        onChange={(e) => setValue(e.target.value)}
        sx={{ marginBottom: "8px" }}
      >
        {options.map((option) => (
          <MenuItem value={option.id} key={option.id}>
            {option.label}
          </MenuItem>
        ))}
        <MenuItem
          sx={{ color: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => console.log("Hello!")}
        >
          Add Option
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default EntrySelect;

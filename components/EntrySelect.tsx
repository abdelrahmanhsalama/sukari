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
        size="small"
        value={value}
        label={
          type === "glucose"
            ? "Select Flag"
            : type === "insulin"
              ? "Select Insulin Type"
              : "Select Medication Type"
        }
        onChange={(e) => setValue(e.target.value)}
        sx={{ marginBottom: "10px" }}
      >
        {options.map((option) => (
          <MenuItem value={option.id} key={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EntrySelect;

import { TextField } from "@mui/material";

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
    <TextField
      fullWidth
      label={
        type === "glucose"
          ? "Glucose Reading in mg/dL"
          : type === "insulin"
            ? "Insulin Units"
            : "Pills"
      }
      variant="outlined"
      sx={{ marginBottom: "10px" }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EntryInput;

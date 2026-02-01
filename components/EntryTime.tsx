import { TextField } from "@mui/material";

type EntryTimeTypes = {
  value: string;
  setValue: (arg0: string) => void;
};

const EntryTime = ({ value, setValue }: EntryTimeTypes) => {
  return (
    <TextField
      fullWidth
      type="datetime-local"
      value={value}
      variant="outlined"
      sx={{ marginBottom: "16px" }}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EntryTime;

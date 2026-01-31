import { Button } from "@mui/material";

type EntryButtonTypes = {
  value: string;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const EntryButton = ({ onSubmit, value }: EntryButtonTypes) => {
  return (
    <Button variant="contained" disabled={!value.trim()} onClick={onSubmit}>
      Submit
    </Button>
  );
};

export default EntryButton;

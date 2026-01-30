type EntryTimeTypes = {
  value: string;
  setValue: (arg0: string) => void;
};

const EntryTime = ({ value, setValue }: EntryTimeTypes) => {
  return (
    <input
      type="datetime-local"
      className="border rounded w-full p-2 text-sm"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EntryTime;

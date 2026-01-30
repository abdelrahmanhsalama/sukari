type EntryButtonTypes = {
  value: string;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const EntryButton = ({ onSubmit, value }: EntryButtonTypes) => {
  return (
    <button
      className="bg-black text-white p-2 rounded text-sm cursor-pointer disabled:bg-gray-200"
      onClick={onSubmit}
      disabled={!value.trim()}
    >
      Submit
    </button>
  );
};

export default EntryButton;

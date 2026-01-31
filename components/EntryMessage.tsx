type EntryMessageTypes = {
  message: string;
  type: string;
};

const EntryMessage = ({ message, type }: EntryMessageTypes) => {
  return (
    <p
      className={`${type === "success" ? "text-green-500" : "text-red-500"} text-center max-h-100 duration-200 mb-2`}
    >
      {message}
    </p>
  );
};

export default EntryMessage;

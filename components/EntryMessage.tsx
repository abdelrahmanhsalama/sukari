import React from "react";

type EntryMessageTypes = {
  message: string;
  type: string;
};

const EntryMessage = ({ message, type }: EntryMessageTypes) => {
  return (
    <p
      className={`${type === "success" ? "text-green-500" : "text-red-500"} text-center text-sm`}
    >
      {message}
    </p>
  );
};

export default EntryMessage;

import React from "react";

const EntryCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full space-y-4 flex flex-col items-center">
      <h2 className="text-center">{title}</h2>
      {children}
    </div>
  );
};

export default EntryCard;

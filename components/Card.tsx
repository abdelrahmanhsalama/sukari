import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 w-full bg-white rounded-lg p-4 flex flex-col items-center shadow-lg">
      {children}
    </div>
  );
};

export default Card;

import { SquareActivity } from "lucide-react";
import React from "react";

const ParentCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-[480px] space-y-2 relative">
      {children}
    </div>
  );
};

export default ParentCard;

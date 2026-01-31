import React from "react";
import FormMain from "./FormMain";
import { SquareActivity } from "lucide-react";

const HomeComponent = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-[560px] space-y-2">
      <h1 className="text-xl p-2 bg-white rounded-lg shadow flex gap-1 items-center">
        <SquareActivity /> Sukari
      </h1>
      <FormMain />
    </div>
  );
};

export default HomeComponent;

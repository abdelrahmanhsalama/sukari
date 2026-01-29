import React from "react";
import FormMain from "./FormMain";

const HomeComponent = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-[480px]">
      <h1 className="text-xl p-2">👨🏻‍⚕️ Sukari</h1>
      <FormMain />
    </div>
  );
};

export default HomeComponent;

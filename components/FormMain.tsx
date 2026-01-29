"use client";

import { useState } from "react";
import FormGlucose from "./FormGlucose";
import FormMedication from "./FormMedication";

const FormMain = () => {
  const [activeTab, setActiveTab] = useState("glucose");

  return (
    <div className="flex-1 w-full bg-white rounded-lg p-4 flex flex-col items-center shadow">
      <div className="bg-zinc-200 flex p-1 gap-1 w-min rounded">
        <div
          className={`p-1 rounded ${activeTab === "glucose" ? "bg-white shadow" : ""} cursor-pointer text-sm`}
          onClick={() => setActiveTab("glucose")}
        >
          Glucose
        </div>
        <div
          className={`p-1 rounded ${activeTab === "medication" ? "bg-white shadow" : ""} cursor-pointer text-sm`}
          onClick={() => setActiveTab("medication")}
        >
          Medication
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center w-full">
        {activeTab === "glucose" ? <FormGlucose /> : <FormMedication />}
      </div>
    </div>
  );
};

export default FormMain;

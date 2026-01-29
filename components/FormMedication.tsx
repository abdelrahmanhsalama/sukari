import React, { useEffect, useState } from "react";
import FormInsulin from "./FormInsulin";
import FormOralMedication from "./FormOralMedication";

const FormMedication = () => {
  const [activeTab, setActiveTab] = useState("insulin");

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div className="w-full space-y-2">
      <h2 className="text-center">Add Insulin/Medication Dose</h2>
      <div>
        <label className="flex items-center gap-1 text-sm">
          <input
            type="radio"
            name="selected-form"
            checked={activeTab === "insulin"}
            onChange={() => setActiveTab("insulin")}
          ></input>
          <span>Insulin</span>
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input
            type="radio"
            name="selected-form"
            checked={activeTab === "oral-medication"}
            onChange={() => setActiveTab("oral-medication")}
          ></input>
          <span>Oral Medication</span>
        </label>
      </div>
      <div className="flex-1 flex justify-center items-center w-full">
        {activeTab === "insulin" ? <FormInsulin /> : <FormOralMedication />}
      </div>
    </div>
  );
};

export default FormMedication;

import { useState } from "react";
import FormInsulin from "./FormInsulin";
import FormOralMedication from "./FormOralMedication";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const FormMedication = () => {
  const [activeTab, setActiveTab] = useState("insulin");

  return (
    <div className="w-full space-y-2 flex flex-col items-center">
      <div>
        <h2 className="text-center mb-2">Add Insulin/Medication Dose</h2>
        <RadioGroup value={activeTab} name="active-tab">
          <FormControlLabel
            control={
              <Radio
                sx={{
                  padding: 0,
                  paddingRight: "4px",
                  marginBottom: "4px",
                }}
              />
            }
            label="Insulin"
            sx={{
              margin: 0,
            }}
            checked={activeTab === "insulin"}
            onChange={() => setActiveTab("insulin")}
          />
          <FormControlLabel
            control={<Radio sx={{ padding: 0, paddingRight: "4px" }} />}
            label="Oral Medication"
            sx={{
              margin: 0,
            }}
            checked={activeTab === "oral-medication"}
            onChange={() => setActiveTab("oral-medication")}
          />
        </RadioGroup>
      </div>
      <div className="flex-1 flex justify-center items-center w-full mt-2">
        {activeTab === "insulin" ? <FormInsulin /> : <FormOralMedication />}
      </div>
    </div>
  );
};

export default FormMedication;

import { useState } from "react";
import FormInsulin from "./FormInsulin";
import FormOralMedication from "./FormOralMedication";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import EntryCard from "./EntryCard";

const FormMedication = () => {
  const [activeTab, setActiveTab] = useState("insulin");

  return (
    <EntryCard title="Add Insulin/Medication Dose">
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
      {activeTab === "insulin" ? <FormInsulin /> : <FormOralMedication />}
    </EntryCard>
  );
};

export default FormMedication;

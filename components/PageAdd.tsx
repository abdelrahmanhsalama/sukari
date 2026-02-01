import FormMain from "./FormMain";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import { Fab } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import Link from "next/link";
import ParentCard from "./ParentCard";
import { Settings } from "@mui/icons-material";

const PageAdd = () => {
  return (
    <ParentCard>
      <FormMain />
    </ParentCard>
  );
};

export default PageAdd;

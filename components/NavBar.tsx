import { AddCircleOutlined, History, Settings } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [bNValue, setBNValue] = useState(0);

  useLayoutEffect(() => {
    if (pathname == "/log") {
      setBNValue(1);
    }
    if (pathname == "/settings") {
      setBNValue(2);
    }
  }, []);

  return (
    <div className="w-full">
      <BottomNavigation
        showLabels
        value={bNValue}
        onChange={(event, newValue) => {
          setBNValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Add Entry"
          icon={<AddCircleOutlined />}
          onClick={() => router.push("/")}
        />
        <BottomNavigationAction
          label="View Log"
          icon={<History />}
          onClick={() => router.push("/log")}
        />
        <BottomNavigationAction
          label="Settings"
          icon={<Settings />}
          onClick={() => router.push("/settings")}
        />
      </BottomNavigation>
    </div>
  );
};

export default NavBar;

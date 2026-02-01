"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { SquareActivity } from "lucide-react";
import { AddCircleOutlined, History, Settings } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [bNValue, setBNValue] = useState(0);
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://fav.farm/%E2%9D%A4%EF%B8%8F" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <div className="bg-foreground h-dvh flex justify-center items-center font-sans">
          <div className="h-full w-full sm:w-[360px] sm:h-[640px] sm:rounded-2xl flex flex-col justify-center items-center bg-blue-200 relative">
            <div className="flex-1 w-full p-4 flex flex-col justify-center items-center space-y-4">
              <h1 className="text-2xl p-2 bg-white rounded-lg shadow flex gap-1 items-center w-min">
                <SquareActivity size={32} /> Sukari
              </h1>
              {children}
            </div>
            <div className="w-full">
              <BottomNavigation
                showLabels
                value={bNValue}
                onChange={(event, newValue) => {
                  setBNValue(newValue);
                }}
              >
                <BottomNavigationAction
                  label="Add"
                  icon={<AddCircleOutlined />}
                  onClick={() => router.push("/")}
                />
                <BottomNavigationAction
                  label="Log"
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
          </div>
        </div>
      </body>
    </html>
  );
}

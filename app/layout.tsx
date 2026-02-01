"use client";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SquareActivity } from "lucide-react";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [bNValue, setBNValue] = useState(0);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://fav.farm/%E2%9D%A4%EF%B8%8F" />
      </head>
      <body
        className={`${roboto.variable} antialiased *:text-foreground *:border-foreground`}
      >
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
                  label="Recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Nearby"
                  icon={<LocationOnIcon />}
                />
              </BottomNavigation>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

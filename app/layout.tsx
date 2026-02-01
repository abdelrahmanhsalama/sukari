"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { SquareActivity } from "lucide-react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <NavBar />
          </div>
        </div>
      </body>
    </html>
  );
}

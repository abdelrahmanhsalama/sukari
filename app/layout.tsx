import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukari",
  description: "FHIR-compliant Diabetes Assistant",
};

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased *:text-foreground`}
      >
        <div className="bg-zinc-900 h-dvh flex justify-center items-center font-sans">
          <div className="h-full w-full sm:w-[360px] sm:h-[640px] sm:rounded-lg p-4 flex justify-center items-center bg-zinc-100">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

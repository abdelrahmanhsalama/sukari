import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

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
        className={`${roboto.variable} antialiased *:text-foreground *:border-foreground`}
      >
        <div className="bg-foreground h-dvh flex justify-center items-center font-sans">
          <div className="h-full w-full sm:w-[360px] sm:h-[640px] sm:rounded-2xl p-4 flex justify-center items-center bg-blue-200">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

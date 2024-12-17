import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "./Providers";

export const metadata: Metadata = {
  title: "Master English",
  description: "Learn English",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
       
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className="antialiased">
        <NextAuthProvider>
          <div className="relative w-full flex items-center justify-center">
            <Navbar />
          </div>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "DataWave Bodensee",
  description: "Frontend of Scraper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-zinc-600">
      <body className="">
        <div className="bg-red-800 text-gray-100 p-10">
        <h1 className="text-5xl">Missing Migrants</h1>
        <Navbar />
        </div>
        <main className="p-10">

        {children}
        </main>
        
        </body>
    </html>
  );
}

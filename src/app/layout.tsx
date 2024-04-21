import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Missing Migrants AI Crawler",
  description: "Data4Good 2024 - DataWave Bodensee",
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
          <h1 className="text-5xl">Missing Migrants <span className="text-xl">AI Crawler</span></h1>
          <Navbar />
        </div>
        <main className="p-10">

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

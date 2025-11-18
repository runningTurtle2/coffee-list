import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee List app",
  description: "Crowd sourced coffee data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full border-b border-gray-300 bg-white">
          <Header />
        </header>

        <main className="w-full">
          <div className="max-w-[1400px] mx-auto px-6">
            {children}
          </div>
        </main>
        
        <footer className="w-full border-t border-gray-300 bg-white mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
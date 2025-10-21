"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const noNavbarPaths = ["/login", "/register"];
  const pathname = usePathname();
  const showNavbar = !noNavbarPaths.includes(pathname);
  const router = useRouter();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col relative`}
      >
        <div
          className="fixed pointer-events-none left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] 
          rounded-full bg-black/40 blur-3xl"
        />

        <div className="flex flex-col justify-between bg-gradient-to-bl from-[#040b2b] to-[#000000] min-h-screen">
          <div>
            {showNavbar && <Navbar />}
            <div className="mt-8 relative z-10 mx-auto flex flex-col h-full max-w-7xl px-4 pt-16 pb-8">
              {children}
            </div>
          </div>
           {showNavbar && <Footer />}
        </div>
      </body>
    </html>
  );
}

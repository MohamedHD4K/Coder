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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <div className="relative bg-gradient-to-bl from-[#040b2b] to-[#000000] min-h-screen w-full overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] 
          rounded-full bg-black/40 blur-3xl"
          ></div>

          <button
            className="fixed z-20 text-2xl font-black p-4 px-8 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Coder
          </button>
          {showNavbar && <Navbar />}
          <div className="relative z-10 h-screen mx-auto flex flex-col">
            {children}
          </div>
          {showNavbar && <Footer />}
        </div>
      </body>
    </html>
  );
}

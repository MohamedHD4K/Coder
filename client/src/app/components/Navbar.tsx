import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  const pages = ["console", "about", "contact", "blog", "aI", "welcome"];
  const router = useRouter();

  return (
    <div
      className="fixed z-20 backdrop-blur-lg bg-[#060010]/70 w-full text-white p-4 shadow-xl shadow-black/20
                before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] 
                before:bg-gradient-to-r before:from-transparent before:via-[#2e2341] before:to-transparent"
    >
      <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
        <div
          onClick={() => router.push("/")}
          className="text-2xl font-black text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Coder
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <ul className="flex flex-row w-md border border-[#2e2341] rounded-full backdrop-blur-2xl p-3 justify-around items-center">
            {pages.map((page) => (
              <li
                onClick={() => router.push(page)}
                className="text-sm text-gray-300 first-letter:uppercase hover:text-white cursor-pointer duration-200"
                key={page}
              >
                {page}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-2 items-start justify-end">
          <div className="flex gap-2">
            <Button
              text="Login"
              onClick={() => router.push("/login")}
              className="bg-[#7137E5] hover:bg-purple-800 border-0"
            />
            <Button
              text="Register"
              onClick={() => router.push("/login")}
              className="bg-[#7137E5] hover:bg-purple-800 border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

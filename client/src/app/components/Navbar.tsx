import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  const pages = ["Console", "About", "Contact", "Blog", "AI"];
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 justify-between items-center text-white p-4">
      <div className="w-full h-full"></div>
      <div className="w-full h-full flex justify-center items-center">
        <ul className="flex flex-row w-md bg-gray-900 rounded-full backdrop-blur-2xl p-3 justify-around items-center">
          {pages.map((page) => (
            <li
              onClick={() => router.push(page)}
              className="text-sm text-gray-300 hover:text-white cursor-pointer duration-200"
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
            className="bg-blue-500 hover:bg-blue-600 border-0"
          />
          <Button
            text="Register"
            onClick={() => router.push("/login")}
            className="bg-blue-500 hover:bg-blue-600 border-0"
          />
        </div>
      </div>
    </div>
  );
}

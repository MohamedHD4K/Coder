"use client";

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Input({
  className = "",
  type = "text",
  name,
  id,
  isPassword = false,
  placeHolder = "",
  label,
  icon = null,
  onChange = () => {},
}: {
  type?: string;
  name?: string;
  id?: string;
  isPassword?: boolean;
  placeHolder: string;
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={`flex flex-col gap-1  ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      )}
      <div className="flex flex-row justify-between border focus-within:outline-1 outline-blue-300 bg-[#1F222A] border-[#1D2028] rounded-lg p-3 gap-3 hover:shadow-lg transition-shadow duration-300 ">
        <div className="flex flex-row items-center gap-2 ">
          {icon && <span>{icon}</span>}
          <input
          onChange={onChange}
            className="text-xs items-center flex outline-none "
            placeholder={placeHolder}
            type={!showPassword ? type : "text"}
            name={name}
            id={id}
          />
        </div>
        {isPassword && (
          <div className="cursor-pointer" onClick={handleShowPassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";

export default function Button({
  text = "Click Me",
  icon = null,
  className = "",
  onClick = () => {},
}: {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`border border-gray-600 text-white flex flex-row items-center justify-center cursor-pointer hover:bg-black/20
         gap-3 shadow-md hover:shadow-white/5 w-full px-4 py-2 rounded-lg text-sm duration-300 ${className}`}
    >
      {icon}
      {text}
    </button>
  );
}

"use client";

import React from "react";
import RotatingText from "../components/common/RotatingText";

export default function page() {
  return (
    <div className="w-full h-screen flex flex-row gap-4 justify-center items-center text-5xl sm:text-6xl md:text-7xl font-extrabold text-white">
      Welcome to
      <RotatingText
        texts={["Fast", "Secure", "Reliable", "Scalable", "Innovative", "Efficient"]}
        mainClassName="px-3 sm:px-4 md:px-5 bg-cyan-300 text-black overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg "
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-3"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
}

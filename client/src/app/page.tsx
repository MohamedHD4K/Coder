"use client";

import ShinyText from "./components/common/ShinyTextProps";

export default function Home() {
  return <div className="max-w-7xl mx-auto p-4">
    <ShinyText
        text="Just some shiny text!"
        disabled={false}
        speed={3}
        className="custom-class"
      />
  </div>;
}

import { useRef, useEffect } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import {
  DiJavascript,
  DiPhp,
  DiPython,
  DiRuby,
  DiRust,
  DiSwift,
} from "react-icons/di";

const InfiniteTextLoop = ({left = false}) => {
  const scroll = useRef<HTMLDivElement>(null);
  const speed = 100; // pixels per second

  useEffect(() => {
    const el = scroll.current;
    if (el && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scrollWidth = el.scrollWidth / 2; // المحتوى مكرر مرتين فقط
      const duration = (scrollWidth / speed) * 1000;

      el.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-135%)` },
        ],
        {
          duration,
          iterations: Infinity,
          easing: "linear",
        }
      );
    }
  }, []);

  const languages = [
    <DiJavascript size={30} className="text-yellow-500" />,
    <DiPython size={30} className="text-blue-500" />,
    <DiRust size={30} className="text-red-500" />,
    <BiLogoTypescript size={30} className="text-blue-500" />,
    <DiSwift size={30} className="text-orange-500" />,
    <DiPhp size={30} className="text-blue-500" />,
    <DiRuby size={30} className="text-red-500" />,
  ];

  return (
    <div className="relative overflow-hidden w-full h-16 ">
      <div
        ref={scroll}
        className="flex whitespace-nowrap gap-8 text-white text-lg"
      >
        {[...languages, ...languages].map((language, index) => (
          <span
            key={index}
            className="bg-gradient-to-tl from-gray-900 to-gray-800 p-2 min-w-12 shadow-sm hover:shadow-white/10 duration-300 flex rounded-xl items-center justify-center"
          >
            {language}
          </span>
        ))}
      </div>

      {/* التدرج الجانبي */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default InfiniteTextLoop;

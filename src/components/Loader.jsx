import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#efecf1] overflow-hidden text-black">
      <div className="absolute top-6 left-8">
        <h1 className="text-lg md:text-xl font-semibold text-purple-500 animate-fadeIn">
          dev | tayyab
        </h1>
      </div>

      <div className="absolute top-6 right-8 flex items-end gap-[6px]">
        <div className="w-[3px] h-4 bg-black animate-bar1"></div>
        <div className="w-[3px] h-6 bg-black animate-bar2"></div>
        <div className="w-[3px] h-3 bg-black animate-bar3"></div>
        <div className="w-[3px] h-5 bg-black animate-bar4"></div>
        <div className="w-[3px] h-4 bg-purple-500 animate-bar5 rounded-full"></div>
      </div>

      <div className="absolute whitespace-nowrap text-[7vw] font-bold opacity-10 animate-scrollText ">
        CREATIVE DEVELOPER · CREATIVE DESIGNER · CREATIVE DEVELOPER · CREATIVE
        DESIGNER ·
      </div>

      <div className="relative w-64 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg overflow-hidden z-10">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>

        <div className="relative z-10 flex items-center justify-between w-full px-6 text-sm font-medium">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

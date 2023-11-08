"use client"
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ started, setStarted }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 4;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 10);
    } else {
      clearInterval(interval);
      setTimeout(() => {
        setStarted(true);
      }, 1500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [progress, setStarted]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-indigo-50 
  ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
        <div
          className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
          ARYAN SINGH
        </div>
        <div className="opacity-40">ARYAN SINGH</div>
      </div>
    </div>
  );
};

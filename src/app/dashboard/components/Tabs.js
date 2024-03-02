"use client"

import React, { useState ,useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Dashboard from "./Dashboard";
import Journal from "./Journal";
import Pomodoro from "./Pomodoro";
import TedEd from "./TedEd";


export default function TabsComp() {
  const { size } = useThree(); 
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabsPosition = {
    top: -size.height / 2,
    left: -size.width / 2,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Html style={{ position: "absolute", ...tabsPosition, color: "white" }}>
      <div className="h-screen w-screen font-mono">
        <div className="absolute grid grid-cols-3 w-screen">
        
          <h1 className="text-3xl col-start-1 flex items-center justify-start text-text-blue-200 ml-3 glow-text font-extrabold">
          <img className="w-12 h-10 mr-2 bg-white rounded-lg" src="/logo.png" alt="logo" />
            TRACKWELL
          </h1>
          <h1 className="text-3xl col-start-2 flex items-center justify-center mt-1 glow-text font-semibold ">
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </h1>
          <h1 className="text-3xl col-start-3 flex items-center justify-end text-blue-200 glow-text font-semibold">
            Welcome Aryan
          </h1>
        </div>

        <div className="text-white absolute">
          <div className="pt-11">
            <div className="grid grid-cols-4 w-screen border-blue-400 border-y-2 py-0.5 border-opacity-80">
              <div
                className={`col-start-1 flex items-center justify-center ${
                  activeTab === "dashboard" ? "flash-green" : ""
                }`}
                onClick={() => handleTabClick("dashboard")}
              >
                <button className="w-full text-lg glow-text text-green-200 font-extrabold">
                  DASHBOARD
                </button>
              </div>
              <div
                className={`col-start-2 flex items-center justify-center ${
                  activeTab === "journal" ? "flash-green" : ""
                }`}
                onClick={() => handleTabClick("journal")}
              >
                <button className="w-full text-lg glow-text text-green-200 font-extrabold">
                  JOURNAL
                </button>
              </div>
              <div
                className={`col-start-3 flex items-center justify-center ${
                  activeTab === "pomodoro" ? "flash-green" : ""
                }`}
                onClick={() => handleTabClick("pomodoro")}
              >
                <button className="w-full text-lg glow-text text-green-200 font-extrabold">
                  POMODORO
                </button>
              </div>
              <div
                className={`col-start-4 flex items-center justify-center ${
                  activeTab === "teded" ? "flash-green" : ""
                }`}
                onClick={() => handleTabClick("teded")}
              >
                <button className="w-full text-lg glow-text text-green-200 font-extrabold">
                  TED-ED
                </button>
              </div>
              
            </div>
          </div>
        </div>
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "journal" && <Journal />}
        {activeTab === "pomodoro" && <Pomodoro />}
        {activeTab === "teded" && <TedEd />}
      </div>
    </Html>
  );
}

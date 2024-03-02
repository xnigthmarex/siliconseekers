"use client";
import React, { startTransition } from "react";
import Todo from "./Todo";
export default function Home() {
  const start = () => {
    console.log("tesdsdfaaajournalhjksdht");
  };

  return (
    <div className="absolute w-screen   grid grid-cols-3 mt-20 ">
        <div className = "col-start-1">
          <Todo></Todo>
        </div>

        <div className = "col-span-2">
          
        </div>
    </div>
  );
}

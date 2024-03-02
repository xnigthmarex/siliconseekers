"use client";
import React, { startTransition } from "react";

export default function Home() {
  const start = () => {
    console.log("tesdsdfaaajournalhjksdht");
  };

  return (
    <div className="absolute">
      <button className="pt-20" onClick={() => start()}>
        journal
      </button>
    </div>
  );
}

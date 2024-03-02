"use client"
import React, { useRef } from "react";

export default function Todo() {
    const inputRef = useRef(null);
    
    const Addtest = () => {
        
    }
    
    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl glow-text mt-2 font-bold">Todo</h1>
            <div className="mt-4 flex items-center">
                <input 
                    type="text" 
                    className="border-4 glow border-red-900 p-1.5 rounded-lg w-full bg-inherit text-white flash-red" 
                    placeholder="ADD TASK" 
                    ref={inputRef}  
                />
                <button 
                    className="ml-2 border-4 border-purple-500 bg-inherit glow-text p-2 px-4 rounded-lg flash-green" 
                    onClick={Addtest}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

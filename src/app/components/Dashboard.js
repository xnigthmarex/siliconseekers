"use client"
import React, { startTransition } from 'react';
import {Html} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

export default function Home() {

    const start = () => {
       console.log("test");
    }

    return (
        <div className = "absolute">
        <button className = "pt-20"onClick = {() => start()}>tessdafhkjashdsfgjdsgdkljhkjt</button>
        </div>
 
    );
    }
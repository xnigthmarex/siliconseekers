"use client"
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import Space from "./models/space";
import Tabs from "@/app/components/Tabs"; 
import { LoadingScreen } from "./Loading";
import * as THREE from "three";

export default function App({children}) {
  const [started, setStarted] = useState(false);
  const size = 10;
  const divisions = 10;
  const gridX = new THREE.GridHelper(size, divisions, 0xff0000, 0x660000);
  const gridY = new THREE.GridHelper(size, divisions, 0x00ff00, 0x006600);
  const gridZ = new THREE.GridHelper(size, divisions, 0x0000ff, 0x000066);

  gridX.rotation.x = Math.PI / 2;
  gridZ.rotation.z = Math.PI / 2;

 

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas camera={{ fov: 50, position: [-2, 0, 4] }}>
        <Bloom luminanceThreshold={2} luminanceSmoothing={3} />
        <Tabs />
        
        <Space />
      </Canvas>
    </>
  );
}

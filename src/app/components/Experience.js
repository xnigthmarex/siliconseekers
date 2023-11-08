"use client"
import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls , KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { LoadingScreen } from "./Loading";
import Stars from "./Stars";
import * as THREE from "three";


export default function App() {
  const [started, setStarted] = useState(false);
  const size = 10;
  const divisions = 10;
  const gridX = new THREE.GridHelper(size, divisions, 0xff0000, 0x660000);
  const gridY = new THREE.GridHelper(size, divisions, 0x00ff00, 0x006600);
  const gridZ = new THREE.GridHelper(size, divisions, 0x0000ff, 0x000066);

  gridX.rotation.x = Math.PI / 2;
  gridZ.rotation.z = Math.PI / 2;
  return (
    <div className="h-screen w-screen">
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas camera={{ fov: 60, position: [4, -1, 2.3] }}>
        <ambientLight intensity={1} />
        <Stars />

        <primitive object={gridX} />
        <primitive object={gridY} />
        <primitive object={gridZ} />
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <OrbitControls enableDamping={true} minDistance={2} maxDistance={6} />
        <Perf position="bottom-right" style={{ margin: 10 }} />
      </Canvas>
    </div>
  );
}

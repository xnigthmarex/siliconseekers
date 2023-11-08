"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import Tesla from "./models/Tesla";

const sphereCount = 3200;
const colors = [
  new THREE.Color("rgb(106, 16, 173)"),
  new THREE.Color("#F04A00"),
  new THREE.Color("#B80F0A"),
];

function getRandomSpherePosition() {
  const phi = Math.random() * Math.PI * 2;
  const theta = Math.acos(
    (Math.random() * 2 - 1) * (Math.random() < 0.5 ? 0.5 : 1)
  );
  const r = 7 * Math.pow(Math.random(), 0.3);
  return [
    r * Math.sin(theta) * Math.cos(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(theta),
  ];
}

function Stars(props) {
  const ref = useRef();
  const materialRef = useRef();
  const transitionDuration = 8;

  const spherePositions = useMemo(() => {
    const positions = new Float32Array(sphereCount * 3);
    for (let i = 0; i < positions.length; i += 3) {
      const [x, y, z] = getRandomSpherePosition();
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
    }
    return positions;
  }, []);

  let colorIndex = 0;
  let transitionStartTime = 0;

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    ref.current.rotation.z -= delta / 20;

    materialRef.current.size =
      0.05 + Math.sin(state.clock.getElapsedTime()) * 0.03;

    const elapsedTime = state.clock.getElapsedTime() - transitionStartTime;
    const t = (elapsedTime % transitionDuration) / transitionDuration;

    const currentColor = colors[colorIndex];
    const nextColor = colors[(colorIndex + 1) % colors.length];
    const newColor = new THREE.Color().copy(currentColor).lerp(nextColor, t);

    materialRef.current.color = newColor;

    if (elapsedTime >= transitionDuration) {
      colorIndex = (colorIndex + 1) % colors.length;
      transitionStartTime = state.clock.getElapsedTime();
    }
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={spherePositions}
          stride={3}
          frustumCulled={true}
          {...props}
        >
          <PointMaterial
            ref={materialRef}
            transparent
            color={colors[0]}
            emissive="#0000ff"
            sizeAttenuation={true}
            depthWrite={true}
            depthTest={true}
            opacity={1}
          />
        </Points>
      </group>
      <group>
        <mesh>
          <Tesla scale={0.25} />
        </mesh>
      </group>
    </>
  );
}

export default Stars;

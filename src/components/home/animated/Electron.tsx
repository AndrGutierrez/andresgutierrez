import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Vector3, TextureLoader, Mesh, MeshStandardMaterial, CircleGeometry } from 'three';

type OrbitFunctions = {
  x: (date: number) => number;
  y: (date: number) => number;
  z: (date: number) => number;
  texture: string;
  color?: string;
};

type ElectronProps = {
  orbit: OrbitFunctions;
  position: Vector3;
  opacity: number;
};

const tempVector = new Vector3(1, 1, 1);

export default function Electron({ orbit, position, opacity }: ElectronProps) {
  const ref = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const geometry = useMemo(() => new CircleGeometry(1, 32), []);

  const colorMap = useLoader(TextureLoader, orbit.texture);

  useFrame(() => {
    if (!ref.current) return;

    const date = performance.now() * 0.0005; // More accurate than Date.now()

    ref.current.position.set(
      orbit.x(date),
      orbit.y(date),
      orbit.z(date)
    );

    // Only calculate dot product if needed
    if (hovered || clicked) {
      ref.current.position.dot(tempVector);
    }
  });

  // Memoize material props to prevent unnecessary updates
  const materialProps = useMemo(() => ({
    map: colorMap,
    color: orbit.color,
    opacity,
    transparent: opacity < 1,
  }), [colorMap, orbit.color, opacity]);

  return (
    <mesh
      position={position}
      ref={ref}
      scale={0.25}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      geometry={geometry}
    >
      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
}

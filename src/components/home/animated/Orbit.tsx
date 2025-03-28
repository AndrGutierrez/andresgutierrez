import React from "react";
import { Line } from "@react-three/drei";
import { Vector3 } from "three";

type EllipseProps = {
  radius: number;
  segments?: number;
  color?: string;
  linewidth?: number;
  rotation?: [number, number, number];
};

const Ellipse: React.FC<EllipseProps> = ({
  radius,
  segments = 100,
  color = "#ffffff",
  rotation = [0, 0, 0],
  linewidth = 20,
}) => {
  const points: Vector3[] = [];
  const b = radius * 0.7;
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new Vector3(radius * Math.cos(angle), b * Math.sin(angle), 0));
  }
  return <Line points={points} color={color} linewidth={linewidth} rotation={rotation} />;
};

type SceneProps = {
  rotation: [number, number, number];
  radius: number;
};

const Scene: React.FC<SceneProps> = ({ rotation, radius }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Ellipse radius={radius} rotation={rotation} />
    </>
  );
};

export default Scene;

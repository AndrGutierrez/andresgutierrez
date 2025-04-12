import React, { useMemo } from "react";
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
  const points = useMemo(() => {
    const actualLinewidth = 10
    const b = radius * 0.7;
    const pointsArray: Vector3[] = [];

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pointsArray.push(new Vector3(radius * Math.cos(angle), b * Math.sin(angle), 0));
    }
    return [pointsArray, actualLinewidth] as const;
  }, [radius, segments]);

  return <Line points={points[0]} color={color} linewidth={points[1]} rotation={rotation} />;
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

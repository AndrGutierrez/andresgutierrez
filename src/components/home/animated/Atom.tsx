import { useEffect, useState, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3, MeshStandardMaterial, Mesh } from "three";
import Electron from "./Electron";
import Orbit from "./Orbit";
import AtomCore from "./AtomCore";
import { useRenderStore } from "@/store";

const orbitRadius = 3;
const electronOrbit = 3;

function Rig() {
  const { camera, mouse } = useThree();
  const vec = useMemo(() => new Vector3(), []);
  const target = useMemo(() => new Vector3(), []);

  useFrame(() => {
    vec.set(-mouse.x * 1, -mouse.y * 1, camera.position.z);
    camera.position.lerp(vec, 0.05);
    camera.lookAt(target.set(0, 0, 0));
  });

  return null;
}

const orbits = {
  python: {
    x: (date: number) => Math.cos(date) * electronOrbit * 0.7,
    y: (date: number) => Math.cos(date) * electronOrbit * 0.65,
    z: (date: number) => 0.7 * (Math.sin(date) * electronOrbit * 0.9) + 0.4,
    texture: "/images/atom/python.webp",
  },
  js: {
    x: (date: number) => -(Math.cos(date - 2) * electronOrbit * 0.7),
    y: (date: number) => Math.cos(date - 2) * electronOrbit * 0.65,
    z: (date: number) => 0.7 * (Math.sin(date - 2) * electronOrbit * 0.9 + 0.4),
    texture: "/images/atom/js.webp",
  },
  aws: {
    x: (date: number) => -(Math.cos(date - 4) * electronOrbit),
    y: () => 0,
    z: (date: number) => 0.7 * (Math.sin(date - 4) * electronOrbit * 0.9 + 0.4),
    texture: "/images/atom/aws.webp",
  }
};

function useThrottledResize(callback: () => void, limit: number) {
  useEffect(() => {
    let lastCall = 0;
    let timeoutId: number;

    const handleResize = () => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        callback();
        lastCall = now;
      } else {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          callback();
          lastCall = now;
        }, limit - (now - lastCall));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [callback, limit]);
}

export default function Atom() {
  const [scale, setScale] = useState(1);
  const gltf = useGLTF("/crystal_heart_compressed.glb");
  const mesh = useRef<Mesh>(null);
  const [opacity, setOpacity] = useState(0);
  const scaleRef = useRef(scale);

  useFrame(() => {
    if (opacity < 1 && mesh.current) {
      const newOpacity = Math.min(opacity + 0.01, 1);
      setOpacity(newOpacity);

      mesh.current.traverse((child) => {
        if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
          child.material.transparent = true;
          child.material.opacity = newOpacity;
        }
      });
    }
  });

  const updateScale = useMemo(() => {
    return () => {
      const newScale = (window.innerWidth >= 450 && window.innerWidth <= 1024) ? 1.3 : 1;
      if (scaleRef.current !== newScale) {
        scaleRef.current = newScale;
        setScale(newScale);
      }
    };
  }, []);

  useThrottledResize(updateScale, 200);

  useEffect(() => {
    if (opacity >= 1) {
      self.postMessage({ type: 'SET_RENDERED', value: true });
    }
  }, [opacity]);
  // Initial scale setup
  useEffect(() => {
    updateScale();
  }, [updateScale]);
  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <mesh rotation={[0.15, -0.3, 0]} ref={mesh} scale={[scale, scale, scale]} >
        <Electron position={new Vector3(0, 0, 0)} orbit={orbits.python} opacity={opacity} />
        <Electron position={new Vector3(0, 0, 0)} orbit={orbits.js} opacity={opacity} />
        <Electron position={new Vector3(0, 0, 0)} orbit={orbits.aws} opacity={opacity} />
        <AtomCore gltf={gltf} />
        <Orbit radius={orbitRadius} rotation={[Math.PI / 2, Math.PI / 4, 0]} />
        <Orbit radius={orbitRadius} rotation={[-Math.PI / 2, Math.PI / 4, 0]} />
        <Orbit radius={orbitRadius} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>
      <Rig />
    </>
  );
}
useGLTF.preload('/crystal_heart_compressed.glb')

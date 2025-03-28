import React, { useRef, useState, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'


type propTypes = {
  orbit: { x: Function, y: Function, z: Function, texture: string, color?: string },
  position: Vector3,
  opacity: number
}

export default function Electron({ orbit, position, opacity }: propTypes) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => {

    const date = Date.now() * 0.0005;
    ref.current.position.set(
      orbit["x"](date),
      orbit["y"](date),
      orbit["z"](date)
    );
    ref.current.position.dot(new Vector3(1, 1, 1))
  })
  const colorMap = useLoader(TextureLoader, orbit.texture)


  return (
    // TODO: add fallback component
    <mesh
      position={position}
      ref={ref}
      scale={0.25}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <circleGeometry />
      <meshStandardMaterial map={colorMap} color={orbit["color"]} opacity={opacity} transparent />
    </mesh>
  )
}

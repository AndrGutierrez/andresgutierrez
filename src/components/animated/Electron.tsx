import React, { ReactPropTypes, useRef, useState } from 'react'
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber'
import { useTexture } from "@react-three/drei"
import { TextureLoader, Vector3 } from 'three'


type propTypes = {orbit:{x:Function, y: Function, z: Function, texture: string, color?: string},  position: Vector3}

export default function Electron({orbit, position}: propTypes) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // ref.current.
  // useFrame((state, delta) => (ref.current.rotation.y += delta))
  useFrame((state, delta) => {

    const date = Date.now() * 0.0002;
    ref.current.position.set(
      orbit["x"](date),
      orbit["y"](date),
      orbit["z"](date)
    );
    ref.current.position.dot(new Vector3(1, 1, 1))
  })
  const textures = useTexture({
    map: orbit.texture,
  })


  return (
    <>
      {/* <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <sphereGeometry />
        <meshStandardMaterial  /> 
      </mesh> */}
      <mesh
        position={position}
        ref={ref}
        scale={0.25}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <circleGeometry />
        <meshStandardMaterial  {...textures} color={orbit["color"]}/> 
      </mesh>
    </>
  )
}

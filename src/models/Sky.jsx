import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'


const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += delta * 0.15
    }else{
      skyRef.current.rotation.y += delta * 0.02
    }
  })
  return (
    <mesh ref={skyRef}>
        {/* This will render the 3D model of the sky */}
        {/* We use a 3D sky object and not a static image so that when we rotate the clouds need to rotate as well */}
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
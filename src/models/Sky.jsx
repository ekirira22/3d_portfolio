import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
  const sky = useGLTF(skyScene)

  return (
    <mesh>
        {/* This will render the 3D model of the sky */}
        {/* We use a 3D sky object and not a static image so that when we rotate the clouds need to rotate as well */}
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
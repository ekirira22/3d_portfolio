import { useGLTF } from '@react-three/drei'
import airshipScene from '../assets/3d/airship.glb'

const Airship = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(airshipScene)
  return (
    <mesh {...props} scale={[0.050, 0.050, 0.050]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Airship
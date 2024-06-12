import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
            {/* This will be a spinning loader || Since this is rendered in a canvas it has 
            to somehow be converted to a 3D object || npm install @react-three/drei || wrap in Html */}
            <div className='w-20 h-20 border-2 border-opacity-20 border-cyan-500 border-t-cyan-500 rounded-full animate-spin' />
        </div>
    </Html>
  )
}

export default Loader
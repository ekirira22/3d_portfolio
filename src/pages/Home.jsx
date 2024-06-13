import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'

const Home = () => {
  const adjustIslandForScreenSize = () => {
    // Logic to adjust the island size based on screen size
    let screenScale = null 
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9]
    }else{
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, isLandRotation] = adjustIslandForScreenSize()

  return (
    <section className='w-full h-screen relative'>
        {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          POPUP
          Hi, my name is Eric
        </div> */} 

        {/* 3D Rendering of hero page || npm install @react-three/fiber || I'll use this instead of three.js*/}
        <Canvas 
          className='w-full h-screen bg-transparent'
          camera={{ near: 0.1, far: 1000}}
        >
          {/* Suspense is used to show a loader while the 3D scene is being rendered */}
           <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

            <Sky />
            <Island
               scale={islandScale}
               position={islandPosition}
               rotation={isLandRotation}
            />
           </Suspense>
        </Canvas>

    </section>
  )
}

export default Home
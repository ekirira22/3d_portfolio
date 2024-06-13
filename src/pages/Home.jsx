import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Airship from '../models/Airship'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

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

  const adjustPlaneForScreenSize = () => {
    // Logic to adjust the island size based on screen size
    let screenScale, screenPosition

    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    }else{
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, isLandRotation] = adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div> 

        {/* 3D Rendering of hero page || npm install @react-three/fiber || I'll use this instead of three.js*/}
        <Canvas 
          className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
          camera={{ near: 0.1, far: 1000}}
        >
          {/* Suspense is used to show a loader while the 3D scene is being rendered */}
           <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

            <Bird />
            <Sky isRotating={isRotating} />
            <Island
               scale={islandScale}
               position={islandPosition}
               rotation={isLandRotation}
               isRotating={isRotating}
               setIsRotating={setIsRotating}
               setCurrentStage={setCurrentStage}
            />
            {/* <Airship 
              planeScale={planeScale}
              planePosition={planePosition}
              rotation={[0, 20, 0]}
              isRotating={isRotating}
            /> */}
            <Plane 
              planeScale={planeScale}
              planePosition={planePosition}
              rotation={[0, 20, 0]}
              isRotating={isRotating}
            />
           </Suspense>
        </Canvas>

    </section>
  )
}

export default Home
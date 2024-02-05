import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Moon from "../models/Moon";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0.4, 6.5, 6.25];

    if (window.innerWidth < 768) {
      screenScale = [25, 25, 25];
      screenPosition = [15, -28, -135];
    } else {
      screenScale = [25, 25, 25];
      screenPosition = [10, -32, -145];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustBiPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [0.01, 0.01, 0.01];
      screenPosition = [0, -2.5, -4.5];
    } else {
      screenScale = [0.01, 0.01, 0.01];
      screenPosition = [0, -2.5, -4.5];
    }

    return [screenScale, screenPosition];
  };

  const adjustBirdForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [0.01, 0.01, 0.01];
      screenPosition = [0, -2.5, -4.5];
    } else {
      screenScale = [0.01, 0.01, 0.01];
      screenPosition = [0, -3.5, -4.5];
    }

    return [screenScale, screenPosition];
  };

  const adjustMoonForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [22, 22, 22];
      screenPosition = [-8, 40, -155];
    } else {
      screenScale = [38, 38, 38];
      screenPosition = [-8, 51, -190];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustBiPlaneForScreenSize();
  const [moonScale, moonPosition] = adjustMoonForScreenSize();
  const [birdScale, birdPosition] = adjustBirdForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[6, 2, 2]} intensity={1} />
          <ambientLight intensity={0.6} color="#04081a" />

          {/* <Moon scale={moonScale} position={moonPosition} /> */}
          {/* <Sky scale={[3, 3, 3]} position={(0, 0, 0)} /> */}
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={islandRotation}
            scale={islandScale}
          />
          {/* <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 13.8, 0]}
          /> */}
          {/* <Bird
            scale={birdScale}
            position={birdPosition}
            isRotating={isRotating}
          /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

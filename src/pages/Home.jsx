import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import HomeInfo from "../components/HomeInfo";
import transition from "../transition";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const preloaderRef = useRef(null);
  const floatingDivRef = useRef(null);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0.4, 6.0, 6.25];

    if (window.innerWidth < 768) {
      screenScale = [25, 25, 25];
      screenPosition = [15, -28, -135];
    } else {
      screenScale = [20, 20, 20];
      screenPosition = [10, -32, -135];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <div>
      <section className="w-full h-screen relative">
        <div
          ref={floatingDivRef}
          className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"
        >
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense>
            <directionalLight position={[6, 2, 2]} intensity={1} />
            <ambientLight intensity={0.6} color="#04081a" />
            <Island
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              position={islandPosition}
              rotation={islandRotation}
              scale={islandScale}
            />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
};

export default transition(Home, "Accueil");

import React, { Suspense, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/box.glb", GLTFLoader);

 
  


  const myMesh = React.useRef();




  return (
    <mesh ref={myMesh}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={100} position={[1,-2,4 ]}  />
      <pointLight intensity={500} position={[-1,-2,4]} />
      
     
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.43: 0.8}
        position={isMobile ? [0, -2, 0] : [0, -3, 0]}
        rotation={[0, 1.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

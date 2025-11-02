import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Skull } from "./Skull.jsx";
import HeroLights from "./HeroLights.jsx";
import { forwardRef, useImperativeHandle, useRef } from "react";

const HeroExp = () => {
 

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <HeroLights />
      <OrbitControls
        enablePan={true}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group
      
        scale={isMobile ? 3 : 5}
        position={isMobile ? [-0.5, 0.5, 0] : [1, 0, -2]}
        rotation={isMobile ? [0, 0.69, 0] : [0, 0.69, 0]}
      >
        <Skull
          rotation={[0, Math.PI / 1.25, 0]} // Slight angle
        />
      </group>
    </Canvas>
  );
};

export default HeroExp;

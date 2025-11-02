import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { DemonModel } from '../components/HeroModels/Demon_skull'
import HeroLights from '../components/HeroModels/HeroLights';


const ContactExp = () => {
  return (
    <Canvas camera={{ position: [0, -3, 7], fov: 45 }} castShadow>
      {/* <directionalLight position={[-10, 10, -5]} intensity={1} />
      <directionalLight position={[-10, 10, -5]} intensity={1} /> */}

      <spotLight
        position={[0, -2, 3]}
        angle={0.6}
        penumbra={1}
        intensity={6}
        color="#ff1a1a" // blood-red tone
        castShadow
      />

      <directionalLight position={[0, 3, 2]} intensity={1.5} color="#4466ff" />

      <spotLight
        position={[2, 2, -3]}
        angle={0.4}
        intensity={2}
        color="#ffffff"
      />

      <ambientLight intensity={0.2} />
      {/* <spotLight
        position={[-1, 0, 1]}
        angle={2}
        penumbra={10}
        intensity={10}
        color="black"
        castShadow
      /> */}
      {/* <pointLight position={[-0.4, 0, 0]} intensity={1} color="red" />  */}

      {/* <Environment preset="city" /> */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 5}
      />

      <group scale={0.13} position={[0, -1.5, -2]} castShadow>
        <DemonModel />
      </group>
    </Canvas>
  );
}

export default ContactExp
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";




export function Skull(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/skull.glb");



  // Animate up and down
  useFrame((state) => {
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.045;
  });


  return (
  
      <group ref={groupRef} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.739}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
            material-roughness={10}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.material_0}
            material-roughness={10}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.material_0}
            material-roughness={10}
          />
        </group>
      </group>
 
  );
}

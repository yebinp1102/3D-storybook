import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const HELIX_SPEED = 6;

const Airplane = (props: any) => {
  const { nodes, materials } = useGLTF("./models/airplane.glb");

  const helix = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    helix.current.rotation.x += delta * HELIX_SPEED;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        // geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
        geometry={(nodes.PUSHILIN_Plane_Circle000 as THREE.Mesh).geometry}
        material={materials.plane}
      >
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh
        ref={helix}
        geometry={(nodes.PUSHILIN_Plane_Helix as THREE.Mesh).geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      >
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

export default Airplane;

useGLTF.preload("./models/airplane.glb");

import { useGLTF } from "@react-three/drei";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

const Cloud = ({opacity, ...props}: any) => {
  const {nodes} = useGLTF('./models/cloud.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={(nodes.Mball001 as THREE.Mesh).geometry}>
        <meshStandardMaterial 
          envMapIntensity={2}
          transparent
          opacity={opacity}
          onBeforeCompile={fadeOnBeforeCompile}
        />
      </mesh>
    </group>
  )
}

export default Cloud

useGLTF.preload("./models/cloud.gltf");
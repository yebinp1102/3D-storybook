import { useGLTF } from "@react-three/drei";

const Cloud = ({opacity, ...props}: any) => {
  const {nodes} = useGLTF('./models/cloud.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial 
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  )
}

export default Cloud

useGLTF.preload("./models/cloud.gltf");
import { useGLTF } from "@react-three/drei";

const Cloud = ({opacity, ...props}: any) => {
  const {nodes, materials} = useGLTF('./models/cloud.glb');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
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

useGLTF.preload("./models/cloud.glb");
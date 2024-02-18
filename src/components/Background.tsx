import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";

import * as THREE from "three"

const Background = () => {
  const colorA = "#357ca1";
  const colorB = "#ffffff";
  const start = 0.2;
  const end = -0.5;
  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide} >
          <Gradient 
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} background>
        <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2} rotation-x={Math.PI}>
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide} >
            <Gradient 
              colorA={colorA}
              colorB={colorB}
              axes={"y"}
              start={start}
              end={end}
            />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  )
}

export default Background
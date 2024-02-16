import { Float, OrbitControls, PerspectiveCamera, useScroll, Text } from "@react-three/drei";
import Background from "./Background";
import Airplane from "./Airplane";
import Cloud from "./Cloud";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const LINE_NB_POINTS = 12000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;


const Experience = () => {
  const cameraGroup = useRef<any>();
  const airplane = useRef<any>(null!);
  const scroll = useScroll();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -8 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -9 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -10 * CURVE_DISTANCE),
    ],
    false,
    "catmullrom",
    0.5
    )
  } ,[])

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);

    const curPoint = curve.getPoint(scrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // Airplane rotation

    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new THREE.Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
  });


  return (
    <>
      {/* <OrbitControls /> */}
      {/* airplane model */}
      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault/>
        <group ref={airplane}>
          <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
            <Airplane 
              rotation-y={Math.PI / 2}
              scale={[0.2, 0.2, 0.2]}
              position-y={0.1}
            />
          </Float>
        </group>
      </group>

      {/* text */}
      <group position={[-3, 0, -10]}>
        <Text
          color="black"
          anchorX={"left"}
          anchorY="middle"
          fontSize={0.2}
          maxWidth={3.5}
          lineHeight={1.2}
          font={"./fonts/NanumGothic-ExtraBold.ttf"}
        >
          안녕하세요! {"\n"}
          지금부터 함께 신나는 모험을 떠나볼까요?
        </Text>
      </group>

      <group position={[1, 0, -40]}>
        <Text
          color="white"
          anchorX={"left"}
          anchorY="middle"
          fontSize={0.26}
          maxWidth={3.5}
          lineHeight={1.2}
          font={"./fonts/NanumGothic-ExtraBold.ttf"}
        >
          아차! 제 소개를 먼저 해드릴게요. {"\n"}
        </Text>
        <Text
          color="white"
          anchorX={"left"}
          anchorY="top"
          position-y={-0.25}
          fontSize={0.15}
          lineHeight={1.3}
          maxWidth={3.5}
          font={"./fonts/NanumGothic-Regular.ttf"}
        >
          전 이번에 뭉게항공에 입사하게 된 비행기라고해요.
          아버지의 꿈을 이어 여객기가 되었답니다!
        </Text>
      </group>

      {/* Line */}
      <group position-y={-2}>
        <mesh>
          <extrudeGeometry 
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve
              }
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh>
      </group>

      {/* CLOUDS */}
      <Cloud opacity={0.6} scale={[1, 1, 1.5]} position={[-3.5, -1.2, -7]} />
      <Cloud opacity={0.6} scale={[1, 1, 2]} position={[3.5, -1, -10]} rotation-y={Math.PI} />
      <Cloud 
        opacity={0.9}
        scale={[1, 1, 1]}
        position={[-3.5, 0.2, -12]}
        rotation-y={Math.PI / 3}
      />
      <Cloud opacity={0.9} scale={[1, 1, 1]} position={[3.5, 0.2, -12]} />

      <Cloud opacity={0.4}
        scale={[0.4, 0.4, 0.4]}
        rotation-y={Math.PI / 9}
        position={[1, -0.2, -12]}
      />
      <Cloud opacity={0.6} scale={[0.3, 0.5, 2]} position={[-4, -0.5, -53]} />
      <Cloud opacity={0.7} scale={[0.8, 0.8, 0.8]} position={[-1, -1.5, -100]} />
    </>
  )
}

export default Experience
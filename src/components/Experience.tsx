import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import Background from "./Background";
import Airplane from "./Airplane";
import Cloud from "./Cloud";
import * as THREE from "three";
import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import TextSection from "./TextSection";
import {gsap} from "gsap";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

const LINE_NB_POINTS = 12000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;


const Experience = () => {
  const cameraGroup = useRef<any>();
  const cameraRail = useRef<any>();
  const airplane = useRef<any>();
  const tl = useRef<any>();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  const curvePoints = useMemo(() => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -1 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],[]);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
    curvePoints,
    false,
    "catmullrom",
    0.5
    )
  } ,[])

  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[1].x - 3,
          curvePoints[1].y,
          curvePoints[1].z
        ),
        subtitle: `안녕하세요! 저는 윙키예요. 오늘은 뭉게 공항에서 첫 비행을 하는 날이예요.`,
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[2].x + 2,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        subtitle: `이륙하기 전 관제탑 애니에게 허가를 받아야 해요. "애니! 윙키 이륙 준비 완료 했습니다. 이륙 허가를 요청합니다!"`,
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[3].x - 3,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        subtitle: `허가가 났어요! 그럼 이륙합니다!`,
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[4].x + 3.5,
          curvePoints[4].y,
          curvePoints[4].z - 12
        ),
        subtitle: `아 참! 제 소개를 해드릴게요. 저는 더 많은 경험을 하라는 할아버지의 뜻을 따라 뭉게 공항에 오게 되었어요! 지금은 다녀본 곳보다 가봐야할 곳이 더 많아서 매 순간이 두근두근 하답니다. 
        `,
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[5].x - 3.5,
          curvePoints[5].y,
          curvePoints[5].z
        ),
        subtitle: `제 꿈은 세계 일주예요. 언젠가 오로라도 보고 북극도 가볼거예요!`,
      },
    ];
  }, []);

  const clouds = useMemo(() => [
    // 시작점
    {
      position: new THREE.Vector3(-3.5, -3.2, -7),
    },
    {
      position: new THREE.Vector3(3.5, -4, -10),
    },
    {
      scale: new THREE.Vector3(4, 4, 4),
      position: new THREE.Vector3(-18, 0.2, -68),
      rotation: new THREE.Euler(-Math.PI / 5, Math.PI / 6, 0),
    },
    {
      scale: new THREE.Vector3(2.5, 2.5, 2.5),
      position: new THREE.Vector3(10, -1.2, -52),
    },
    // FIRST POINT
    {
      scale: new THREE.Vector3(4, 4, 4),
      position: new THREE.Vector3(
        curvePoints[1].x + 10,
        curvePoints[1].y - 4,
        curvePoints[1].z + 64
      ),
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[1].x - 20,
        curvePoints[1].y + 4,
        curvePoints[1].z + 28
      ),
      rotation: new THREE.Euler(0, Math.PI / 7, 0),
    },
    {
      rotation: new THREE.Euler(0, Math.PI / 7, Math.PI / 5),
      scale: new THREE.Vector3(5, 5, 5),
      position: new THREE.Vector3(
        curvePoints[1].x - 13,
        curvePoints[1].y + 4,
        curvePoints[1].z - 62
      ),
    },
    {
      rotation: new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
      scale: new THREE.Vector3(5, 5, 5),
      position: new THREE.Vector3(
        curvePoints[1].x + 54,
        curvePoints[1].y + 2,
        curvePoints[1].z - 82
      ),
    },
    {
      scale: new THREE.Vector3(5, 5, 5),
      position: new THREE.Vector3(
        curvePoints[1].x + 8,
        curvePoints[1].y - 14,
        curvePoints[1].z - 22
      ),
    },
    // SECOND POINT
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[2].x + 6,
        curvePoints[2].y - 7,
        curvePoints[2].z + 50
      ),
    },
    {
      scale: new THREE.Vector3(2, 2, 2),
      position: new THREE.Vector3(
        curvePoints[2].x - 2,
        curvePoints[2].y + 4,
        curvePoints[2].z - 26
      ),
    },
    {
      scale: new THREE.Vector3(4, 4, 4),
      position: new THREE.Vector3(
        curvePoints[2].x + 12,
        curvePoints[2].y + 1,
        curvePoints[2].z - 86
      ),
      rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 3),
    },
    // THIRD POINT
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[3].x + 3,
        curvePoints[3].y - 10,
        curvePoints[3].z + 50
      ),
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[3].x - 10,
        curvePoints[3].y,
        curvePoints[3].z + 30
      ),
      rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
    },
    {
      scale: new THREE.Vector3(4, 4, 4),
      position: new THREE.Vector3(
        curvePoints[3].x - 20,
        curvePoints[3].y - 5,
        curvePoints[3].z - 8
      ),
      rotation: new THREE.Euler(Math.PI, 0, Math.PI / 5),
    },
    {
      scale: new THREE.Vector3(5, 5, 5),
      position: new THREE.Vector3(
        curvePoints[3].x + 0,
        curvePoints[3].y - 5,
        curvePoints[3].z - 98
      ),
      rotation: new THREE.Euler(0, Math.PI / 3, 0),
    },
    // FOURTH POINT
    {
      scale: new THREE.Vector3(2, 2, 2),
      position: new THREE.Vector3(
        curvePoints[4].x + 3,
        curvePoints[4].y - 10,
        curvePoints[4].z + 2
      ),
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[4].x + 24,
        curvePoints[4].y - 6,
        curvePoints[4].z - 42
      ),
      rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[4].x - 4,
        curvePoints[4].y + 9,
        curvePoints[4].z - 62
      ),
      rotation: new THREE.Euler(Math.PI / 3, 0, Math.PI / 3),
    },
    // FINAL
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[7].x + 12,
        curvePoints[7].y - 5,
        curvePoints[7].z + 60
      ),
      rotation: new THREE.Euler(-Math.PI / 4, -Math.PI / 6, 0),
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[7].x - 12,
        curvePoints[7].y + 5,
        curvePoints[7].z + 120
      ),
      rotation: new THREE.Euler(Math.PI / 4, Math.PI / 6, 0),
    },
    {
      scale: new THREE.Vector3(4, 4, 4),
      position: new THREE.Vector3(
        curvePoints[7].x,
        curvePoints[7].y,
        curvePoints[7].z
      ),
      rotation: new THREE.Euler(0, 0, 0),
    },
  ],
  [])

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);
    let friction = 1;
    let resetCameraRail = true;

    // text가 화면 안에 있을 때, 
    textSections.forEach((textSections) => {
      const distance = textSections.position.distanceTo(cameraGroup.current.position);
      if(distance < FRICTION_DISTANCE){
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new THREE.Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSections.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });

    if(resetCameraRail){
      const targetCameraRailPosition = new THREE.Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // CALCULATE LERPED SCROLL OFFSET
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current.seek(lerpedScrollOffset * tl.current.duration());


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

  const backgroundColors = useRef({
    colorA: "#3535cc",
    colorB: "#abaadd",
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#6f35cc",
      colorB: "#ffad30",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#424242",
      colorB: "#ffcc00",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#81318b",
      colorB: "#55ab8f",
    });

    tl.current.pause();
  }, []);


  return (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      {/* <OrbitControls /> */}

      {/* airplane model */}
      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors} />
        <group ref={cameraRail}>
          <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault/>
        </group>
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
          <meshStandardMaterial 
            color={"white"} 
            opacity={1} 
            transparent 
            envMapIntensity={2} 
            onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>

      {/* Text */}
      {textSections.map((textSection, index) => (
        <TextSection {...textSection} key={index} />
      ))}

      {/* CLOUDS */}
      {
        clouds.map((cloud, index) => (
          <Cloud {...cloud} key={index} />
        ))
      }
    </>
  )
}

export default Experience
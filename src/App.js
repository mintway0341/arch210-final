import React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { OrbitControls, Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { DDSLoader } from "three-stdlib";
import { TypeAnimation } from "react-type-animation";
import { BsArrowDownCircle } from "react-icons/bs";
import styled from "styled-components";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import view1 from "./assets/3D-View-1.png";
import view2 from "./assets/3D-View-2.png";
import view3 from "./assets/3D-View-3.png";
import elevationS from "./assets/Elevation-S.png";
import elevationW from "./assets/Elevation-W.png";
import circulationDiagram from "./assets/Circulation-Diagram.png";
import conceptDiagram from "./assets/Concept-Diagram.png";
import explodedDiagram from "./assets/Exploded-Diagram.png";
import programDiagram from "./assets/Program-Diagram.png";
import floorPlan1 from "./assets/1st-Floor-Plan.png";
import floorPlan2 from "./assets/2nd-Floor-Plan.png";
import sitePlan from "./assets/Site-Plan.png";
import sectionA from "./assets/Section-A.png";
import sectionB from "./assets/Section-B.png";

const moveToContent = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const fbx = useLoader(FBXLoader, "2.fbx");
  console.log(fbx);

  return (
    <primitive
      object={fbx}
      scale={0.01}
      rotation={[30, 197.9, 0.6]}
      position={[-100, -210, -140]}
    />
  );
};

const App = () => {
  const ref1 = useRef(null);
  const { scrollYProgress, scrollY } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.06, 0.12], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.12, 0.18], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.18, 0.24], [0, 1]);
  const opacity5 = useTransform(scrollYProgress, [0.24, 0.3], [0, 1]);
  const opacity6 = useTransform(scrollYProgress, [0.3, 0.36], [0, 1]);
  const opacity7 = useTransform(scrollYProgress, [0.36, 0.42], [0, 1]);
  const opacity8 = useTransform(scrollYProgress, [0.42, 0.48], [0, 1]);
  const opacity9 = useTransform(scrollYProgress, [0.48, 0.54], [0, 1]);
  const opacity10 = useTransform(scrollYProgress, [0.6, 0.66], [0, 1]);
  const opacity11 = useTransform(scrollYProgress, [0.7, 0.76], [0, 1]);
  const opacity12 = useTransform(scrollYProgress, [0.8, 0.86], [0, 1]);
  const opacity13 = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const opacity14 = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "10px",
          backgroundColor: "#42FF91",
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          zIndex: 100,
        }}
      />
      {/* <p
        style={{ color: "white", marginTop: 50, fontWeight: 700, fontSize: 80 }}
      >
        DIAG-SPACE
      </p> */}
      <TypeAnimation
        sequence={["DIAG-VILLAGE"]}
        wrapper="div"
        speed={10}
        cursor={true}
        repeat={3}
        style={{
          fontSize: "5vh",
          marginTop: "10vh",
          marginBottom: "0vh",
          fontWeight: 700,
          background: "-webkit-linear-gradient(300deg, #90c0a0, #70c0f0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transform: "rotate(-5deg)",
        }}
      />
      <Canvas
        orthographic={false}
        style={{ width: "100vw", height: "50vh" }}
        camera={{
          aspect: window.innerWidth / window.innerHeight,
          fov: 100,
          near: 0.05,
          far: 1000,
        }}
      >
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.1}
          maxPolarAngle={0.7}
        />
        <directionalLight
          position={[10, 30, 20]}
          intensity={2}
          color="#90c0a0"
        />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={1}
          color="#70c0f0"
        />
        <Scene />
      </Canvas>
      <GoDownIcon
        onClick={() => {
          moveToContent(ref1);
        }}
        style={{ zIndex: 102, marginBottom: "40vh" }}
      />
      <motion.img
        ref={ref1}
        src={view1}
        style={{ opacity: opacity1, width: "90vw", marginTop: "5vh" }}
      />
      <motion.img
        src={view2}
        style={{ opacity: opacity2, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={view3}
        style={{ opacity: opacity3, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={elevationS}
        style={{ opacity: opacity4, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={elevationW}
        style={{ opacity: opacity5, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={conceptDiagram}
        style={{ opacity: opacity6, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={circulationDiagram}
        style={{ opacity: opacity7, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={programDiagram}
        style={{ opacity: opacity8, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={explodedDiagram}
        style={{ opacity: opacity9, width: "90vw", marginTop: "0vh" }}
      />
      <motion.img
        src={floorPlan1}
        style={{ opacity: opacity10, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={floorPlan2}
        style={{ opacity: opacity11, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={sitePlan}
        style={{ opacity: opacity12, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={sectionA}
        style={{ opacity: opacity13, width: "90vw", marginTop: "10vh" }}
      />
      <motion.img
        src={sectionB}
        style={{ opacity: opacity14, width: "90vw", marginTop: "10vh" }}
      />
    </div>
  );
};

export default App;

const GoDownIcon = styled(BsArrowDownCircle)`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%);
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
`;

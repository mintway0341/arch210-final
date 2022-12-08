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
      <img src={view1} style={{ width: "90vw", marginTop: "5vh" }} />
      <img src={view2} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={view3} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={elevationS} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={elevationW} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={conceptDiagram} style={{ width: "90vw", marginTop: "10vh" }} />
      <img
        src={circulationDiagram}
        style={{ width: "90vw", marginTop: "10vh" }}
      />
      <img src={programDiagram} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={explodedDiagram} style={{ width: "90vw", marginTop: "0vh" }} />
      <img src={floorPlan1} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={floorPlan2} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={sitePlan} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={sectionA} style={{ width: "90vw", marginTop: "10vh" }} />
      <img src={sectionB} style={{ width: "90vw", marginTop: "10vh" }} />
    </div>
  );
};

export default App;

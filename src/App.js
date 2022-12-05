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

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const fbx = useLoader(FBXLoader, "2.fbx");
  console.log(fbx);

  return (
    <primitive
      object={fbx}
      scale={0.007}
      rotation={[30.7, 197.8, 0.6]}
      position={[-80, -190, -60]}
    />
  );
};

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          marginTop: "20vh",
          marginBottom: "0vh",
          fontWeight: 700,
          background: "-webkit-linear-gradient(300deg, #90c0a0, #70c0f0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      />
      <Canvas
        orthographic={true}
        style={{ width: "100vw", height: "50vh" }}
        camera={{
          aspect: window.innerWidth / window.innerHeight,
          fov: 100,
          near: 0.1,
          far: 1000,
        }}
      >
        <OrbitControls />
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
    </div>
  );
};

export default App;

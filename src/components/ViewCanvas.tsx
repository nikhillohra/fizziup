"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { View } from "@react-three/drei";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  {
    ssr: false,
  }
);
type Props = {};

export const ViewCanvas = (props: Props) => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

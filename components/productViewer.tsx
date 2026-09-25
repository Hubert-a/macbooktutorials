"use client";
import useMacbookStore from "@/store";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";

const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacbookStore();
  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p>
          Macbook Pro {scale === 0.06 ? '14"' : '16"'} in {color}
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === "#abd5bd" && "active",
              )}
              onClick={() => setColor("#abd5bd")}
            />
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active",
              )}
              onClick={() => setColor("#2e2c2e")}
            />
          </div>
          <div className="size-control">
            <div
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
              onClick={() => setScale(0.06)}
            >
              <p>14&quot;</p>
            </div>
            <div
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
              onClick={() => setScale(0.08)}
            >
              <p>16&quot;</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Box position={[-1, 1, 0]} scale={10 * scale} material-color={color} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;

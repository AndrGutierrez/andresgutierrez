'use client'
import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/offscreen";

const Scene = lazy(() => import("@/components/home/Scene"));

const worker = new Worker(new URL("./workers/main.tsx", import.meta.url), {
  type: "module",
});

const ModelRenderer = () => {
  return (
    <div className="w-full h-full">
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center h-[calc(100vh-300px)] font-bold text-[30px] font-mono text-white">
          </div>
        }
      >
        <Canvas
          worker={worker}
          fallback={<Scene />}
          shadows="basic"
          className=""
        />
      </Suspense>
    </div>
  );
};

export default ModelRenderer;


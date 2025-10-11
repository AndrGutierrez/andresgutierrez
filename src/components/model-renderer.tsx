'use client'
import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/offscreen";
import { LoadingWheel } from '@/components/app'


const worker = new Worker(new URL("./workers/main.tsx", import.meta.url), {
  type: "module",
});

const ModelRenderer = () => {
  const [rendered, setRendered] = useState(false)
  worker.onmessage = (e: any) => {
    setRendered(true)
  }
  const Scene = lazy(async () => await import("@/components/home/Scene"));
  return (
    <div className="w-full h-full">
      <Canvas
        worker={worker}
        fallback={<Scene />}
        shadows="basic"
        className=""
      />
      {!rendered && (
        <LoadingWheel>
        </LoadingWheel>
      )}
    </div>
  );
};

export default ModelRenderer;


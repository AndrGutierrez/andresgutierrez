'use client'
import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/offscreen";
import { useRenderStore } from "@/store";


const worker = new Worker(new URL("./workers/main.tsx", import.meta.url), {
  type: "module",
});

const ModelRenderer = () => {
  const { setRendered } = useRenderStore()
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
    </div>
  );
};

export default ModelRenderer;


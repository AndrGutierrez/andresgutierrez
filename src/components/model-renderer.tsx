'use client'
import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/offscreen";
import { useRenderStore } from "@/store";
import { LoadingWheel } from '@/components/app'


const worker = new Worker(new URL("./workers/main.tsx", import.meta.url), {
  type: "module",
});

const ModelRenderer = () => {
  const { rendered, setRendered } = useRenderStore()
  const [r, setR] = useState(false)
  worker.onmessage = (e: any) => {
    setR(true)
  }
  const Scene = lazy(async () => await import("@/components/home/Scene"));
  useEffect(() => { console.log(r) }, [r])
  return (
    <div className="w-full h-full">
      <Canvas
        worker={worker}
        fallback={<Scene />}
        shadows="basic"
        className=""
      />
      {!r && (
        <LoadingWheel>
        </LoadingWheel>
      )}
    </div>
  );
};

export default ModelRenderer;


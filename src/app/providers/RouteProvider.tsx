"use client"

import { redirect, usePathname } from "next/navigation"
import { useEffect, useRef } from "react";

export default function RouteProvider({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  // const pathname = usePathname()
  // const path = useRef("")
  // useEffect(() => {
  //   if (pathname !== path.current) path.current = pathname
  //   // redirect(pathngccame)
  // }, [pathname])
  //
  // useEffect(() => {
  //   redirect(path.current)
  // }, [path])
  return children
}

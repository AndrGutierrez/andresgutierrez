"use client"

import { redirect, usePathname } from "next/navigation"
import { useEffect } from "react";

export default function RouteProvider({children}: Readonly<{
  children: React.ReactNode;
}>){

  const pathname = usePathname()
  let i = 0
  let lastPathname = ""
  useEffect(() => {
    if (i == 0) {
      lastPathname = pathname
    }
    if (i== 1){
      // pathname != lastPathname && redirect(pathname)
      console.log("pathname", pathname)
      console.log("lastPathname", lastPathname)
    }
    i++
    // redirect(pathngccame)
  }, [])
  return children
}

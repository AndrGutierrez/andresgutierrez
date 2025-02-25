import React from "react"
import Project from "@/components/Project"

const items: Array<{ title: string, content: string, thumbnail: string }> = [

  {
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Student_densite_best.JPG/325px-Student_densite_best.JPG",
    title: "lorem ipsum",
    content: "lorem ipsum"
  }
]
export default function Blog() {
  return <main className="min-h-screen bg-gradient-to-b from-background to-black from-15% flex justify-center">
    <div className="max-w-screen-lg">
      <h1 className="text-4xl">My projects.</h1>
      {items.map((item, i) => <Project key={i} {...item} />)}
    </div>
  </main>
}

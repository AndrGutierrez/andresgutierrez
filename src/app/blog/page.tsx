import React from "react"
import PostItem from "@/components/blog/PostItem"

const items: Array<{ title: string, content: string, thumbnail: string }> = [

]
export default function Blog() {
  return <main className="min-h-screen bg-gradient-to-b from-background to-black from-15% flex justify-center">
    <div className="max-w-screen-lg">
      <h1 className="text-4xl">My personal blog.</h1>
      {items.map(item => <PostItem {...item} />)}
    </div>
  </main>
}

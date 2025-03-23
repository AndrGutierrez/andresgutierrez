import React from "react"
import PostItem from "@/components/blog/PostItem"

const items: Array<{ title: string, content: string, thumbnail: string }> = [

]
export default function Blog() {
  return <main className="min-h-screen  flex justify-center mt-16">
    <div className="max-w-screen-lg">
      <h1 className="text-4xl">My personal blog.</h1>
      {items.map((item, i) => <PostItem key={i} {...item} />)}
    </div>
  </main>
}

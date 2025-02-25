import React from "react"

type PropTypes = {
  title: string
  content: string
  thumbnail: string
}

export default function Project({ title, content, thumbnail }: PropTypes) {
  return (
    <div className="rounded p-3">
      <img src={thumbnail} alt="" />
      <h3 className="text-xl">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

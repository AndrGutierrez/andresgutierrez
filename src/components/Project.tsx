import React from "react"
import ExportedImage from "next-image-export-optimizer";

type PropTypes = {
  title: string
  content: string
  thumbnail: string
}

export default function Project({ title, content, thumbnail }: PropTypes) {
  return (
    <div className="rounded-sm p-3">
      <ExportedImage src={thumbnail} alt="" />
      <h3 className="text-xl">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

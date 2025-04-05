import React from "react";
import ExportedImage from "next-image-export-optimizer";
type PropTypes = {
  title: string,
  content: string,
  thumbnail: string
}
export default function PostItem({ title, content, thumbnail }: PropTypes) {
  return (
    <div>
      <ExportedImage src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>
        {content}
      </p>
    </div>
  )
}

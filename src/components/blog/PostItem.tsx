import React from "react";
type PropTypes = {
  title: string,
  content: string,
  thumbnail: string
}
export default function PostItem({ title, content, thumbnail }: PropTypes) {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>
        {content}
      </p>
    </div>
  )
}

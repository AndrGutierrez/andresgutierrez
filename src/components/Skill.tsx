import React from "react"

type PropTypes = {

  image: string,
  title: string
}
export default function Skill({ image, title }: PropTypes) {
  return (
    <div className="rounded border border-gray-700 h-full 2xl:h-fit relative  ">
      <img src={image} alt="react" className="h-full 2xl:h-fit absolute z-10 left-0 right-0 -top-20 rounded-full m-auto " />
      <div className="p-3 mt-[100px]">
        <h3 className="text-2xl text-center">{title}</h3>
      </div>

    </div>
  )
}

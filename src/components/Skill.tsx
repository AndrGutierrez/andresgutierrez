import React from "react"

type PropTypes= {

  image: string,
  title: string
}
export default function Skill({image, title}: PropTypes){
  return (
    <div className="rounded border border-gray-700 h-full relative  ">
      <img src={image} alt="react" className="h-full absolute z-10 left-0 right-0 -top-20 rounded-full m-auto " />
      <div className="p-3 mt-[150px]">
        <h3 className="text-2xl text-center">{title}</h3>
      </div>

    </div>
  )
}

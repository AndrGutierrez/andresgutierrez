import React from "react";

type PropTypes = {
  image: string;
  title: string;
};

export default function Skill({ image, title }: PropTypes) {
  return (
    <div className="relative flex flex-col items-center bg-background border border-gray-700 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 backdrop-blur-md">
      <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-25 h-25 object-cover m-auto" />



      </div>
      <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
    </div>
  );
}

import React from 'react'
import { ArrowOutward } from "@mui/icons-material";
import SecondFrameImage from "../assets/secondFrame-img.png"
import '../App.css'
const SecondFrame = () => {
  return (
    <div className="pb-[60px] min-h-screen text-white flex flex-col md:flex-row  justify-evenly">
  {/* Left Image Section */}
  <div id='SecondFrameImg' className="relative w-full md:w-[650px] rounded-3xl overflow-hidden shadow-xl">
    <img
      src={SecondFrameImage}
      alt="Basketball in flowers"
      id='SecondFrameImg'
      className="w-full h-full object-cover"
    />
    <div id='blurcard' className="absolute bottom-0  p-4 flex items-center justify-between">
      <p className="md:text-base  text-white">
        A GLIMPSE INTO OUR CREATIVE WORLD
      </p>
      <div id='BlurCardArrow' className="p-2 border border-white rounded-full">
        <ArrowOutward className="ArrowOutward w-10 h-10" />
      </div>
    </div>
  </div>

  {/* Right Text Section */}
  <div id='right-text' className="w-full md:w-1/2 max-w-xl space-y-6">
  <div className="top-text">
    <h1 className="md:text-5xl font-bold leading-tight">
      Design is not<br /> just what <span className="text-white">We do</span>
    </h1>

    <p className="text-sm md:text-base text-white
     leading-relaxed">
      Every project we take on is a reflection of our passion for creativity, a journey where colors, shapes, and ideas come together to tell a story. This portfolio represents more than work; it's a collection of moments where vision meets execution, bringing dreams to life with bold, vibrant energy.
    </p>
    </div>

<div className="bottom-text">
    <p className="uppercase tracking-wider font-semibold text-white">
      Inspired by Everyday
    </p>
  </div>
  </div>
</div>

  )
}

export default SecondFrame

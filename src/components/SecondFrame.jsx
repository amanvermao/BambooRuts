import React from 'react'
import { ArrowOutward } from "@mui/icons-material";
import SecondFrameImage from "../assets/secondFrame-img.png"
import '../App.css'

const SecondFrame = () => {
  return (
    <div className="pb-[60px] min-h-screen text-white flex flex-col md:flex-row justify-evenly items-start px-4 md:px-0">
      {/* Left Image Section */}
      <div id='SecondFrameImg' className="relative w-full md:w-[650px] rounded-3xl overflow-hidden shadow-xl mt-8 md:mt-0">
        <img
          src={SecondFrameImage}
          alt="Basketball in flowers"
          className="w-full h-full object-cover"
        />
       <div
  id='blurcard'
  className="absolute bottom-0 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0 h-[230px]"
>
  <p className="text-[30px] sm:text-[45px] font-extrabold leading-[40px] sm:leading-[60px] w-full sm:w-[500px] text-left">
    A GLIMPSE INTO OUR CREATIVE WORLD
  </p>
  <div id='BlurCardArrow' className="p-2 border border-white rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]">
    <ArrowOutward className="ArrowOutward w-8 h-8 sm:w-10 sm:h-10" />
  </div>
</div>

      </div>

      {/* Right Text Section */}
      <div id='right-text' className="w-full md:w-1/2 max-w-xl space-y-6 mt-10 md:mt-0">
        <div className="top-text">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-tight pb-6">
            Design is not<br /> just what <span className="text-white">We do</span>
          </h1>
          <p id='second-frame-p' className="text-sm sm:text-base font-bold text-white leading-relaxed max-w-[66%]">
            Every project we take on is a reflection of our passion for creativity, a journey where colors, shapes, and ideas come together to tell a story. This portfolio represents more than work; it's a collection of moments where vision meets execution, bringing dreams to life with bold, vibrant energy.
          </p>
        </div>
        <div className="bottom-text">
          <p id='second-frame-text-2' className="uppercase tracking-wider  text-white text-base sm:text-lg">
            Inspired by Everyday
          </p>
        </div>
      </div>
    </div>
  )
}

export default SecondFrame

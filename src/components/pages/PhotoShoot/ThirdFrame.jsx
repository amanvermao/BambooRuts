import React from 'react'
import linetwo from '../../../assets/PhotoShoot/linetwo.png'
import imgNine from '../../../assets/PhotoShoot/foodnine.png'
import imgTwo from '../../../assets/PhotoShoot/foodtwo.png'

const ThirdFrame = () => {
  return (
    <div className="relative w-full bg-white pb-[60px] py-4 px-6 flex justify-center items-start min-h-screen overflow-hidden">
      {/* Background Line */}
      <img
        src={linetwo}
        alt="Line"
        className="absolute top-[200px] left-0 w-full h-[700px] z-0"
      />

      {/* Content Wrapper */}
      <div className="flex z-10 gap-[50px] items-start">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <div className=" rounded-xl overflow-hidden">
            <img
              src={imgTwo}
              alt="Rajma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center mt-16">
          {/* REEL Button */}
          <div className=" text-black border mb-40  text-center flex justify-center items-center border-black py-6 px-6 text-[60px] font-extrabold rounded-[59px]">
            REEL
          </div>

          {/* Spacing */}
          <div className="mt-6 rounded-xl overflow-hidden">
            <img
              src={imgNine}
              alt="Bottle"
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdFrame

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
        className="absolute top-[200px] left-0 w-full h-[700px] z-0 object-contain"
      />

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row z-10 gap-[30px] md:gap-[50px] items-center md:items-start w-full max-w-6xl">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="rounded-xl overflow-hidden w-full">
            <img
              src={imgTwo}
              alt="Rajma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-16">
          {/* REEL Button */}
          <div className="text-black border mb-10 md:mb-40 text-center flex justify-center items-center border-black py-4 px-6 text-[30px] md:text-[60px] font-extrabold rounded-[59px]">
            REEL
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden w-full">
            <img
              src={imgNine}
              alt="Bottle"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdFrame

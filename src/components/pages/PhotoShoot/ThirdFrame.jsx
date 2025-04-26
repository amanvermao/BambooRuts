import React from 'react'
import linetwo from '../../../assets/PhotoShoot/linetwo.png'
import reelone from '../../../assets/PhotoShoot/reelone.mp4'
import reeltwo from '../../../assets/PhotoShoot/reeltwo.mp4'

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
          <div className="rounded-[50px] shadow-2xl overflow-hidden w-full">
            <video
              src={reelone}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover shadow-2xl rounded-[50px]"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-16">
          {/* REEL Button */}
          <div className="text-black border mb-10 md:mb-40 text-center flex justify-center items-center border-black py-4 px-6 text-[30px] md:text-[60px] font-extrabold rounded-[59px]">
            REEL
          </div>

          {/* Video */}
          <div className="rounded-[50px] shadow-2xl overflow-hidden w-full">
            <video
              src={reeltwo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover shadow-2xl rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdFrame

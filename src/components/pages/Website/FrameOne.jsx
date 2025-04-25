import React from 'react'
import camputerimage from '../../../assets/Website/computer.png'
import banner from '../../../assets/Website/banner.png'
import shadow from '../../../assets/Website/shadow.png'
import shadowtwo from '../../../assets/Website/shadowtwo.png'

const FrameOne = () => {
  return (
    <>
   <div
  className="min-h-[50vh] sm:min-h-screen flex items-center justify-center px-4 bg-black bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  {/* Background Image Behind Text */}
  <div className="absolute  w-full h-[250px] bg-cover bg-center z-0"
  style={{ backgroundImage: `url(${shadowtwo})` }}
  ></div>

  {/* Main Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-none">
      WEBSITE
    </h1>
  </div>
</div>


<div className="bg-white w-full flex flex-col items-center relative">
  <div className="relative z-10">
    <img
      src={camputerimage}
      className="h-[600px] object-contain mt-[-110px] sm:mt-[-150px] md:mt-[-200px]"
      alt="Camera"
    />
  </div>
  <div className="relative z-0 -mt-[100px]">
    <img
      src={shadow}
      className="w-[551px] h-[90px] object-contain"
      alt="Shadow"
    />
  </div>
</div>

         

    </>
  )
}

export default FrameOne

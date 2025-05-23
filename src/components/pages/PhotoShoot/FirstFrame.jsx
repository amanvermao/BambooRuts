import React from 'react'
import camImg from '../../../assets/PhotoShoot/camera.png'

const FirstFrame = () => {
  return (
    <>
    <div className="min-h-[50vh] sm:min-h-screen flex items-center justify-center px-4">
      <h1 className="pt-20  text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-center leading-none">
        PHOTO<br />SHOOT
      </h1>
    </div>
    <div id='photo-img-one-wrapper' className="bg-white h-[470px] w-full flex justify-end">
 <img id='photo-img-one' src={camImg} className='h-[700px] relative bottom-56  align-top' alt="" />
    </div>
    </>
  )
}

export default FirstFrame

import React from 'react'
import imgOne from '../../../assets/PhotoShoot/foodone.png'
import imgThree from '../../../assets/PhotoShoot/foodthree.png'
import imgFour from '../../../assets/PhotoShoot/foodfour.png'
import imgFive from '../../../assets/PhotoShoot/foodfive.png'
import imgSix from '../../../assets/PhotoShoot/foodsix.png'
import imgSeven from '../../../assets/PhotoShoot/foodseven.png'
import imgEight from '../../../assets/PhotoShoot/foodeight.png'
import bgline from '../../../assets/PhotoShoot/BgLine.png'

const SecondFrame = () => {
  return (
      <div className=" relative bg-white py-10 px-4">
      {/* Background Line */}
      <img
        src={bgline}
        alt="decorative line"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full object-contain pointer-events-none z-0"
      />

      {/* Section Container */}
      <div className="relative z-10 space-y-16">

        {/* Section 1: Catalog Shoot */}
        <div className="flex justify-center space-x-6">
          {/* Text Label */}
          <div className="flex items-center">
            <div className=" text-black border  text-center flex justify-center items-center border-black px-3 py-1 text-[30px] font-extrabold rounded-[30px]">
              CATALOG <br /> SHOOT
            </div>
          </div>

          {/* Image Column 1 */}
          <div className="flex flex-col space-y-4">
            <img src={imgOne} alt="food" className="rounded-md  object-cover" />
            <img src={imgSix} alt="food" className="rounded-md  object-cover" />
          </div>

          {/* Image Column 2 (slightly shifted down) */}
          <div className="flex flex-col space-y-4 mt-6">
            <img src={imgThree} alt="food" className="rounded-md  object-cover" />
            <img src={imgFour} alt="food" className="rounded-md  object-cover" />
          </div>
        </div>

        {/* Section 2: Lifestyle Photoshoot */}
        <div className="flex justify-center space-x-6">
          {/* Image Column */}
          <div className="flex flex-col space-y-4">
            <img src={imgEight} alt="food" className="rounded-md  object-cover" />
            <img src={imgFive} alt="food" className="rounded-md  object-cover" />
          </div>

          {/* Text + Image Column */}
          <div className="flex flex-col items-start space-y-4">
            <div className="text-black border text-center ml-7 flex justify-center items-center border-black px-3 py-1 text-[32px] font-extrabold rounded-[30px]">
              LIFESTYLE <br /> PHOTOSHOOT
            </div>
            <img src={imgSeven} alt="food" className="rounded-md  object-cover" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SecondFrame

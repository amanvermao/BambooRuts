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
    <div className="relative bg-white px-4">
  {/* Background Line */}
  <img
    src={bgline}
    alt="decorative line"
    className="absolute top-[-500px] left-1/2 -translate-x-1/2 h-full object-contain pointer-events-none z-0"
  />

  {/* Section Container */}
  <div className="relative z-10 space-y-12">

    {/* Section 1: Catalog Shoot */}
    <div className="flex flex-col md:flex-row items-center md:justify-center md:gap-24 md:space-x-8 gap-6">
      {/* Text Label */}
      <div className="flex items-center">
        <div className="text-black border text-center flex justify-center items-center border-black px-4 py-2 text-[30px] md:text-[60px] font-extrabold rounded-[30px]">
          CATALOG <br /> SHOOT
        </div>
      </div>

      {/* Image Columns */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Image Column 1 */}
        <div className="flex flex-col gap-4">
          <img src={imgOne} alt="food" className="rounded-md object-cover w-full" />
          <img src={imgSix} alt="food" className="rounded-md object-cover w-full" />
        </div>

        {/* Image Column 2 */}
        <div className="flex flex-col gap-4 mt-0 md:mt-[100px]">
          <img src={imgThree} alt="food" className="rounded-md object-cover w-full" />
          <img src={imgFour} alt="food" className="rounded-md object-cover w-full" />
        </div>
      </div>
    </div>

    {/* Section 2: Lifestyle Photoshoot */}
    <div className="flex flex-col md:flex-row md:justify-evenly gap-6 md:space-x-6">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        {/* Image Column */}
        <div className="flex flex-col gap-4 md:relative md:bottom-36">
          <img src={imgEight} alt="food" className="rounded-md object-cover w-full" />
          <img src={imgFive} alt="food" className="rounded-md object-cover w-full" />
        </div>

        {/* Text + Image Column */}
        <div className="flex flex-col gap-4 md:relative md:top-32 items-center md:items-start">
          <div className="text-black border text-center md:ml-10 flex justify-center items-center border-black px-4 py-2 text-[30px] md:text-[60px] font-extrabold rounded-[30px]">
            LIFESTYLE <br /> PHOTOSHOOT
          </div>
          <img src={imgSeven} alt="food" className="rounded-md object-cover w-full" />
        </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default SecondFrame

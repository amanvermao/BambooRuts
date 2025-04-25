import React from 'react'
import jeansone from '../../../assets/Website/jeansone.png'
import jeanstwo from '../../../assets/Website/jeanstwo.png'
import ringone from '../../../assets/Website/ringone.png'
import ringtwo from '../../../assets/Website/ringtwo.png'
import ecomOne from '../../../assets/Website/ecomone.png'
import ecomTwo from '../../../assets/Website/ecomtwo.png'
import chairOne from '../../../assets/Website/chirone.png'
import chairTwo from '../../../assets/Website/chairtwo.png'
import lineone from '../../../assets/Website/lineone.png'
import linetwo from '../../../assets/Website/linetwo.png'



const FrameTwo = () => {
  return (
    <>
    {/* // section 1  */}

    <div id='webiste-frame-two' className="py-10 bg-white px-4 md:px-10 relative">
  {/* Background Line Image at Bottom */}
  <img
    src={lineone}
    alt="Background Line"
    className="absolute bottom-[-400px] left-0 w-full z-0"
  />

<img
 id='website-lines'
    src={lineone}
    alt="Background Line"
    className="absolute top-[3420px] left-0 w-[100vw] z-0"
  />

  {/* Foreground Content */}
  <h1 id='website-heading-one' className="text-5xl text-black md:text-6xl ml-7 font-extrabold mb-6 relative z-10">HOP HEAD</h1>

  <div className="relative w-full rounded-3xl z-10">
    <img
      src={jeansone}
      alt="Center Banner"
      className="w-full object-cover rounded-3xl"
    />
  </div>

  {/* Bottom Right Image Positioned Upwards */}
  <div id='jeans-two' className="absolute bottom-[-350px] right-0 md:right-20 z-20">
    <img
      src={jeanstwo}
      alt="Bottom Right"
      className="rounded-3xl"
    />
  </div>
</div>


{/* //   section 2 */}

<div id='webiste-frame-two' className="py-10 pt-[400px] bg-white px-4 md:px-10">

    <h1 id='website-heading-two' className="text-5xl text-black md:text-6xl mr-14 text-end font-extrabold mb-6">ZISTTHI</h1>
    <img
    src={linetwo}
    alt="Background Line"
    className="absolute top-[2600px] left-0 w-[100vw] z-0"
  />
<div className="relative">

    <div className="relative w-full rounded-3xl ">
      {/* Center Image with Overlay Text */}
      <img
        src={ringone}
        alt="Center Banner"
        className="w-full object-cover rounded-3xl"
      />
    </div>

    {/* Bottom Right Image Positioned Upwards */}
    <div id='ring-two' className="absolute bottom-[-310px] right-0  md:right-20 z-20">
      <img
        src={ringtwo}
        alt="Bottom Right"
        className="rounded-3xl"
      />
    </div>
    </div>
  </div>

{/* // section 3 */}

<div id='webiste-frame-two' className="py-10 pt-[400px]  bg-white px-4 md:px-10">
    <h1 id='website-heading-three' className="text-5xl text-black md:text-6xl ml-7 font-extrabold mb-6">HEARINGAID</h1>

<div id='webiste-section-three' className="relative">
    <div className="relative w-full rounded-3xl ">
      {/* Center Image with Overlay Text */}
      <img
        src={ecomOne}
        alt="Center Banner"
        className="w-full object-cover rounded-3xl"
      />
    </div>

    {/* Bottom Right Image Positioned Upwards */}
    <div id='ecom-two' className="absolute bottom-[-310px] right-0  md:right-20 z-20">
      <img
        src={ecomTwo}
        alt="Bottom Right"
        className="rounded-3xl"
      />
    </div>
    </div>
  </div>

{/* // section 4 */}

<div id='webisite-section-four' className="py-10 pt-[400px] bg-white px-4 md:px-10">
    <h1 id='website-heading-four' className="text-5xl text-black md:text-6xl mr-14 text-end font-extrabold mb-6">REVOLVE KING</h1>

<div className="relative">
    <div className="relative w-full rounded-3xl ">
      {/* Center Image with Overlay Text */}
      <img
        src={chairOne}
        alt="Center Banner"
        className="w-full object-cover rounded-3xl"
      />
    </div>

    {/* Bottom Right Image Positioned Upwards */}
    <div id='chair-img-two' className="absolute bottom-[-310px] right-0  md:right-20 z-20">
      <img
        src={chairTwo}
        alt="Bottom Right"
        className="rounded-3xl"
      />
    </div>
    </div>
  </div>


</>
  )
}

export default FrameTwo

import React from 'react'
import hand from '../../../assets/SocialMedia/hand.png'

const ThirdFrame = () => {
  return (
    <div id='social-img-wrapper'  className="bg-black h-[1200px] w-full flex justify-end">
  <img
  id='social-bottom-img'
    src={hand}
    className="h-[1600px] relative bottom-80  align-top"
    alt="Hand"
  />
</div>
  )
}

export default ThirdFrame

import React from 'react'
import '../../../App.css'
import infographic from '../../../assets/PMarketing/infographic.png'
import lineone from '../../../assets/PMarketing/lineOne.png'

const ThirdFrame = () => {
  return (
    <div className='thirdframe-wrapper'>
 <h1 className='thirdframe-heading'>Performance  marketing <br/>
 steps</h1>

 <div className="infographics-wrapper">
  <img src={infographic} className='infographic-img' alt="" />
 </div>
 <div className="lineone-wrapper">
     <img src={lineone} className="lineone" alt="" />
   </div>
    </div>
  )
}

export default ThirdFrame

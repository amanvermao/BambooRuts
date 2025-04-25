import React from 'react'
import '../../../App.css'
import imgone from '../../../assets/PMarketing/imgOne.png'
import imgtwo from '../../../assets/PMarketing/imgThird.png'
import imgthree from '../../../assets/PMarketing/imgFourth.png'

import bgline from '../../../assets/PMarketing/lineone.png'
import bglinetwo from '../../../assets/PMarketing/lineOne.png'

import imgfour from '../../../assets/PMarketing/imgSix.png'
import imgfive from '../../../assets/PMarketing/imgeight.png'
import imgsix from '../../../assets/PMarketing/imgFifth.png'
import imgseven from '../../../assets/PMarketing/imgseven.png'


const FourthFrame = () => {
  return (
    <div className=" fourth-frame-wrapper">
<div className="frame-text-wrapper">
  <h1>CASE  STUDY 1</h1>
 <div className="text-wrapper text-one">
<h2>Goal:</h2>
 <span>The objective was to drive sales for a sustainable wellness brand specializing in personal care products. The brand sought to increase revenue, improve return on ad spend (ROAS), and establish a loyal customer base</span>
 </div>
 <div className=" text-wrapper text-two">
 <h2>Strategy:</h2>

 <span>As a 360° marketing agency, we implemented a multi-channel approach, leveraging:
Facebook & Instagram Conversion Campaigns – Targeted audience segmentation and A/B testing.
Google Ads & YouTube Retargeting – To capture high-intent buyers.
Influencer Marketing – Partnering with eco-conscious creators.
Email & WhatsApp Automation – Personalized remarketing sequences to boost repeat purchases.
SEO & Content Marketing – To enhance organic brand visibility and trust.

</span>
 </div>
 <div className=" text-wrapper text-three">
 <h2>Results:</h2>
 <span>Total Ad Spend: ₹3 Lakhs
Total Orders: 746
Average Order Value (AOV): ₹1,068
Return on Ad Spend (ROAS): 4.0
Total Sales Generated: ₹1,208,481 in just 
one month</span>
 </div>
 <div className="frame-images-wrapper">
<div className="img-werapper">
<img src={imgone} className='frmae-img-one' alt="" />
<img src={imgtwo} className='frmae-img-two' alt="" />
</div>
<img src={imgthree} className='frmae-img-three' alt="" />
</div>

</div>
<div className="frame-bg-line-wrapper">
<img src={bgline}  className="frame-bg-line" alt="" />
</div>

{/* second case study */}

<div className="frame-text-wrapper">
  <h1>CASE  STUDY 2</h1>
 <div className="text-wrapper text-one">
<h2>Goal:</h2>
 <span>The objective was to drive sales for a sustainable wellness brand specializing in personal care products. The brand sought to increase revenue, improve return on ad spend (ROAS), and establish a loyal customer base</span>
 </div>
 <div className=" text-wrapper text-two">
 <h2>Strategy:</h2>

 <span>As a 360° marketing agency, we implemented a multi-channel approach, leveraging:
Facebook & Instagram Conversion Campaigns – Targeted audience segmentation and A/B testing.
Google Ads & YouTube Retargeting – To capture high-intent buyers.
Influencer Marketing – Partnering with eco-conscious creators.
Email & WhatsApp Automation – Personalized remarketing sequences to boost repeat purchases.
SEO & Content Marketing – To enhance organic brand visibility and trust.

</span>
 </div>
 
 <div className=" text-wrapper w-[300px] text-three">
 <h2>Results:</h2>
 <span>Total Ad Spend: ₹3 Lakhs
Total Orders: 746
Average Order Value (AOV): ₹1,068
Return on Ad Spend (ROAS): 4.0
Total Sales Generated: ₹1,208,481 in just 
one month</span>
 </div>
 <div className="frame-images-wrapper-2">
<img src={imgfour} className='frameimgfour' alt="" />
<img src={imgfive} className='frameimgfive' alt="" />
</div>

</div>

<div className="bottom-graphs">
  

  <div className="bottom-img pb-[400px]">
    <img src={imgsix} alt="" />
    <img src={imgseven} alt="" />
  </div>
  <div className="bg-line-two">
    <img className='bg-line-two' src={bglinetwo} alt="" />
  </div>
</div>


</div>
  )
}

export default FourthFrame

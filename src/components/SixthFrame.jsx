import React, { useState } from 'react';
import imgOne from '../assets/SixthFrameImages/imgOne.png';
import imgTwo from '../assets/SixthFrameImages/imgTwo.png';
import imgThree from '../assets/SixthFrameImages/imgThree.png';
import imgFour from '../assets/SixthFrameImages/imgFour.png';
import imgFive from '../assets/SixthFrameImages/imgFive.png';
import imgSix from '../assets/SixthFrameImages/imgSix.png';
import imgSeven from '../assets/SixthFrameImages/imgSeven.png';
import imgEight from '../assets/SixthFrameImages/imgEight.png';
import imgNine from '../assets/SixthFrameImages/imgNine.png';

const products = [
  { img: imgOne, alt: "Amla Candy" },
  { img: imgFour, alt: "Filtered Coffee" },
  { img: imgEight, alt: "Zumi" },
  { img: imgTwo, alt: "Rajma Chawal" },
  { img: imgFive, alt: "shipmozo" },
  { img: imgNine, alt: "Dental" },
  { img: imgThree, alt: "Potato Chips" },
  { img: imgSix, alt: "Snack Truth" },
  { img: imgSeven, alt: "famveg" },
];

const SixthFrame = () => {
  const [showMore, setShowMore] = useState(false);

  const hiddenIndexes = [2, 5, 8]; // Indices of Zumi, Dental, famveg

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="text-white py-24 text-center px-4">
        <h1 className="text-[40px] md:text-6xl text-center font-semibold mb-6">
          A Visual Symphony of Creativity
        </h1>
        <p id='sixth-frame-p' className="text-base w-[600px] md:text-lg font-medium max-w-3xl mx-auto">
          Step into our world of design, where imagination meets precision.
          This gallery showcases a collection of projects that blend art, innovation, and storytelling,
          each crafted to leave a lasting impression.
        </p>
      </section>

      <div className="relative min-h-screen px-4 py-10 overflow-hidden">
        {/* Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 max-w-7xl mx-auto space-y-4">
          {products.map((product, index) => {
            const isHidden = hiddenIndexes.includes(index);
            if (!showMore && isHidden) return null;

            return (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden shadow-xl hover:scale-[1.02] transition-transform"
              >
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-auto object-contain rounded-[50px]"
                />
              </div>
            );
          })}
        </div>

        {/* SEE MORE / SHOW LESS Button */}
        <div className="flex justify-center mt-10 relative z-20">
          <button
            onClick={toggleShowMore}
            className="text-white border-[3px] px-6 py-2 rounded-full font-semibold transition"
          >
            {showMore ? 'SHOW LESS' : 'SEE MORE'}
          </button>
        </div>

        {/* Glowing green fade */}
        <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-[100%] h-60 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(61,216,0,0.4)_0%,_rgba(0,0,0,0)_100%)] blur-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default SixthFrame;

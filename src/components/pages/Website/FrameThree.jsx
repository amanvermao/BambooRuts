import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const images = [
  "/assets/sliderOne.png",
  "/assets/slidertwo.jpg",
  "/assets/sliderthree.jpg",
  "/assets/sliderfour.png",
  "/assets/sliderfive.jpg",
  "/assets/slidersix.jpg",
];

const FrameThree = () => {
  const duplicatedImages = [...images, ...images]; // for seamless loop

  return (
    <div className="overflow-hidden">
    <div className="relative w-full pt-[400px] pb-24  -rotate-[5deg] bg-white py-10">
      {/* Top Row - slides to left */}
      <motion.div
        className="flex gap-10 w-max px-10 mb-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`top-${index}`}
            className="w-[600px] h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center"
          >
            <img
              src={src}
              alt={`slide-top-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Bottom Row - slides to right */}
      <motion.div
        className="flex gap-10 w-max px-10"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`bottom-${index}`}
            className="w-[600px] h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center"
          >
            <img
              src={src}
              alt={`slide-bottom-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default FrameThree;

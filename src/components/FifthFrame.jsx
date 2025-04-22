import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import imgOne from '../assets/FifthFrameImage/imgOne.png';
import '../App.css';

const timeline = [
  {
    title: "Foundation of Creativity",
    desc: "Started as a curious mind, diving into the world of design. Experimented with various styles and techniques to build a solid foundation.",
    duration: "2020 - 2024",
  },
  {
    title: "Growth and Innovation",
    desc: "Refined my craft by embracing new technologies and approaches. Worked on impactful projects that pushed the boundaries of traditional design.",
    duration: "2020 - 2024",
  },
  {
    title: "Mastering the Art",
    desc: "Evolved into a professional designer, delivering exceptional results for clients worldwide. Focused on creating immersive visuals and storytelling.",
    duration: "2020 - 2024",
  },
];

const FifthFrame = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.7 + 0.6, type: "spring", stiffness: 100 },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.7 + 1, duration: 0.6 },
    }),
  };

  return (
    <>
      <div className="min-h-screen text-white flex items-center justify-center">
        <div>
          <div className="pt[60px] pb-[60px] text-3xl gap-[10px] md:text-5xl font-semibold mb-6">
            <h1 className="pb-[5px]">Every masterpiece</h1>
            <br className="hidden md:block" />
            <h1>begins with a single step</h1>
          </div>
          <div className="mt-8 pb-[100px]">
            <img
              src={imgOne}
              alt="VR Man"
              className="rounded-[30px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          ref={ref}
          className="min-h-screen w-[82%] text-white flex flex-col lg:flex-row items-start justify-center"
        >
          {/* Left Side Text */}
          <div className="lg:w-1/2">
            <p className="text-lg text-white max-w-md">
            Every masterpiece begins with a single step.
              From my early days of exploring creativity to mastering the art of design, this timeline reflects the evolution of my passion, skills, and vision.
            </p>
          </div>

          {/* Right Side Timeline */}
          <div className="relative lg:w-1/2">
            {/* Vertical Line Wrapper with limited height */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-[560px] w-[2px] overflow-hidden">
              <motion.div
                className="w-full"
                style={{
                  backgroundColor: "#3dd800"
                }}
                initial="hidden"
                animate={controls}
                variants={lineVariants}
              />
            </div>

            <div className="flex flex-col gap-24 relative">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <motion.div
                    className="w-4 h-4 rounded-full absolute"
                    style={{       
                      left: "49%",
                      transform: "translate(-50%, -50%)",
                      top: "0",
                      backgroundColor: "#3dd800"
                    }}
                    custom={index}
                    initial="hidden"
                    animate={controls}
                    variants={dotVariants}
                  />

                  {/* Content */}
                  <motion.div
                    className="pl-10"
                    style={{
                      marginLeft: "calc(45% + 1.5rem)",
                    }}
                    custom={index}
                    initial="hidden"
                    animate={controls}
                    variants={contentVariants}
                  >
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 mb-2">{item.desc}</p>
                    <span style={{backgroundColor:"#3dd800"}} className="text-black px-4 py-1 rounded-full text-sm font-semibold inline-block">
                      {item.duration}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthFrame;

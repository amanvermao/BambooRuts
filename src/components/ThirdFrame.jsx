import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  { name: "Motion Graphic", top: "83%", left: "15%", rotate: "-25deg" },
  { name: "Storyboard", top: "73%", left: "37%", rotate: "-3deg" },
  { name: "Visual Effect", top: "89%", left: "33%", rotate: "8deg" },
  { name: "UI / UX", top: "72%", left: "55%", rotate: "5deg" },
  { name: "Web Design", top: "59%", left: "60%", rotate: "5deg" },
  { name: "Graphic Design", top: "88%", left: "51%", rotate: "10deg" },
  { name: "Branding", top: "75%", left: "67%", rotate: "0deg" },
  { name: "Digital Manipulation", top: "86%", left: "74%", rotate: "-9deg" },
  { name: "Photography & Videography", top: "53%", left: "65%", rotate: "22deg" },
];

const ThirdFrame = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        top: services[i].top,
        left: services[i].left,
        rotate: services[i].rotate,
        opacity: 1,
        transition: {
          delay: i * 0.1,
          duration: 1,
          ease: "easeOut", // No bounce effect, smooth transition
        },
      }));
    }
  }, [inView, controls]);

  return (
    <>
      <div className="pt-[60px] max-w-7xl mx-auto">
        <h1 className="text-left text-4xl md:text-6xl mb-6 leading-relaxed">
          We transform ideas into compelling <br className="hidden md:block" />
          visuals that leave a lasting impact.
        </h1>
      </div>

      <section
        ref={ref}
        className="relative bg-[#3dd800] rounded-[40px] p-8 max-w-7xl mx-auto h-[600px] mt-20 shadow-2xl overflow-visible"
      >
        {/* Text */}
        <div className="absolute top-10 left-10 max-w-lg z-10">
          <h2 className="text-white text-lg md:text-xl font-semibold">
            We transform ideas into compelling visuals that leave a
            lasting impact. From bold graphic designs to intricate 3D
            modeling, our work bridges creativity and functionality.
          </h2>
        </div>

        {/* Animated Service Pills */}
        <div className="relative w-full h-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{
                top: "-100px", // Start above the screen, falling down
                rotate: "0deg",
                opacity: 0,
                position: "absolute",
              }}
              animate={controls}
              className="absolute bg-white text-[#00aa00] px-7 py-5 font-bold rounded-full whitespace-nowrap shadow-lg text-xl md:text-3xl"
            >
              {service.name}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ThirdFrame;

import React from "react";
import { Link } from "react-router-dom";
import imgOne from "../assets/FourthFrameImgaes/imgOne.png"; // Left Image
import imgTwo from "../assets/FourthFrameImgaes/imgTwo.png"; // Right Image
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const cards = [
  {
    id: 1,
    title: "WEBSITE",
    bgColor: "#e4e4e4",
    textColor: "text-black",
    link: "/website",
  },
  {
    id: 2,
    title: "PHOTO",
    tag2: "INTERMEDIATE",
    bgColor: "#e4e4e4",
    textColor: "text-black",
    link: "/photoshoot",
  },
  {
    id: 3,
    title: "CONTENT",
    bgColor: "#e4e4e4",
    textColor: "text-black",
    link: "/contentmarketing",
  },
  {
    id: 4,
    title: "PERFORMANCE",
    bgColor: "#e4e4e4",
    textColor: "text-black",
    link: "/performancemarketing",
  },
  {
    id: 6,
    title: "SOCIAL",
    bgColor: "#3dd800",
    textColor: "text-white",
    link: "/socialmedia",
  },
];

const FourthFrame = () => {
  return (
    <>
      <div className="pt-[60px] max-w-7xl mx-auto">
        <h1 className="text-right md:text-8xl font-bold leading-loose">
          Our most impactful and
          <br className="hidden md:block" />
          innovative works
        </h1>
      </div>

      <div className="pt-[120px] pb-[60px] w-[100%] flex items-center justify-center">
        <div className="relative w-[90%] flex items-center justify-center flex-col space-y-[-100px] px-4 md:px-10">
          {cards.map((card, i) =>
            card.title === "SOCIAL" ? (
              <Link to={card.link} key={card.id} className="w-full">
                <div
                  className={`relative z-[${i}] ${card.textColor} w-full max-w-7xl rounded-[30px] px-6 py-10 space-y-10`}
                  style={{
                    backgroundColor: card.bgColor,
                    boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h2 className="text-[200px] text-center font-[500] leading-[170px] tracking-[0.1em] overflow-hidden group-hover:whitespace-normal whitespace-nowrap transition-all duration-300">
                    {card.title}
                  </h2>

                  {/* First Row */}
                  <div className="flex flex-col md:flex-row gap-[60px] ">
                    <img
                      src={imgOne}
                      alt="Left Visual"
                      className="w-full md:w-1/2 rounded-2xl object-cover"
                    />
                    <div className="md:w-1/2">
                      <h2 className="text-6xl w-[250px] font-bold mb-2 tracking-[0.1em] leading-normal ">
                        Innovative Branding Solutions
                      </h2>
                      <p className="w-[400px] text-sm">
                        Transforming brand identities through dynamic design and
                        bold concepts. This project highlights cutting-edge 3D
                        visuals and modern aesthetics that redefine how brands
                        communicate
                      </p>
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold mb-2">Explore More</h2>
                      <p className="w-[400px] text-sm mb-3">
                        Explore a variety of projects across branding, 3D design,
                        and interactive experiences, each crafted with precision
                        and passion.
                      </p>
                      <button className="text-white px-6 py-3 text-[21px] flex items-center gap-2">
                        See More
                        <ArrowForwardIcon style={{ fontSize: "26px" }} />
                      </button>
                    </div>
                    <img
                      src={imgTwo}
                      alt="Right Visual"
                      className="w-full md:w-1/2 rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={card.link} key={card.id} className="w-full">
                <div
                  className={`group relative z-[${i}] ${card.textColor} w-full max-w-7xl rounded-[30px] px-6 py-10 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-16`}
                  style={{
                    backgroundColor: card.bgColor,
                    boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h2
                    className={`${
                      card.title === "PERFORMANCE"
                        ? "text-[160px] leading-[130px] font-[500]"
                        : "text-[200px] leading-[170px]"
                    } text-center font-[500] overflow-hidden group-hover:whitespace-normal whitespace-nowrap transition-all duration-300`}
                  >
                    {card.title}
                  </h2>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default FourthFrame;

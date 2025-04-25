import React from "react";
import { Link } from "react-router-dom";
import imgOne from "../../assets/FourthFrameImgaes/imgOne.png"; // Left Image
import imgTwo from "../../assets/FourthFrameImgaes/imgTwo.png"; // Right Image
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MobileCards = () => {
  const cards = [
    {
      id: 1,
      title: "WEBSITE",
      bgColor: "#e4e4e4",
      textColor: "text-black",
      link: "/website",
      hasContent: false,
    },
    {
      id: 2,
      title: "PHOTO",
      tag2: "INTERMEDIATE",
      bgColor: "#e4e4e4",
      textColor: "text-black",
      link: "/photoshoot",
      hasContent: false,
    },
    {
      id: 3,
      title: "CONTENT",
      bgColor: "#e4e4e4",
      textColor: "text-black",
      link: "/contentmarketing",
      hasContent: false,
    },
    {
      id: 4,
      title: "PERFORMANCE",
      bgColor: "#e4e4e4",
      textColor: "text-black",
      link: "/performancemarketing",
      hasContent: false,
    },
    {
      id: 6,
      title: "SOCIAL",
      bgColor: "#3dd800",
      textColor: "text-white",
      link: "/socialmedia",
      hasContent: true, // Only the 'SOCIAL' card contains content
    },
  ];

  return (
    <div className="pt-[50px] w-[100%] flex items-center justify-center">
      <div className="relative w-[90%] flex items-center justify-center flex-col space-y-8 px-4 md:px-10">
        {cards.map((card, i) => (
          <Link to={card.link} key={card.id} className="w-full">
            <div
              className={`relative z-[${i}] ${card.textColor} w-full max-w-7xl rounded-[30px] px-6 py-8 space-y-8 transition-all duration-300 hover:shadow-xl hover:scale-105`}
              style={{
                backgroundColor: card.bgColor,
              }}
            >
              <h2 className="text-[30px] md:text-[20px] text-center font-bold leading-[30px] md:leading-[20px] tracking-[0.1em] overflow-hidden group-hover:whitespace-normal whitespace-nowrap transition-all duration-300">
                {card.title}
              </h2>

              {/* Conditionally rendering content */}
              {card.hasContent && (
                <>
                  {/* First Row */}
                  <div className="flex flex-col gap-4 md:gap-6">
                    <img
                      src={imgOne}
                      alt="Left Visual"
                      className="w-full rounded-2xl object-cover shadow-md transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold leading-tight text-black">
                        Innovative Branding Solutions
                      </h2>
                      <p className="text-sm text-gray-600">
                        Transforming brand identities through dynamic design and
                        bold concepts. This project highlights cutting-edge 3D
                        visuals and modern aesthetics that redefine how brands
                        communicate.
                      </p>
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="flex flex-col gap-4 items-center">
                    <div className="space-y-4 text-center">
                      <h2 className="text-2xl font-semibold text-black mb-3">
                        Explore More
                      </h2>
                      <p className="w-[200px] text-sm text-gray-600 mb-3">
                        Explore a variety of projects across branding, 3D design,
                        and interactive experiences, each crafted with precision
                        and passion.
                      </p>
                      <button className="bg-[#4c5f44] text-white ml-5 px-6 py-3 text-[18px] flex items-center justify-center gap-2 rounded-full shadow-md hover:bg-[#32c700] transition-all duration-300">
                        See More
                        <ArrowForwardIcon style={{ fontSize: "22px" }} />
                      </button>
                    </div>
                    <img
                      src={imgTwo}
                      alt="Right Visual"
                      className="w-full rounded-2xl object-cover shadow-md transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileCards;

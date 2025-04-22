import React from 'react';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';
import logo from '../assets/logo.png';

const FinalFrame = () => {
  return (
    <>
    <div className="text-white px-6 py-16 w-full min-h-screen flex flex-col justify-between">
      {/* Top Heading */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[80px] md:text-[120px] tracking-[0.1em] font-[500] leading-[1.3]">
          WE LOVE TO<br />HEAR FROM<br />YOU!
        </h1>
      </div>

      {/* Middle Section with 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 items-start px-20">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start items-center">
          <img
            src={logo}
            alt="Brand Logo"
            className="w-100 h-100 object-contain"
          />
        </div>

        {/* Stay Connected Section */}
        <div className="text-center md:text-left">
          <h3 className="text-5xl font-semibold pl-[40px] pb-[100px] leading-tight">
            Let’s Stay<br className="md:hidden" /> Connected
          </h3>

          <p className="text-sm pl-[40px] text-white max-w-xs mt-3 mx-auto md:mx-0">
            Consectetur nostra dapibus eu eleifend ipsum iaculis luctus dis ac turpis sociosqu risus integer pellentesque
          </p>

          <form className="relative left-9 mt-[40px] flex items-center border border-gray-300 rounded-full overflow-hidden max-w-xs mx-auto md:mx-0">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email..."
              className="flex-grow py-2 px-4 text-sm text-black placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              style={{ backgroundColor: "#1e1e1e", borderRadius: "50%" }}
              className="text-white text-sm px-6 py-2 transition-colors duration-200"
            >
              Send
            </button>
          </form>
        </div>

        {/* Empty div for spacing if needed */}
        <div></div>
      </div>

<div className='flex flex-col gap-15'>
      {/* Social Icons Section - Moved to Bottom */}
      <div className=" relative bottom-20 flex justify-center md:justify-end items-center space-x-6 mt-16 px-4">
        <Instagram className="w-5 h-5 cursor-pointer" />
        <Twitter className="w-5 h-5 cursor-pointer" />
        <Facebook className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Footer Text */}
      <div className="text-xs text-white text-center md:text-right mt-4 px-4">
        © 2024 Your Brand. All rights reserved.
      </div>
    </div>
    </div>
    </>
  );
};

export default FinalFrame;

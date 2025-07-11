import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src="/images/hero_blob.svg"
        alt=""
        className="absolute hidden sm:flex right-0 md:h-[700px] lg:h-[630px] md:w-[300px] lg:w-[800px]"
      />
      <div className="hidden w-full absolute top-[50px] mx-auto md:px-2 lg:px-20 lg:flex justify-between items-end lg:items-center">
        <div className="space-y-6">
          <h1 className="text-[#5FD788] text-7xl font-semibold">
            Pear kiwi <br /> & Mint
          </h1>
          <p className="max-w-sm text-[#9CA3AF] text-[13px]">
            They say that home is where the heart is. Perhaps that’s why a
            feeling of loss is so apparent when you are far from the ones you
            love.
          </p>
        </div>
        <img
          src="/images/Hero.svg"
          alt=""
          className="md:w-1/2 lg:w-[660px] md:max-h-[500px] lg:max-h-[580px]"
        />
      </div>

      {/* Tablet */}
      <div className="absolute h-[500px] hidden md:flex lg:hidden justify-between items-end">
        <div className="space-y-6 ml-20">
          <h1 className="text-[#5FD788] text-7xl font-semibold">
            Pear kiwi <br /> & Mint
          </h1>
          <p className="max-w-md text-[#9CA3AF] text-[13px]">
            They say that home is where the heart is. Perhaps that’s why a
            feeling of loss is so apparent when you are far from the ones you
            love.
          </p>
        </div>
        <img src="/images/Hero.svg" alt="" className="w-[44%]" />
      </div>

      {/* Small Screens */}
      <div className="flex flex-col sm:hidden w-full px-18 my-5 text-center">
        <img src="/images/mobile_hero.svg" alt="" className="" />
        <div className="space-y-6">
          <h1 className="text-[#5FD788] text-6xl font-semibold">
            Pear kiwi <br /> & Mint
          </h1>
          <p className=" text-[#9CA3AF] text-[16px] font-medium">
            They say that home is where the heart is. Perhaps that’s why a
            feeling of loss is so apparent when you are far from the ones you
            love.
          </p>
        </div>
      </div>
    </div>
    // <div className="flex justify-between items-center h-screen">
    //   <div className="space-y-6 ml-20">
    //     <h1 className="text-[#5FD788] text-7xl font-semibold">
    //       Pear kiwi <br /> & Mint
    //     </h1>
    //     <p className="max-w-sm text-[#9CA3AF] text-[13px]">
    //       They say that home is where the heart is. Perhaps that’s why a feeling
    //       of loss is so apparent when you are far from the ones you love.
    //     </p>
    //   </div>
    //   <img src="/images/Photo.svg" alt="" className="" />
    // </div>
  );
};

export default Hero;

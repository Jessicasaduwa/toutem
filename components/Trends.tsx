import React from "react";
import Card from "./ui/Card";

const Trends = () => {
  return (
    <div className="relative min-h-[1050px] md:min-h-[450px] mt-20 md:mb-10 lg:mb-2">
      <img
        src="/images/trends.svg"
        alt=""
        className="absolute min-w-xs max-h-[570px] md:max-h-[450px] left-24 md:-left-[58px]"
      />
      <div className="hidden md:flex md:pr-24 lg:pr-16">
        <div className="relative flex flex-1 md:item-start lg:items-center">
          <div className="absolute z-30 md:px-32 lg:px-20 space-y-3">
            <h1 className="text-4xl text-[#5FD788] font-semibold">Trends</h1>
            <button className="quicksand-font uppercase bg-[#5FD788] hover:bg-[#48895e] text-white text-[11px] transition-colors duration-300 cursor-pointer font-semibold min-w-[220px] py-[6px] rounded-md">
              shop all
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-11">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-3">
            <Card
              imageSrc="/images/Image3.svg"
              title="Basket INNER BEAUTY"
              description="Original product comes in three styles of color, usb charger"
              price={64}
              bgColor="bg-[#f4f2f0]/70"
            />
            <Card
              imageSrc="/images/Image4.svg"
              title="Uplift Handcrafted Soap Bar"
              description="Beautiful decorative object, perfumes the space with your favorite fragrance."
              price={7}
              bgColor="bg-white/70"
            />
          </div>
          <div className="w-full md:hidden lg:flex justify-center gap-1">
            <div className="w-[6px] h-[6px] bg-[#5FD788] rounded-full"></div>
            <div className="w-[6px] h-[6px] bg-[#9CA3AF] rounded-full"></div>
            <div className="w-[6px] h-[6px] bg-[#9CA3AF] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Tab & Mobile Version */}
      <div className="absolute z-30 w-full flex md:hidden flex-col items-center justify-center pt-20">
        <div className="space-y-3 py-10">
          <h1 className="text-4xl text-[#5FD788] font-semibold text-center">
            Trends
          </h1>
          <button className="quicksand-font uppercase bg-[#5FD788] hover:bg-[#48895e] transition-colors duration-300 cursor-pointer text-white text-[11px] font-semibold min-w-[220px] py-[6px] rounded-md">
            shop all
          </button>
        </div>
        <div className="mt-24">
          <div className="grid gap-16">
            <Card
              imageSrc="/images/Image3.svg"
              title="Basket INNER BEAUTY"
              description="Original product comes in three styles of color, usb charger"
              price={64}
              bgColor="bg-[#f4f2f0]/70"
            />
            <Card
              imageSrc="/images/Image4.svg"
              title="Uplift Handcrafted Soap Bar"
              description="Beautiful decorative object, perfumes the space with your favorite fragrance."
              price={7}
              bgColor="bg-white/70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;

import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Card from "./ui/Card";

const Bestsellers = () => {
  const currency = "$";
  return (
    <div className="relative min-h-[1130px] sm:min-h-[1000px] md:min-h-[450px] mt-20 md:mb-10 lg:mb-2">
      <img
        src="/images/bestseller_blob.svg"
        alt=""
        className="absolute min-w-xs left-14 sm:-left-18 max-h-[350px] sm:max-h-[600px] md:max-h-[450px] "
      />

      <div className="hidden md:flex md:pr-24 lg:pr-16">
        <div className="relative flex flex-1 md:item-start lg:items-center">
          <div className="absolute z-30 md:px-32 lg:px-20 space-y-3">
            <h1 className="text-4xl text-[#5FD788] font-semibold">
              Bestsellers
            </h1>
            <button className="quicksand-font uppercase bg-[#5FD788] hover:bg-[#48895e] text-white text-[11px] transition-colors duration-300 cursor-pointer font-semibold min-w-[220px] py-[6px] rounded-md">
              shop all
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-11">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-3">
            <Card
              imageSrc="/images/Image1.svg"
              title="Aroma Diffuser"
              description="Original product comes in three styles of color, usb charger"
              price={15}
              bgColor="bg-[#f4f2f0]/70"
            />
            <Card
              imageSrc="/images/Image2.svg"
              title="Lux Aroma Diffuser"
              description="Beautiful decorative object, perfumes the space with your favorite fragrance."
              price={20}
              bgColor="bg-[#f4f2f0]/70"
            />
          </div>
          <div className="w-full md:hidden flex justify-center gap-1">
            <div className="w-[6px] h-[6px] bg-[#5FD788] rounded-full"></div>
            <div className="w-[6px] h-[6px] bg-[#9CA3AF] rounded-full"></div>
            <div className="w-[6px] h-[6px] bg-[#9CA3AF] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Tab & Mobile Version */}
      <div className="absolute z-30 w-full flex md:hidden flex-col items-center justify-center pt-24">
        <div className="space-y-3 py-14 sm:py-10">
          <h1 className="text-4xl text-[#5FD788] font-semibold text-center">
            Bestsellers
          </h1>
          <button className="quicksand-font uppercase bg-[#5FD788] hover:bg-[#48895e] transition-colors duration-300 cursor-pointer text-white text-[11px] font-semibold min-w-[260px] sm:min-w-[220px] py-[9px] sm:py-[6px] rounded-md">
            shop all
          </button>
        </div>
        <div className="pt-22 sm:pt-0">
          <div className="grid gap-16">
            <Card
              imageSrc="/images/Image1.svg"
              title="Aroma Diffuser"
              description="Original product comes in three styles of color, usb charger"
              price={15}
              bgColor="bg-[#f4f2f0]/70"
            />
            <Card
              imageSrc="/images/Image2.svg"
              title="Lux Aroma Diffuser"
              description="Beautiful decorative object, perfumes the space with your favorite fragrance."
              price={20}
              bgColor="bg-[#f4f2f0]/70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;

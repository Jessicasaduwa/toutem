import React from "react";

const Soaps = () => {
  return (
    <div>
      <div className="hidden sm:flex h-[430px] md:h-[400px] md:max-h-[400px] overflow-hidden">
        <div className="flex-[0.55] relative">
          <img
            src="/images/green_background.svg"
            alt="Green Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-start pl-7 md:pl-16 space-y-4">
            <h1 className="text-white text-[32px] leading-10 md:text-4xl font-medium max-w-xs md:max-w-md">
              Our luxury soaps are 100% natural providing nourishing benefits
              for your skin.
            </h1>
            <button className="quicksand-font uppercase bg-white text-black hover:bg-black hover:text-white text-[11px] transition-colors duration-300 cursor-pointer font-semibold min-w-[170px] md:min-w-[220px] py-[6px] rounded-md">
              shop all
            </button>
          </div>
        </div>

        <div className="flex-[0.45]">
          <img
            src="/images/soaps.svg"
            alt="Soaps"
            className="w-full h-[99%] md:h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden max-h-[400px] relative mt-10">
        <img
          src="/images/soaps.svg"
          alt="Soaps"
          className="w-full h-[99%] md:h-full object-cover"
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-white text-[28px] leading-10 font-medium max-w-xs md:max-w-md">
            Our luxury soaps are 100% natural providing nourishing benefits for
            your skin.
          </h1>
          <button className="quicksand-font uppercase bg-white text-black hover:bg-black hover:text-white text-[11px] transition-colors duration-300 font-semibold min-w-[220px] py-[6px] rounded-md">
            shop all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Soaps;

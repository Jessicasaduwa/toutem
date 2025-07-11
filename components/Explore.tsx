import React from "react";

const Explore = () => {
  return (
    <div>
      <div className="hidden md:flex items-center justify-between pr-20">
        <img src="/images/Explore.svg" alt="" className="w-2/3" />
        <div className="flex flex-col items-end text-right space-y-6">
          <h1 className="text-4xl text-[#5FD788] font-semibold">
            Improve your well-being with Aromatherapy
          </h1>
          <p className="text-[#9CA3AF] text-[13px]">
            Diffusing can be exactly what you need to add purpose and focus to
            your daily tasks. We've got tons of fun diffuser blends, with scents
            to suit every mood, day and situation.
          </p>
          <button className="quicksand-font uppercase bg-[#5FD788] hover:bg-[#48895e] transition-colors duration-300 cursor-pointer text-white text-[13px] font-semibold px-12 py-[10px] rounded-md">
            explore the collection
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex flex-col sm:hidden items-center justify-center pt-10">
        <img src="/images/mobile_explore.svg" alt="" className="py-10" />
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h1 className="max-w-sm text-xl text-[#5FD788] font-semibold">
            Improve your well-being with Aromatherapy
          </h1>
          <p className="text-[#9CA3AF] text-[11px] font-medium max-w-3xs">
            Diffusing can be exactly what you need to add purpose and focus to
            your daily tasks. We've got tons of fun diffuser blends, with scents
            to suit every mood, day and situation.
          </p>
          <button className="quicksand-font uppercase bg-[#5FD788] hover:bg-[#48895e] transition-colors duration-300 cursor-pointer text-white text-[13px] font-semibold px-12 py-[10px] rounded-md">
            explore the collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;

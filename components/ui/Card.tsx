import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  price,
  bgColor = "bg-white/70",
}) => {
  const currency = "$";

  return (
    <div className="relative flex justify-center items-end shadow-2xs rounded-tr-[20px] rounded-bl-[20px] leading-tight">
      <img src={imageSrc} alt={title} className="max-w-xs" />

      <div
        className={`absolute h-20 p-2 w-[316px] backdrop-blur-[6px] ${bgColor} rounded-tr-[20px] rounded-bl-[20px] flex justify-between items-center gap-`}
      >
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 font-bold">
            <h1 className="text-[#1F2937] text-[15px]">{title}</h1>
            <div className="h-[12px] w-7 rounded-[8px] text-[9px] flex items-center justify-center text-white bg-[#5FD788]">
              {currency}
              {price}
            </div>
          </div>
          <p className="text-[#6B7280] text-[11px] max-w-54 font-extralight">
            {description}
          </p>
        </div>

        <button>
          <img
            src="/images/add_to_cart.svg"
            alt="Add to cart"
            className="min-w-[40px] hidden md:flex"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;

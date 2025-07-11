import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, excerpt }) => {
  return (
    <div className="max-w-[380px] w-[280px] md:w-[370px] rounded-md shadow hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="object-center object-cover w-full h-[260px] md:h-[180px] min-h-[180px] rounded-t-md"
      />
      <div className="py-5 px-5">
        <h3 className="text-[#5FD788] font-semibold text-[16px] tracking-tight leading-5 mb-7 md:mb-2">
          {title}
        </h3>
        <span className="flex flex-1 h-[2px] bg-[#F3F4F6] mb-6"></span>
        <p className="text-[10px] md:text-xs text-[#4B5563] font-medium mb-12 md:mb-3">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

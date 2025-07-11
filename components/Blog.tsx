import React from "react";
import BlogCard from "@/components/ui/BlogCards";

const Blog = () => {
  const blogPosts = [
    {
      image: "/images/blog.svg",
      title: "How to create your own essential oil diffuser blends",
      excerpt:
        "As you begin creating your own diffuser blends, it’s important to keep a few ...",
    },
    {
      image: "/images/blog.svg",
      title: "How to create your own essential oil diffuser blends",
      excerpt:
        "As you begin creating your own diffuser blends, it’s important to keep a few ...",
    },
    {
      image: "/images/blog.svg",
      title: "How to create your own essential oil diffuser blends",
      excerpt:
        "As you begin creating your own diffuser blends, it’s important to keep a few ...",
    },
  ];

  return (
    <div className="px-28 pb-20">
      <h1 className="text-4xl text-[#5FD788] font-semibold text-center uppercase my-20 md:my-0 md:mb-10">
        Blog
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

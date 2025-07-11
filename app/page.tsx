import About from "@/components/About";
import Bestsellers from "@/components/Bestsellers";
import Blog from "@/components/Blog";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Soaps from "@/components/Soaps";
import Trends from "@/components/Trends";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Explore />
      <Bestsellers />
      <Soaps />
      <Trends />
      <Blog />
      <Footer />
    </div>
  );
};

export default page;

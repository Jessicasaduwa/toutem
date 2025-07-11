import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center md:items-start gap-14 md:gap-0 min-h-[250px] bg-[#F3F4F6] px-24 py-7 text-[13px] tracking-tight">
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" alt="logo" className="w-8 h-8" />
        <h1 className="font-semibold">Toutem</h1>
      </div>

      <div className="text-center pt-2">
        <div className="flex flex-col md:flex-row gap-10 text-center">
          <dl>
            <dt>Customer Support</dt>
            <dd>Shipping</dd>
            <dd>Free Return</dd>
            <dd>Track your Order</dd>
            <dd>Gift Cards</dd>
          </dl>

          <dl>
            <dt>About Us</dt>
            <dd>Our Values</dd>
            <dd>Sustainability</dd>
            <dd>Brand Ambassadors</dd>
            <dd>Fitness Professionals</dd>
          </dl>

          <dl>
            <dt>Customer Service</dt>
            <dd>Help</dd>
            <dd>Leader Support</dd>
            <dd>Pleasant Grove Product Center</dd>
            <dd>Recall—Important Safety Information</dd>
          </dl>
        </div>
        <div className="pt-10 text-[#9ca3af]">
          <p>
            copyright © 2022 Toutem <br /> all rights reserved.
          </p>
        </div>
      </div>

      <div className="w-8"></div>
    </footer>
  );
};

export default Footer;

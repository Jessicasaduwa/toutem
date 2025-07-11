"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const toggleSearch = () => setSearchActive(!searchActive);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const pathname = usePathname();

  const links = [
    { name: "home", href: "/" },
    { name: "about us", href: "/#" },
    { name: "shop", href: "/shop" },
    { name: "contact", href: "/contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white mx-auto">
      <div className="hidden sm:grid grid-cols-3 justify-between items-center font-medium px-20 py-6 text-[12px]">
        <div className="flex items-center gap-2 justify-self-start">
          <img src="/images/logo.svg" alt="logo" />
          <h1 className="">Toutem</h1>
        </div>

        <ul className="flex gap-6 justify-self-center">
          {links.map((link) => (
            <li
              key={link.href}
              className={`uppercase transition-transform duration-300 ease-in-out hover:lowercase cursor-pointer ${
                pathname === link.href && link.href !== "/" ? "lowercase" : ""
              }`}
            >
              {/* <Link href={link.href} className=""> */}
              {link.name}
              {/* </Link> */}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 justify-self-end relative">
          {!searchActive && (
            <div className="flex gap-3 transition-opacity duration-300">
              <img
                src="/images/shopping_bag.svg"
                alt=""
                className="size-[15px]"
              />
              <button onClick={toggleSearch}>
                <img
                  src="/images/search.svg"
                  alt=""
                  className="size-[15px] cursor-pointer"
                />
              </button>
            </div>
          )}

          {searchActive && (
            <div
              className={`absolute -right-2 flex items-center gap-2 bg-gray-100 rounded-full px-2 transition-all duration-300 w-0 overflow-hidden ${
                searchActive ? "w-52" : "w-0"
              }`}
            >
              <input
                type="text"
                placeholder=""
                className="w-full h-[18px] bg-transparent outline-none placeholder:text-xs"
              />
              <button onClick={toggleSearch}>
                <img
                  src="/images/search.svg"
                  alt=""
                  className="size-[12px] cursor-pointer"
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Screens */}
      <div className="flex sm:hidden justify-between items-center font-medium px-20 py-6 relative">
        <div className="flex items-center gap-4">
          <img src="/images/logo.svg" alt="logo" />
          <h1 className="text-[14px]">Toutem</h1>
        </div>

        <div>
          <button onClick={toggleMenu}>
            <IoMenuOutline className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Mobile SLide */}
      <div
        className={`fixed top-0 right-0 w-full z-50 h-96 bg-white py-6 px-20 space-y-9 shadow transition-transform duration-800 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <img src="/images/logo.svg" alt="logo" />
          <button onClick={toggleMenu}>
            <HiOutlineX className="w-10 h-10" />
          </button>
        </div>
        <ul className="space-y-6">
          {links.map((link) => (
            <li
              key={link.href}
              className={`uppercase transition-all duration-300 ease-in-out hover:lowercase cursor-pointer ${
                pathname === link.href && link.href !== "/" ? "lowercase" : ""
              }`}
            >
              {/* <Link href={link.href} className=""> */}
              {link.name}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
      {showMenu && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;

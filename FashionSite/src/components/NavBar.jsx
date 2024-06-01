import React, { useState } from "react";
import logo from "../../src/assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import profile from "../../src/assets/profile.png";

import { CiMenuBurger } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "./Features/ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {
  const [navHome, setNavHomme] = useState(false);
  const {cartState, dispatch} = useContext(CartContext)

  const handleNavHome = () => {
    setNavHomme(!navHome);
  };

  return (
    <div className=" w-full px-4 py-2 lg:px-[72px] lg:py-[15px] bg-[#E3E6F3] z-[99] sticky top-0 left-0 shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between  py-6 px-4 md:px-10">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-8 h-8 md:w-10 md:h-10" />
          {/* <h1 className="font-[itim] font-[600] text-[20px] md:text-[28px] text-nowrap">
            Sans Souci
          </h1> */}
        </div>
        <nav className="hidden md:flex items-center justify-center text-[18px] gap-8 text-center relative">
          <Link to={"/"}>
            <a
              href="#"
              className="transition-all ease-in-out duration-500 hover:text-[#088178] "
            >
              Home
            </a>
          </Link>

          <a
            href="#"
            className="transition-all ease-in-out duration-500 hover:text:[#088178] active:bg-white"
          >
            Shop
          </a>
          <a href="#">About</a>
          <a href="#">Reviews</a>
        </nav>

        <div className="flex  items-center justify-center gap-3">
          <div className="hidden md:flex items-center justify-center bg-[#E3E6F3] hover:border-2 hover:border-black rounded-md">
            <input
              type="text"
              className="border-none bg-transparent outline-none"
            />
            <CiSearch className="text-[28px] font-semibold" />
          </div>
          <Link to={"cart"}>
            <div className=" relative text-[24px]">
              <BsCart3 />
              <h1 className="absolute bottom-4 left-3 bg-[red] text-white px-1 rounded-xl text-[16px]">
                {cartState.totalQuantity}
              </h1>
            </div>
          </Link>
          <div className="flex items-center justify-center h-8 w-8 rounded-full">
            <img
              src={profile}
              alt=""
              className="h-full w-full object-cover object-top rounded-full"
            />
            {/* <MdOutlineKeyboardArrowDown /> */}
          </div>
          <div>
            <div className="md:hidden text-[24px]" onClick={handleNavHome}>
              <CiMenuBurger />
            </div>
            {navHome ? (
              <div
                className="h-[100vh] w-1/2 sm:w-1/5  md:w-1/4 bg-[#E3E6F3] flex flex-col top-0 right-0 items-start fixed transition-all duration-500 ease-in bg-bgColor gap-4 pl-3 "
                id="nav-home"
              >
                <div
                  onClick={handleNavHome}
                  className="text-[#13bbff] flex justify-end w-full p-4"
                  id="bx-x"
                >
                  <IoMdClose />
                </div>
                <a
                  href="#"
                  className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
                >
                  Home
                </a>
                <a href="#">Shop</a>
                <a
                  href="#"
                  className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
                >
                  About
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

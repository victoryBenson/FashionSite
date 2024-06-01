import React from "react";
import wlog from "../../src/assets/Wlogo.png";

export const Footer = () => {
  return (
    <div className=" w-full h-full text-black px-4 md:px-16 py-8 gap-2">
      <div>
        <div className="flex items-start justify-between w-full">
          <div className="text-[13px] md:text-[18px] space-y-4 hidden lg:inline-block">
            <div className="flex items-center gap-2">
              <img src={wlog} alt="" />
              <h1 className="font-bold">Sans Souci</h1>
            </div>
            <p>Discover joy in every purchase with Sans Souci</p>
          </div>

          <div className="text-[13px]  md:text-[18px] space-y-4">
            <h1 className="font-bold">COMPANY</h1>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Careers</p>
          </div>

          <div className="text-[13px]  md:text-[18px] space-y-4">
            <h1 className="font-bold">HELP</h1>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="text-[13px]  md:text-[18px] space-y-4">
            <h1 className="font-bold">RESOURCES</h1>
            <p>Free ebooks</p>
            <p>Development Tutorial</p>
            <p>How to -Blog</p>
            <p>Youtube playlist</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full border-[1px] border-black my-10"></div>
      <div className="flex items-center justify-center">
        <p className="text-[12px] md:text-[16px]">
          &copy; copyright 2024, All right Reserved by Sans Souci
        </p>
      </div>
    </div>
  );
};

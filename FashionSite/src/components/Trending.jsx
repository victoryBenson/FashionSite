import React from "react";
import SignImg from "../../src/assets/signinpic.png";

export const Trending = () => {
  return (
    <div className="bg-white py-6 px-1 md:py-10 md:px-16 w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between items-center flex-wrap">
      <div className="w-44 lg:w-48 text-center rounded-[4px] my-4 py-6 px-4 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] shadow-[20px_20px_24px_rgba(0,0,0,0.3)] border-2 border-[#cce7d0]">
        <img src={SignImg} alt="" className="w-full mb-2" />
        <h1 className="leading-4 rounded-[4px] font-bold  text-[#088178] bg-[#fddde4] text-[14px] px-2 pt-[9px] pb-[6px] inline-block">
          Free Shopping
        </h1>
      </div>
      <div className="w-44 lg:w-48 text-center rounded-[4px] my-4 py-6 px-4 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] shadow-[20px_20px_24px_rgba(0,0,0,0.3)] border-2 border-[#cce7d0]">
        <img src={SignImg} alt="" className="w-full mb-2" />
        <h1 className="leading-4 rounded-[4px] font-bold  text-[#088178] bg-[#cdebbc] text-[14px] px-2 pt-[9px] pb-[6px] inline-block">
          Free Shopping
        </h1>
      </div>
      <div className="w-44 lg:w-48 text-center rounded-[4px] my-4 py-6 px-4 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] shadow-[20px_20px_24px_rgba(0,0,0,0.3)] border-2 border-[#cce7d0]">
        <img src={SignImg} alt="" className="w-full mb-2" />
        <h1 className="leading-4 rounded-[4px] font-bold  text-[#088178] bg-[#d1e8f2] text-[14px] px-2 pt-[9px] pb-[6px] inline-block">
          Free Shopping
        </h1>
      </div>
      <div className="w-44 lg:w-48  text-center rounded-[4px] my-4 py-6 px-4 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] shadow-[20px_20px_24px_rgba(0,0,0,0.3)] border-2 border-[#cce7d0]">
        <img src={SignImg} alt="" className="w-full mb-2" />
        <h1 className="leading-4 rounded-[4px] font-bold  text-[#088178] bg-[#cdd4f8] text-[14px] px-2 pt-[9px] pb-[6px] inline-block">
          Free Shopping
        </h1>
      </div>
      <div className="w-44 lg:w-48 text-center rounded-[4px] my-4 py-6 px-4 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] shadow-[20px_20px_24px_rgba(0,0,0,0.3)] border-2 border-[#cce7d0]">
        <img src={SignImg} alt="" className="w-full mb-2" />
        <h1 className="leading-4 rounded-[4px] font-bold  text-[#088178] bg-[#fff2e5] text-[14px] px-2 pt-[9px] pb-[6px] inline-block">
          Free Shopping
        </h1>
      </div>
      <div className="w-44 lg:hidden text-center rounded-[4px] my-4 py-6 px-4 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] shadow-[20px_20px_24px_rgba(0,0,0,0.3)] border-2 border-[#cce7d0]">
        <img src={SignImg} alt="" className="w-full mb-2" />
        <h1 className="leading-4 rounded-[4px] font-bold  text-[#088178] bg-[#fff2e5] text-[14px] px-2 pt-[9px] pb-[6px] inline-block">
          Free Shopping
        </h1>
      </div>
    </div>
  );
};

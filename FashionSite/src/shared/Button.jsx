import React from "react";
import { FaShopify } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

export const Button = () => {
  return (
    <div className="">
      <button className="font-bold flex items-center justify-center font-poppins text-xl bg-brown3 hover:bg-opacity-80 transition-all text-ivor p-3 rounded w-60 ">
        <Typewriter
          options={{
            strings: ["Discover", "Explore!", "Shop!"],
            autoStart: true,
            loop: true,
          }}
        />
      </button>
    </div>
  );
};

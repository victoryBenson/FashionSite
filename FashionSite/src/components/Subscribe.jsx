import React from "react";

export const Subscribe = () => {
  return (
    <div className="w-full h-full py-6 md:py-10 px-4 lg:px-24 bg-[#041e42] text-white">
      <div className="inline-block md:flex items-center justify-center  md:justify-between space-y-4">
        <div className="text-center md:text-start">
          <h1 className="text-[26px] font-[600]">
            Subscribe to our newsletter
          </h1>
          <p>
            Get E-mail updates about our shops and{" "}
            <span className="text-[rgba(243,181,25)]">offer specials</span>
          </p>
        </div>

        <div className=" md:flex items-center justify-center pb-8 md:pb-0">
          <form action="form" className="ml-4 md:ml-0 md:space-x-2 space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className="py-2 pl-4 pr-7 bg-transparent border-white border-2"
            />
            <button className="font-[600] text-white bg-[#088178] rounded-md py-2 px-6">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

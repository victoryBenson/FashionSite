import React from "react";
import shoe from "../../src/assets/shoe2.jpg";
import { MdStarRate } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
export const newArrivs = [
  {
    id: 1,
    title: "gucii",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 67.89,
  },
  {
    id: 1,
    title: "gucii",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 67.89,
  },
  {
    id: 2,
    title: "gucii",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 67.89,
  },
  {
    id: 3,
    title: "gucii",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 67.89,
  },
];
export const NewArrivals = () => {
  return (
    <div className="px-4 py-5 lg:p-10 lg:px-16  w-full h-full space-y-8 bg-[#E3E6F3]">
      <div className="w-full text-center text-[34px] font-bold">
        <h1>New Collections</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center  lg:px-8 px-2 space-y-6 md:space-y-0  md:space-x-2">
        {newArrivs.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 border py-2 bg-white rounded-lg w-80 md:w-[10.8rem] lg:w-64 h-96 md:h-72 lg:h-80"
            >
              {/* left */}
              <div className="flex items-center justify-center w-full h-1/2">
                <img
                  src={data.images}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              {/* right */}
              <div className=" w-full h-1/3 px-8 md:px-4 lg:px-8 space-y-2">
                <p className="text-sm font-semibold">{data.title}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p>{data.brand}</p>
                  </div>
                  <div>
                    <p className="flex items-center justify-center">
                      {" "}
                      <MdStarRate className="text-[rgba(243,181,25)]" />
                      <MdStarRate className="text-[rgba(243,181,25)]" />
                      <MdStarRate className="text-[rgba(243,181,25)]" />
                      {data.rating}
                    </p>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <p className="font-bold text-green-600 rounded-md">
                    ${data.price}
                  </p>
                  <div className="text-[24px]">
                    <BsCart3 />
                  </div>
                </div>
                <div className=" h-10 flex items-center w-full justify-center"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

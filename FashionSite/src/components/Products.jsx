import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { CartContext } from "./Features/ContextProvider";

export const Products = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    rating,
    stock,
    brand,
    discountPercentage,
    category,
    images,
    thumbnail,
  } = product;

  const {cartState, dispatch} = useContext(CartContext)

  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: 'Add_To_Cart', payload: item });
  };

  return (
    <div className="flex flex-col justify-start items-start  bg-white rounded-lg w-96 lg:w-56 h-96 md:h-96 lg:h-80">
      {/* left */}
      <div className="flex items-center justify-center w-full h-1/2 ">
        <img src={images[0]} alt="" className="w-full h-full object-contain" />
      </div>
      {/* right */}
      <div className=" w-full h-1/3 px-8 md:px-4 space-y-2">
        <p className="text-sm font-semibold">{title}</p>
        <div className="flex items-center justify-between">
          <div>
            <p>{brand}</p>
          </div>
          <div>
            <p className="flex items-center justify-center">
              {" "}
              <MdStarRate className="text-[rgba(243,181,25)]" />
              <MdStarRate className="text-[rgba(243,181,25)]" />
              <MdStarRate className="text-[rgba(243,181,25)]" />
              {rating}
            </p>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <p className="font-bold text-green-600 rounded-md">${price}</p>
          <div className="text-[24px]">
            <BsCart3 />
          </div>
        </div>
        <div className=" h-10 flex items-center w-full justify-center">
          <button
            className="bg-[#830f0f] text-white p-2  rounded-md text-center text-sm font-bold hover:bg-white border-none hover:text-[#830f0f] hover:border-[#830f0f] hover:border-2 hover:scale-95 ease-in-out transition-all"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

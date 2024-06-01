import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FaqData = [
  {
    id: 1,
    title: "How do I place an order?",
    details:
      "Click on 'add to cart', login,select items, add your details, make payment and check your oder list to confirm.",
  },

  {
    id: 2,
    title: "Can I track my order?",
    details: "always look out for order lists",
  },
  {
    id: 3,
    title: "What payment methods do you accept?",
    details: "transfers and Master Card",
  },
  {
    id: 4,
    title: "How long will it take to receive my order?",
    details:
      "Depending on your location always look out for delivery date before you make payment",
  },
  {
    id: 5,
    title: "What is your return policy?",
    details:
      "All payment will be returned if the customer does not get his/her orders after 26 working days",
  },
];

export const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (index) => {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  };
  return (
    <div className="bg-[#E3E6F3] w-full h-full py-6 md:px-10 text-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-[700] text-[28px]">FAQ'S</h1>
        <p className="font-[500] text-[20px]">Questions? Look here</p>
      </div>
      <div className="p-2 md:p-6 w-full md:w-[90%]">
        {FaqData.map((data, index) => {
          return (
            <div key={index}>
              <div className="w-full h-full mb-4">
                <div
                  className="flex items-center justify-between bg-white rounded-[2rem] py-3 px-6 hover:bg-slate-400"
                  onClick={() => handleToggle(index)}
                >
                  <p className="font-[700] text-[17px]">{data.title}</p>
                  <span>
                    {isOpen === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </span>
                </div>
                <div className="">
                  {isOpen === index && (
                    <div className="flex items-center justify-between bg-white rounded-[1.4rem] pb-2 md:pb-4 pt-2 px-6 mb-[2rem]">
                      {data.details}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

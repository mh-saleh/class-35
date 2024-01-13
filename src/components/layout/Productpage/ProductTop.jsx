import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IoGridSharp } from "react-icons/io5";

const ProductTop = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="p-2 mx-auto duration-300 border text-setGray hover:text-white hover:bg-secBlack">
          {" "}
          <AiOutlineBars />
        </div>
        <div className="p-2 mx-auto duration-300 border text-setGray hover:text-white hover:bg-secBlack">
          <IoGridSharp />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex items-center gap-2 ">
          <p className="text-base font-dm text-setGray">Show:</p>
          <div className="w-[239px] border font-dm text-base text-setGray  ">
            <select className="outline-none w-[230px] pl-1 py-1" name="" id="">
              <option value="">Featured</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-dm text-setGray">Sort by:</p>
          <div className="w-[139px] border font-dm text-base text-setGray  ">
            <select className="outline-none w-[130px] pl-1 py-1" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTop;

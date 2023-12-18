import React from "react";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Flex from "./Flex";
import { FaHeart, FaSyncAlt, FaShoppingCart } from "react-icons/fa";

const Card = ({ src, text, price }) => {
  return (
    <div className="w-1/4 relative group overflow-hidden ">
      <div>
        <Image className="w-full " src={src} />
        <div className="py-2 px-8 bg-black text-white absolute top-5 left-5 text-sm font-bold">
          New
        </div>
        <Flex
          className="flex-col gap-5 items-end absolute py-5 w-full bottom-0  bg-white 
        transform translate-y-full group-hover:-translate-y-20 z-10  duration-500"
        >
          <Flex className="gap-4 items-center">
            <Paragraph
              text="Add to Wish List"
              className=" text-base text-[#767676]"
            />
            <FaHeart className="text-secBlack" />
          </Flex>
          <Flex className="gap-4 items-center">
            <Paragraph text="Compare" className=" text-base text-[#767676]" />
            <FaSyncAlt className="text-secBlack" />
          </Flex>
          <Flex className="gap-4 items-center">
            <Paragraph
              text="Add to Cart"
              className=" text-base text-[#767676]"
            />
            <FaShoppingCart className="text-secBlack" />
          </Flex>
        </Flex>
      </div>
      <div className="z-20 relative bg-white">
        <Flex className="justify-between items-end mt-4">
          <Paragraph text={text} className="text-secBlack text-xl font-bold" />
          <Paragraph text={price} className="text-base text-[#767676]" />
        </Flex>
        <Paragraph text="Black" className="text-base text-[#767676] mt-4" />
      </div>
    </div>
  );
};

export default Card;

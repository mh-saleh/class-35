import React from "react";
import Image from "../../Image";
import Flex from "../../Flex";
import Paragraph from "../../Paragraph";
import { FaHeart, FaSyncAlt, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ src, price, text, ExtraInfo }) => {
  return (
    <div>
      <div className="relative max-w-[370px] overflow-hidden group ">
        <div>
          <Image className="w-full " src={src} />
          <div
            className={`absolute ${
              ExtraInfo ? "px-8 py-2" : ""
            } max-w-[92px] text-sm font-bold text-white bg-black top-5 left-5`}
          >
            {ExtraInfo}
          </div>
          <Flex className="absolute bottom-0 z-10 flex-col items-end w-full gap-5 py-5 duration-500 transform translate-y-full bg-white group-hover:-translate-y-20">
            <Flex className="items-center gap-4">
              <Paragraph
                text="Add to Wish List"
                className=" text-base text-[#767676]"
              />
              <FaHeart className="text-secBlack" />
            </Flex>
            <Flex className="items-center gap-4">
              <Paragraph text="Compare" className=" text-base text-[#767676]" />
              <FaSyncAlt className="text-secBlack" />
            </Flex>
            <Flex className="items-center gap-4">
              <Paragraph
                text="Add to Cart"
                className=" text-base text-[#767676]"
              />
              <FaShoppingCart className="text-secBlack" />
            </Flex>
          </Flex>
        </div>
        <div className="relative z-20 bg-white">
          <Flex className="items-end justify-between mt-4">
            <Paragraph
              text={text}
              className="text-xl font-bold text-secBlack"
            />
            <Paragraph text={price} className="text-base text-[#767676]" />
          </Flex>
          <Paragraph text="Black" className="text-base text-[#767676] mt-4" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

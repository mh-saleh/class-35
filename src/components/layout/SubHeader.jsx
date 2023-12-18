import React from "react";
import Flex from "../Flex";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Container from "../Container";
import Section from "../Section";
import Bars from "../Icons/Bars";
import User from "../Icons/User";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const SubHeader = () => {
  return (
    <Section
      className={`py-6 bg-[#F5F5F3] border border-y border-x-0 border-[#979797] px-[1vw]`}
    >
      <Container>
        <Flex className="justify-between items-center">
          <Flex className={`gap-3 items-center`}>
            <Bars />
            <Paragraph text="Shop by Category" />
          </Flex>
          <form action="action" className="relative w-[600px]">
            <input
              type="text"
              className="py-4 pl-5 w-full "
              placeholder="Search Products"
            />
            <button
              className="absolute z-10 top-4 right-10 items-middle"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
          <Flex className={`gap-10`}>
            <User />
            <FaShoppingCart />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default SubHeader;

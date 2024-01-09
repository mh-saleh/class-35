import Flex from "../../Flex";
import List from "../../List";
import Paragraph from "../../Paragraph";
import Container from "../../Container";
import Section from "../../Section";
import Bars from "../../Icons/Bars";
import User from "../../Icons/User";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SubHeader = ({ ClickElement }) => {
  let [hover, setHover] = useState(false);

  function ClikedMenu() {
    setHover(!hover);
  }
  console.log(hover);

  return (
    <div>
      <Section
        className={`py-6 bg-[#F5F5F3] border border-y border-x-0 border-[#979797] px-[1vw]`}
      >
        <Container>
          <Flex className="items-center justify-between">
            <div className={`gap-3 items-center relative`}>
              <button onClick={ClikedMenu} id="btn">
                <Flex className={`gap-3 items-center relative`}>
                  <Bars />
                  <Paragraph text="Shop by Category" />
                </Flex>
              </button>
              <div
                className={`absolute px-5 py-3  bg-[#F5F5F3] top-7 left-0 border border-[#979797]  
            hidden`}
              >
                <ul className="flex flex-col gap-4">
                  <List text="Home" />
                  <List text="Watch" />
                  <List text="Shoes" />
                  <List text="Medicine" />
                  <List text="Grocery" />
                </ul>
              </div>
            </div>
            <form action="action" className="relative w-[600px]">
              <input
                type="text"
                className="w-full py-4 pl-5 "
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
              <div
                id="user"
                // ref={clickUser}
                className="relative cursor-pointer"
              >
                <User />
                <div
                  // ref={hoveredUser}
                  className={`absolute w-20 pl-2 py-3  bg-[#F5F5F3] top-7 left-0 border border-[#979797] 
                 hidden
            `}
                >
                  <ul className="flex flex-col gap-4">
                    <List text="Login" className="text-base" />
                    <List text="Sign Up" />
                  </ul>
                </div>
              </div>
              <FaShoppingCart />
            </Flex>
          </Flex>
        </Container>
      </Section>
    </div>
  );
};

export default SubHeader;

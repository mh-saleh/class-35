import Flex from "../Flex";
import List from "../List";
import Paragraph from "../Paragraph";
import Container from "../Container";
import Section from "../Section";
import Bars from "../Icons/Bars";
import User from "../Icons/User";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const SubHeader = ({ hover, clickMenu, hoveredMenu }) => {
  return (
    <div>
      <Section
        className={`py-6 bg-[#F5F5F3] border border-y border-x-0 border-[#979797] px-[1vw]`}
      >
        <Container>
          <Flex className="justify-between items-center">
            <div className={`gap-3 items-center relative`}>
              <button ref={clickMenu}>
                <Flex className={`gap-3 items-center relative`}>
                  <Bars />
                  <Paragraph text="Shop by Category" />
                </Flex>
              </button>
              <div
                ref={hoveredMenu}
                className={`absolute px-5 py-3  bg-[#F5F5F3] top-7 left-0 border border-[#979797]  
            ${hover ? "block" : "hidden"}`}
              >
                <ul className="flex flex-col gap-4">
                  <List text="Shirt" className="text-base" />
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
    </div>
  );
};

export default SubHeader;

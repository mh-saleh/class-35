import React from "react";
import Flex from "../../Flex";
import Image from "../../Image";
import Container from "../../Container";
import Section from "../../Section";
import List from "../../List";
import Paragraph from "../../Paragraph";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Section className="py-8 px-[1vw]">
      <Container>
        <Flex className="items-center justify-between">
          <Image src={Logo} className="" />

          <ul className="mx-auto">
            <Flex className="gap-10">
              <li
                className={`text-[#6D6D6D] duration-500 hover:text-secBlack text-sm `}
              >
                <Link to="/">Home</Link>
              </li>

              <List text="Shop" />
              <li
                className={`text-[#6D6D6D] duration-500 hover:text-secBlack text-sm `}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`text-[#6D6D6D] duration-500 hover:text-secBlack text-sm `}
              >
                <Link to="/contact">Contacts</Link>
              </li>
              <List text="Journal" />
            </Flex>
          </ul>
        </Flex>
      </Container>
    </Section>
  );
};

export default Header;

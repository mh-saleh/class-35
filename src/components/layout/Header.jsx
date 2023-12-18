import React from "react";
import Flex from "../Flex";
import Image from "../Image";
import Container from "../Container";
import Section from "../Section";
import List from "../List";
import Paragraph from "../Paragraph";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <Section className="py-8 px-[1vw]">
      <Container>
        <Flex className="justify-between items-center">
          <Image src={Logo} className="" />

          <ul className="mx-auto">
            <Flex className="gap-10">
              <List text="Home" />
              <List text="Shop" />
              <List text="About" />
              <List text="Contacts" />
              <List text="Journal" />
            </Flex>
          </ul>
        </Flex>
      </Container>
    </Section>
  );
};

export default Header;

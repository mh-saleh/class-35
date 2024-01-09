import React from "react";
import Flex from "../../Flex";
import Image from "../../Image";
import Container from "../../Container";
import Section from "../../Section";
import Heading from "../../Heading";
import Paragraph from "../../Paragraph";
import List from "../../List";
import Logo from "../../../assets/images/logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Section className={`bg-[#F5F5F3] py-12 px-[1vw] mt-24`}>
      <Container>
        <Flex className={`justify-between`}>
          <div>
            <Flex className={`gap-56`}>
              <Flex className={`gap-36`}>
                <div>
                  <Heading
                    text="Menu"
                    as="h3"
                    className="mb-4 font-bold tex-base text-secBlack"
                  />
                  <ul>
                    <Flex className={`flex-col gap-2`}>
                      <List text="Home" type={true} />
                      <List text="Shop" type={true} />
                      <List text="About" type={true} />
                      <List text="Contact" type={true} />
                      <List text="Journal" type={true} />
                    </Flex>
                  </ul>
                </div>
                <div>
                  <Heading
                    text="SHOP"
                    as="h3"
                    className="mb-4 font-bold tex-base text-secBlack"
                  />
                  <ul>
                    <Flex className={`flex-col gap-2`}>
                      <List text="Category 1" type={true} />
                      <List text="Category 2" type={true} />
                      <List text="Category 3" type={true} />
                      <List text="Category 4" type={true} />
                      <List text="Category 5" type={true} />
                    </Flex>
                  </ul>
                </div>
                <div>
                  <Heading
                    text="HELP"
                    as="h3"
                    className="mb-4 font-bold tex-base text-secBlack"
                  />
                  <ul>
                    <Flex className={`flex-col gap-2`}>
                      <List text="Privacy Policy" type={true} />
                      <List text="Terms & Conditions" type={true} />
                      <List text="Special E-shop" type={true} />
                      <List text="Shipping" type={true} />
                      <List text="Secure Payments" type={true} />
                    </Flex>
                  </ul>
                </div>
                <div>
                  <Heading
                    text="(052) 611-5711"
                    as="h3"
                    className="mb-1 font-bold tex-base text-secBlack"
                  />
                  <Heading
                    text="company@domain.com"
                    as="h3"
                    className="mb-4 font-bold tex-base text-secBlack"
                  />
                  <ul>
                    <List
                      text="575 Crescent Ave. Quakertown, PA 18951"
                      type={true}
                    />
                  </ul>
                </div>
              </Flex>
            </Flex>
            <Flex className={` text-base gap-6 mt-16`}>
              <FaFacebookF className="text-sm" />
              <FaLinkedinIn />
              <FaInstagram />
            </Flex>
          </div>
          <Flex className={`flex-col justify-between`}>
            <div>
              <Image src={Logo} />
            </div>
            <ul>
              <List
                type={true}
                text={`2020 Orebi Minimal eCommerce Figma Template by Adveits`}
              />
            </ul>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;

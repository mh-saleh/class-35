import React from "react";
import Flex from "../Flex";
import Image from "../Image";
import Container from "../Container";
import Section from "../Section";
import Heading from "../Heading";
import Cards from "../Cards";
import Paragraph from "../Paragraph";
import Banner from "../../assets/images/Banner.png";
import Mask from "../../assets/images/mask.jpg";
import MaskTwo from "../../assets/images/maskTwo.png";
import MaskThree from "../../assets/images/maskThree.png";
import LastAD from "../../assets/images/lastAd.png";
// fafa
import Clock from "../../assets/images/clock.png";
import Watch from "../../assets/images/watch.png";
import Basket from "../../assets/images/basket.png";
import Doll from "../../assets/images/doll.png";
import Bottle from "../../assets/images/bottle.png";
import Bag from "../../assets/images/bag.png";
import Bowl from "../../assets/images/bowl.png";
import Bagpack from "../../assets/images/bagpack.png";
import Cap from "../../assets/images/cap.png";
import Table from "../../assets/images/table.png";
import Headphone from "../../assets/images/headphone.png";
import Glass from "../../assets/images/glass.png";

const Home = () => {
  return (
    <Section>
      <Container>
        <div>
          <Image src={Banner} className={`w-full mb-40`} />
        </div>
        <div className={`mx-[1vw]`}>
          <Flex className={`gap-10 max-h-screen-md box-border`}>
            <div className="mt w-1/2">
              <Image src={Mask} className={`max-w-full`} />
            </div>
            <Flex className="w-1/2 flex-col gap-10">
              <Image src={MaskTwo} className={`w-full h-1/2`} />
              <Image src={MaskThree} className={`w-full h-1/2`} />
            </Flex>
          </Flex>
          <div>
            <Heading
              text="New Arrivals"
              className="text-secBlack text-[39px] font-bold mb-12 mt-32"
              as="h2"
            />
            <Cards
              ImageOne={Clock}
              ImageTwo={Watch}
              ImageThree={Basket}
              ImageFour={Doll}
            />
          </div>
          <div>
            <Heading
              text="Our Bestsellers"
              className="text-secBlack text-[39px] font-bold mb-12 mt-32"
              as="h2"
            />
            <Cards
              ImageOne={Bottle}
              ImageTwo={Bag}
              ImageThree={Bowl}
              ImageFour={Bagpack}
            />
          </div>
          <div className="my-32">
            <Image src={LastAD} />
          </div>
          <div className="mb-25">
            <Heading
              text="Special Offers"
              className="text-secBlack text-[39px] font-bold mb-12 mt-32"
              as="h2"
            />
            <Cards
              ImageOne={Cap}
              ImageTwo={Table}
              ImageThree={Headphone}
              ImageFour={Glass}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Home;

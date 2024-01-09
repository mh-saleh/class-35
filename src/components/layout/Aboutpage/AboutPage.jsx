import React from "react";
import ImageOne from "../../../assets/images/AboutPage/AboutPageBasket.png";
import ImageTwo from "../../../assets/images/AboutPage/AboutPageClcok.png";
import SmallParagraph from "../../SmallParagraph";
import Container from "../../Container";
import SubHeading from "../../SubHeading";

const AboutPage = () => {
  return (
    <Container>
      <div>
        <div className="my-32">
          <SubHeading text={`About`} />
        </div>
        <div className="flex justify-between">
          <img src={ImageOne} alt="" />
          <img src={ImageTwo} alt="" />
        </div>
        <p className="font-normal font-dm text-[#262626] text-[39px] my-[112px]">
          Orebi is one of the world's leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>

        <div className="flex justify-between">
          <div className="max-w-[450px]">
            <p className="font-dm text-[25px] font-bold text-secBlack mb-3">
              Our Vision
            </p>
            <SmallParagraph
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.`}
            />
          </div>
          <div className="max-w-[450px]">
            <p className="font-dm text-[25px] font-bold text-secBlack mb-3">
              Our Story
            </p>
            <SmallParagraph
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`}
            />
          </div>
          <div className="max-w-[450px]">
            <p className="font-dm text-[25px] font-bold text-secBlack mb-3">
              Our Brands
            </p>
            <SmallParagraph
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.`}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;

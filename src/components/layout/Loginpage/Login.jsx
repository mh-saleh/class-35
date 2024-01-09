import React from "react";
import Container from "../../Container";
import SubHeading from "../../SubHeading";
import SubHeadingTwo from "../../SubHeadingTwo";
import InputBox from "../../InputBox";
import Flex from "../../Flex";
import SmallParagraph from "../../SmallParagraph";
import Button from "../../Button";

const Login = () => {
  return (
    <section>
      <Container className={`px-[1vw] my-32`}>
        <SubHeading text={`Login`} className={`mb-32`} />
        <SmallParagraph
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.`}
          className={`max-w-[550px]`}
        />
        <div className="border-b-2 border-[#F0F0F0] my-12 w-full"></div>
        <div>
          <SubHeadingTwo text={`Returning Customer`} className={`mb-10`} />
          <Flex className={`gap-10 max-w-[1055px] mb-8`}>
            <InputBox
              InputText={"company@domain.com"}
              LabelText={"Email address"}
              MaxWidth={`508`}
              ForID={`Mail`}
              className={`flex-grow`}
            />
            <InputBox
              className={`flex-grow`}
              InputText={"company@domain.com"}
              LabelText={"Password"}
              MaxWidth={`508`}
              ForID={`Password`}
            />
          </Flex>
          <button
            className={` py-4 px-20 bg-transparent inline-block text-secBlack text-sm font-dm font-bold border-2 border-secBlack `}
          >
            Log in
          </button>
          <div className="border-b-2 border-[#F0F0F0] my-12 w-full"></div>
          <div>
            <SubHeadingTwo text={`New Customer`} className={`mb-10`} />
            <SmallParagraph
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.`}
              className={`max-w-[550px] mb-10`}
            />
            <Button text={`Continue`} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;

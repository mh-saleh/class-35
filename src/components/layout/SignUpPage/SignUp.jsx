import React, { useEffect, useState } from "react";
import Container from "../../Container";
import SubHeading from "../../SubHeading";
import SmallParagraph from "../../SmallParagraph";
import SubHeadingTwo from "../../SubHeadingTwo";
import InputBox from "../../InputBox";
import Flex from "../../Flex";
import Button from "../../Button";
import axios from "axios";

const SignUp = () => {
  let [mew, setMew] = useState([]);

  useEffect(function () {
    async function halum() {
      let data = await axios.get("https://restcountries.com/v3.1/all");

      setMew(data.data);
    }

    halum();
  }, []);

  let countriesArray = mew.map(function (item) {
    let y = <option>{item.name.common}</option>;
    return y;
  });
  let CapitalsArray = mew.map(function (item) {
    let y = <option>{item.capital}</option>;
    return y;
  });

  return (
    <section className="my-20 px-[1vw]">
      <Container>
        <SubHeading text={`Sign up`} className={`mb-16`} />
        <SmallParagraph
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.`}
          className={`max-w-[550px]`}
        />
        <div className="border-b-2 border-[#F0F0F0] my-16 w-full"></div>
        <SubHeadingTwo text={`Your Personal Details`} className={`mb-10`} />
        <Flex className={`gap-10 max-w-[1055px] mb-8`}>
          <InputBox
            LabelText={"First Name"}
            InputText={"First Name"}
            MaxWidth={`508`}
            className={`flex-grow`}
            ForID={`FirstName`}
          />
          <InputBox
            LabelText={"Last Name"}
            InputText={"Last Name"}
            className={`flex-grow`}
            MaxWidth={`508`}
            ForID={`LastName`}
          />
        </Flex>
        <Flex className={`gap-10 max-w-[1055px] mb-8`}>
          <InputBox
            LabelText={"Email address"}
            InputText={"company@domain.com"}
            MaxWidth={`508`}
            className={`flex-grow`}
            ForID={`Email`}
          />
          <InputBox
            LabelText={"Telephone"}
            InputText={"Your phone number"}
            className={`flex-grow`}
            MaxWidth={`508`}
            ForID={`Phone`}
          />
        </Flex>
        <div className="border-b-2 border-[#F0F0F0] my-20 w-full"></div>
        <SubHeadingTwo text={`New Customer`} className={`mb-12`} />
        <Flex className={`gap-10 max-w-[1055px] mb-6`}>
          <InputBox
            LabelText={"Address 1"}
            InputText={"4279 Zboncak Port Suite 6212"}
            MaxWidth={`508`}
            className={`flex-grow`}
            ForID={`AddressOne`}
          />
          <InputBox
            LabelText={"Address 2"}
            InputText={"Last Name"}
            className={`flex-grow`}
            MaxWidth={`508`}
            ForID={`AddressTwo`}
          />
        </Flex>
        <Flex className={`gap-10 max-w-[1055px] mb-6`}>
          <InputBox
            LabelText={"City"}
            InputText={"Your city"}
            MaxWidth={`508`}
            className={`flex-grow`}
            ForID={`City`}
          />
          <InputBox
            LabelText={"Post Code"}
            InputText={"05228"}
            className={`flex-grow`}
            MaxWidth={`508`}
            ForID={`PostCode`}
          />
        </Flex>
        <Flex className={`gap-10 max-w-[1055px] mb-6`}>
          <div className="flex flex-col flex-grow gap-2 max-w-[508px]">
            <label
              htmlFor="countries"
              className="text-base font-bold text-secBlack font-dm "
            >
              Country
            </label>
            <select id="countries" className="border-b-2 border-[#F0F0F0] pb-3">
              {countriesArray}
            </select>
          </div>
          <div className="flex flex-col flex-grow gap-2 max-w-[508px]">
            <label
              htmlFor="capitals"
              className="text-base font-bold text-secBlack font-dm "
            >
              Capitals
            </label>
            <select
              id="capitals"
              className="border-b-2 border-[#F0F0F0] w-full pb-3"
            >
              {CapitalsArray}
            </select>
          </div>
        </Flex>

        <div className="border-b-2 border-[#F0F0F0] my-20 w-full"></div>
        <SubHeadingTwo text={`Your Password`} className={`mb-12`} />
        <Flex className={`gap-10 max-w-[1055px] mb-6`}>
          <InputBox
            LabelText={"Password"}
            InputText={"Password"}
            MaxWidth={`508`}
            className={`flex-grow`}
            ForID={`Password`}
          />
          <InputBox
            LabelText={"Repeat Password"}
            InputText={"Repeat Password"}
            className={`flex-grow`}
            MaxWidth={`508`}
            ForID={`rePassword`}
          />
        </Flex>

        <div className="border-b-2 border-[#F0F0F0] my-20 w-full"></div>
        <div className="flex flex-col items-start gap-6">
          <div className="flex gap-3">
            <input type="checkbox" />
            <p className={`font-normal font-dm text-[#767676] text-sm`}>
              I have read and agree to the Privacy Policy
            </p>
          </div>
          <div className="flex gap-3">
            <p className={`font-normal font-dm text-[#767676] text-sm`}>
              Subscribe Newsletter
            </p>
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className={`font-normal font-dm text-[#767676] text-sm`}>
                Yes
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className={`font-normal font-dm text-[#767676] text-sm`}>No</p>
            </div>
          </div>
          <Button text={`Log in`} />
        </div>
      </Container>
    </section>
  );
};

export default SignUp;

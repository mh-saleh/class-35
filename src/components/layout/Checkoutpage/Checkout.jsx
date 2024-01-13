import React, { useEffect, useState } from "react";
import Container from "../../Container";
import SubHeading from "../../SubHeading";
import SubHeadingTwo from "../../SubHeadingTwo";
import Flex from "../../Flex";
import InputBox from "../../InputBox";
import axios from "axios";

const Checkout = () => {
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
  return (
    <section className="my-20 px-[1vw]">
      <Container className={``}>
        <SubHeading text={`Checkout`} className={`mb-16`} />
        <SubHeadingTwo text={`Billing Details`} className={`mb-10`} />
        <div className="flex flex-col gap-8">
          {" "}
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
          <div className="flex flex-col flex-grow gap-2 max-w-[1055px]">
            <label
              htmlFor="countries"
              className="text-base font-bold text-secBlack font-dm "
            >
              Country
            </label>
            <select
              id="countries"
              className="border-b-2 border-[#F0F0F0] pb-3 outline-none"
            >
              {countriesArray}
            </select>
          </div>
          <div>
            <InputBox
              LabelText={"Street Address *"}
              InputText={"House number and street name"}
              className={`flex-grow mb-2`}
              MaxWidth={`1055`}
              ForID={`Street Address *`}
            />
            <InputBox
              InputText={"Apartment, suite, unit etc. (optional)"}
              className={`flex-grow`}
              MaxWidth={`1055`}
              ForID={`Street Address *`}
            />
          </div>
          <InputBox
            LabelText={"Town/City *"}
            InputText={"Town/City"}
            className={`flex-grow`}
            MaxWidth={`1055`}
            ForID={`Town/City *`}
          />
          <InputBox
            LabelText={"County (optional)"}
            InputText={"County"}
            className={`flex-grow`}
            MaxWidth={`1055`}
            ForID={`County (optional)`}
          />
          <InputBox
            LabelText={"Post Code *"}
            InputText={"Post Code"}
            className={`flex-grow`}
            MaxWidth={`1055`}
            ForID={`Post`}
          />
          <InputBox
            LabelText={"Phone *"}
            InputText={"Phone"}
            className={`flex-grow`}
            MaxWidth={`1055`}
            ForID={`Phone`}
          />
          <InputBox
            LabelText={"Email Address *"}
            InputText={"Email"}
            className={`flex-grow`}
            MaxWidth={`1055`}
            ForID={`Email`}
          />
        </div>

        <div className="my-20">
          <SubHeading text={`Additional Information`} className={`mb-16`} />
          <div className={`border-b-2 border-[#F0F0F0] max-w-[780px]`}>
            <label
              htmlFor="message"
              className="mb-2 text-base font-bold text-secBlack font-dm"
            >
              Other Notes (optional)
            </label>
            <textarea
              id="message"
              className={`pt-2 block pb-10 text-sm font-normal text-setGray font-dm   focus:outline-none caret-secBlack resize-none overflow-hidden scrollbar w-full max-h-36`}
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;

import React from "react";
import ProductCard from "./ProductCard";
import ImageOne from "../../../assets/images/Product/headphone.png";
import ImageTwo from "../../../assets/images/Product/clock.png";
import ImageThree from "../../../assets/images/Product/bagpack.png";
import Flex from "../../Flex";

const RightSide = () => {
  return (
    <div>
      <Flex className={`flex-wrap gap-12`}>
        <Flex className={` gap-10`}>
          <ProductCard
            src={ImageOne}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
            ExtraInfo={"-10%"}
          />
          <ProductCard
            src={ImageTwo}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
          <ProductCard
            src={ImageThree}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
        </Flex>
        <Flex className={` gap-10`}>
          <ProductCard
            src={ImageOne}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
            ExtraInfo={"-10%"}
          />
          <ProductCard
            src={ImageTwo}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
          <ProductCard
            src={ImageThree}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
        </Flex>
        <Flex className={` gap-10`}>
          <ProductCard
            src={ImageOne}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
            ExtraInfo={"-10%"}
          />
          <ProductCard
            src={ImageTwo}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
          <ProductCard
            src={ImageThree}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
        </Flex>
        <Flex className={` gap-10`}>
          <ProductCard
            src={ImageOne}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
            ExtraInfo={"-10%"}
          />
          <ProductCard
            src={ImageTwo}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
          <ProductCard
            src={ImageThree}
            text={"Basic Crew Neck Tee"}
            price={"$44.00"}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default RightSide;

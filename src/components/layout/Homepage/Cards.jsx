import React from "react";
import Card from "../../Card";
import Flex from "../../Flex";

const Cards = ({ ImageOne, ImageTwo, ImageThree, ImageFour, className }) => {
  return (
    <Flex className={`max-w-container mx-auto gap-10 ${className}`}>
      <Card src={ImageOne} text="Basic Crew Neck Tee" price="$44.00" />
      <Card src={ImageTwo} text="Basic Crew Neck Tee" price="$44.00" />
      <Card src={ImageThree} text="Basic Crew Neck Tee" price="$44.00" />
      <Card src={ImageFour} text="Basic Crew Neck Tee" price="$44.00" />
    </Flex>
  );
};

export default Cards;

import React from "react";

const SubHeadingTwo = ({ text, className }) => {
  return (
    <h4 className={`text-secBlack text-[39px] font-bold font-dm ${className}`}>
      {text}
    </h4>
  );
};

export default SubHeadingTwo;

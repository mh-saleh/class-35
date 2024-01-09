import React from "react";

const SubHeading = ({ text, className }) => {
  return (
    <h3 className={`text-[49px] text-secBlack font-dm font-bold ${className}`}>
      {text}
    </h3>
  );
};

export default SubHeading;

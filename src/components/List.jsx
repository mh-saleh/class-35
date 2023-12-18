import React from "react";

const List = ({ text, className, type }) => {
  let x = (
    <a
      className={`text-[#767676] duration-500 hover:text-secBlack text-sm font-bold ${className}`}
      href="#"
    >
      {text}
    </a>
  );
  let y = (
    <a
      className={`text-[#6D6D6D] duration-500 hover:text-secBlack text-sm  ${className}`}
      href="#"
    >
      {text}
    </a>
  );
  let z = type ? y : x;
  return <li>{z}</li>;
};

export default List;

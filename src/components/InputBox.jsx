import React from "react";

const InputBox = ({ InputText, LabelText, MaxWidth, className, ForID }) => {
  return (
    <div
      className={`border-b-2 border-[#F0F0F0] max-w-[${MaxWidth}px] ${className}`}
    >
      <label
        htmlFor={ForID}
        className="text-base font-bold text-secBlack font-dm "
      >
        {LabelText}
      </label>
      <input
        type="text"
        id={ForID}
        placeholder={InputText}
        className={`pt-2 block pb-3 text-sm font-normal text-setGray font-dm   focus:outline-none caret-secBlack w-full`}
      />
    </div>
  );
};

export default InputBox;

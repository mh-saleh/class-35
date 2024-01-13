import React from "react";

const ProductBttom = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <button className="border border-setGray max-w-[36px] max-h-[36px] px-2 py-1 hover:bg-secBlack font-dm text-sm text-setGray hover:text-white">
          1
        </button>
        <button className="border border-setGray max-w-[36px] max-h-[36px] px-2 py-1 hover:bg-secBlack font-dm text-sm text-setGray hover:text-white">
          2
        </button>
        <button className="border border-setGray max-w-[36px] max-h-[36px] px-2 py-1 hover:bg-secBlack font-dm text-sm text-setGray hover:text-white">
          3
        </button>
        <button className="border border-setGray max-w-[36px] max-h-[36px] px-2 py-1 hover:bg-secBlack font-dm text-sm text-setGray hover:text-white">
          4
        </button>
        <button className="  max-w-[36px] max-h-[36px] px-2 py-1 hover:bg-secBlack font-dm text-sm text-setGray hover:text-white">
          ...
        </button>
        <button className="border border-setGray max-w-[36px] max-h-[36px] px-2 py-1 hover:bg-secBlack font-dm text-sm text-setGray hover:text-white">
          4
        </button>
      </div>
      <p className="text-sm font-normal font-dm text-setGray">
        Products from 1 to 12 of 80
      </p>
    </div>
  );
};

export default ProductBttom;

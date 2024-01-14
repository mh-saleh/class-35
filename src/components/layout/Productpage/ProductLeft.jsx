import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import Container from "../../Container";

const ProductLeft = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-start gap-10 max-w-[370px]">
          <div className="flex flex-col items-start w-full gap-4">
            <button className="flex items-center justify-between w-full mb-8 text-xl font-bold font-dm text-secBlack">
              Shop by Category
            </button>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              Category 1
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              Category 2
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              Category 3
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              Category 4
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              Category 5
            </p>
          </div>
          <div className="flex flex-col items-start w-full gap-4">
            <button className="flex items-center justify-between w-full mb-8 text-xl font-bold font-dm text-secBlack">
              Shop by Category
              <IoMdArrowDropup />
            </button>
            <div className="flex flex-col w-full gap-5 ">
              <div className="flex items-baseline gap-3 align-middle border-b">
                <div className="w-[11px] h-[11px] rounded-full bg-[#15CBA5]"></div>
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Color 1
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <div className="w-[11px] h-[11px] rounded-full bg-[#FF8686]"></div>
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Color 2
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <div className="w-[11px] h-[11px] rounded-full bg-[#7ED321]"></div>
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Color 3
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <div className="w-[11px] h-[11px] rounded-full bg-[#B6B6B6]"></div>
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Color 4
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <div className="w-[11px] h-[11px] rounded-full bg-[#15CBA5]"></div>
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Color 5
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full gap-4">
            <button className="flex items-center justify-between w-full mb-8 text-xl font-bold font-dm text-secBlack">
              Shop by Category
              <IoMdArrowDropup />
            </button>
            <div className="flex flex-col w-full gap-5 ">
              <div className="flex items-baseline gap-3 align-middle border-b">
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Brand 1
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Brand 2
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Brand 3
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Brand 4
                </p>
              </div>
              <div className="flex items-baseline gap-3 align-middle border-b">
                <p className="w-full pb-4 text-base border-b font-dm text-setGray">
                  Brand 5
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full gap-4">
            <button className="flex items-center justify-between w-full mb-8 text-xl font-bold font-dm text-secBlack">
              Shop by Price
            </button>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              $0.00 - $9.99
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              $10.00 - $19.99
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              $20.00 - $29.99
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              $30.00 - $39.99
            </p>
            <p className="w-full pb-4 text-base border-b font-dm text-setGray">
              $40.00 - $69.99
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductLeft;

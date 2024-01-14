import React from "react";
import ProductLeft from "./ProductLeft";
import ProductTop from "./ProductTop";
import ProductCard from "./ProductCard";
import ProductBttom from "./ProductBttom";
import RightSide from "./RightSide";
import Container from "../../Container";
import SubHeading from "../../SubHeading";

const Product = () => {
  return (
    <section className="my-32 px-[1vw]">
      <Container>
        <div className="my-32">
          <SubHeading text={`Products`} />
        </div>
        <div className="flex ">
          <div className="w-full">
            <ProductLeft />
          </div>
          <div>
            <div className="mb-12 ml-8">
              <ProductTop />
            </div>
            <div className="ml-8">
              <RightSide />
            </div>
            <div className="mt-10 ml-8">
              <ProductBttom />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Product;

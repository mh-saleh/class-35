import React from "react";
import SmallParagraph from "../../SmallParagraph";
import Button from "../../Button";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="py-20 px-[1vw]">
      <h2 className="font-bold font-dm text-secBlack text-[200px]">404</h2>
      <SmallParagraph
        text={`The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?`}
        className={`max-w-[550px] mb-10`}
      />
      <form
        action="action"
        className="relative w-[600px] mt-12 mb-16 border-2 border-[#F0F0F0]"
      >
        <input
          type="search"
          className="w-full py-5 pl-5 "
          placeholder="Search Products"
        />
        <button
          className="absolute z-10 top-5 right-10 items-middle"
          type="submit"
        >
          <FaSearch />
        </button>
      </form>
      <Link to={`/`}>
        <Button text={`Back to Home`} />
      </Link>
    </section>
  );
};

export default ErrorPage;

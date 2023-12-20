import Cards from "./components/Cards";
import Header from "./components/layout/Header";
import SubHeader from "./components/layout/SubHeader";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import React, { useRef, useState } from "react";

function App() {
  let [hover, setHover] = useState(false);
  let clickMenu = useRef(null);
  let hoveredMenu = useRef(null);

  let mew = (event) => {
    if (clickMenu.current.contains(event.target)) {
      setHover(!hover);
    } else if (hoveredMenu.current.contains(event.target)) {
      setHover(hover);
    } else {
      setHover(false);
    }
  };
  return (
    <>
      <div onClick={mew}>
        <Header />
        <SubHeader
          hoveredMenu={hoveredMenu}
          hover={hover}
          clickMenu={clickMenu}
        />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;

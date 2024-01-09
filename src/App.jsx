import Header from "./components/layout/Header/Header";
import SubHeader from "./components/layout/Header/SubHeader";
import Navbar from "./components/layout/Header/Navbar";
import Home from "./components/layout/Homepage/Home";
import Footer from "./components/layout/Footer/Footer";
import React, { useEffect, useRef, useState } from "react";
import AboutPage from "./components/layout/Aboutpage/AboutPage";
import InputBox from "./components/InputBox";
import ContactPage from "./components/layout/Contactpage/ContactPage";
import Login from "./components/layout/Loginpage/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/layout/SignUpPage/SignUp";
import ErrorPage from "./components/layout/Errorpage/ErrorPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

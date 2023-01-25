import React from "react";

import Navbar from "./Navbar";
import Home from './Home'
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}



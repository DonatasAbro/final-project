import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TOS from "./TOS";
import Policy from "./Policy";
import Location from "./Location";
import FAQ from "./FAQ";

const Views = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tos" element={<TOS />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/location" element={<Location />} />
      <Route path="/faq" element={<FAQ />} />
      <Route
        path="*"
        element={
          <div>
            <h1 className="my-4">404 Not found!</h1>
          </div>
        }
      />
    </Routes>
  );
};

export default Views;

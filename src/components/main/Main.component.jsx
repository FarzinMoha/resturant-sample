import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Main.style.scss";
import Intro from "../intro/Intro.component";
import ProductType from "../product-type/ProductType.component";
import Products from "../products/Products.component";
import Pizza from "../pizza/Pizza.component";
import Panuozzi from "../panuozzi/Panuozzi.component";
import Vino from "../vino/Vino.component";
import GoodTime from "../good-time/GoodTime.component";
import Final from "../final/Final.component";
const Main = ({scrollPosition}) => {


  return (
    <div className="main-container">
      <Intro scrollPosition={scrollPosition} />
      <ProductType scrollPosition={scrollPosition} />
      <Products scrollPosition={scrollPosition} />
      <Pizza scrollPosition={scrollPosition} />
      <Panuozzi scrollPosition={scrollPosition} />
      <Vino scrollPosition={scrollPosition} />
      <GoodTime scrollPosition={scrollPosition} />
      <Final scrollPosition={scrollPosition} />
      <Outlet />
    </div>
  );
};

export default Main;

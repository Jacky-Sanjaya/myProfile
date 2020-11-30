import React from "react";
import "./App.css";
import Intro from "./component/screen/intro/Intro";
import Achieve from "./component/screen/achieve/Achieve";
import Navbarr from "../src/component/navbar/Navbar";
import Writer from "./component/typeWriter/TypeWriter";
import Carousell from "./component/carousel/Carousel";

export default function App() {
  return (
    <div>
      <Navbarr />
      <Carousell />
      <Writer />
      <Intro />
      <Achieve />
    </div>
  );
}

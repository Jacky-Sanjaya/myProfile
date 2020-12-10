import React from "react";
import "./App.css";
import About from "./component/screen/about/About";
import Stack from "./component/screen/stack/Stack.jsx";
import Navbarr from "../src/component/navbar/Navbar.jsx";
import Writer from "./component/typeWriter/TypeWriter";
import Carousell from "./component/carousel/Carousel";
import Project from "./component/screen/project/Project.jsx";

export default function App() {
  return (
    <div>
      <Navbarr />
      <Carousell />
      <Writer />
      <About />
      <Stack />
      <Project />
    </div>
  );
}

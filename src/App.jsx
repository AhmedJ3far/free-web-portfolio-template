import "./App.css";
// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import useHeader from "./components/Header";
import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import Portfolio from "./components/Portfolio";

function App() {
  // const getState = () => {};
  const { render } = useHeader();
  return (
    <>
      {render}
      <div className="container">
        <Hero />
      </div>
    </>
  );
}

export default App;
